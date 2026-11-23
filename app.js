(function () {
  "use strict";
  var KD = "rm-done-v1", KC = "rm-collapsed-v1";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var ICON = {
    tick: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8.5l3.2 3L13 4.5"/></svg>',
    chev: '<svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>'
  };
  function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function load(k) { try { return new Set(JSON.parse(localStorage.getItem(k) || "[]")); } catch (e) { return new Set(); } }
  function save(k, set) { try { localStorage.setItem(k, JSON.stringify(Array.from(set))); } catch (e) {} }

  var done = load(KD), collapsed = load(KC);
  var all = {}, stations = [], advBtns = [];
  var kindName = { main: "Block", sub: "Topic", dsa: "Daily DSA", ai: "Sunday AI", adv: "Advanced", mile: "Milestone", start: "Start" };

  function reg(d, kind, block) { all[d.id] = Object.assign({ kind: kind, block: block }, d); }

  function chip(d, kind, block) {
    reg(d, kind, block);
    var b = el("button", "chip " + kind);
    b.type = "button"; b.dataset.id = d.id;
    b.setAttribute("aria-haspopup", "dialog");
    b.innerHTML = '<span class="tick">' + ICON.tick + '</span><span class="lbl"></span><span class="sr st"></span>';
    b.querySelector(".lbl").textContent = d.t;
    b.addEventListener("click", function () { openPanel(d.id, b); });
    return b;
  }

  function group(title, cls, items, kind, block) {
    var g = el("div", cls);
    g.appendChild(el("h4", "lane-h", esc(title)));
    var c = el("div", "chips");
    var chips = items.map(function (d) { var x = chip(d, kind, block); c.appendChild(x); return x; });
    g.appendChild(c);
    return { node: g, chips: chips };
  }

  // ---------- start flag ----------
  var routeEl = $("#route");
  var startNode = n("start", "Start · 19 Nov 2026",
    "Study days: weekdays 2 h (min 1 h), Saturday 4 h (min 2 h), Sunday 3 h (min 1.5 h). No fixed times.",
    ["Each weekday: one DSA problem, the main block section with exercises, then the log.", "Saturday: harder problems, labs and the weekly review.", "Sunday: the applied AI build plus re-solving old problems."],
    "Log every day: planned, actual and wasted minutes.", [L.doc, L.repo]);

  function flagStation(d, kind, label, idx, glyph) {
    reg(d, kind, label);
    var li = el("li", "station"); li.style.setProperty("--i", idx);
    li.appendChild(el("span", "pin flag", glyph));
    var card = el("div", "card flagcard");
    var txt = el("div");
    txt.appendChild(el("div", "eyebrow", esc(label)));
    txt.appendChild(el("h3", null, esc(d.t)));
    txt.appendChild(el("p", null, esc(d.w)));
    var b = el("button", "btn chip-btn", "Details");
    b.type = "button"; b.dataset.id = d.id; b.setAttribute("aria-haspopup", "dialog");
    b.addEventListener("click", function () { openPanel(d.id, b); });
    card.appendChild(txt); card.appendChild(b);
    li.appendChild(card);
    routeEl.appendChild(li);
    return { li: li, btn: b, pin: li.querySelector(".pin"), d: d };
  }
  var startSt = flagStation(startNode, "start", "Start", 0, '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>');

  // ---------- block stations ----------
  ROWS.forEach(function (r, i) {
    var parts = r.main.t.split(" · ");
    var eb = parts[0], title = parts.slice(1).join(" · ");
    var blockName = eb;
    reg(r.main, "main", blockName);

    var li = el("li", "station"); li.dataset.key = r.key; li.style.setProperty("--i", i + 1);
    var pin = el("span", "pin", esc(r.key.replace("b", ""))); li.appendChild(pin);
    var card = el("article", "card");
    var bodyId = "body-" + r.key;

    var head = el("div", "card-h");
    var h3 = el("h3");
    var tg = el("button", "toggle");
    tg.type = "button"; tg.setAttribute("aria-expanded", "true"); tg.setAttribute("aria-controls", bodyId);
    tg.innerHTML = '<span class="eb">' + esc(eb) + '</span><span class="ttl">' + esc(title) + '</span>' + ICON.chev;
    h3.appendChild(tg); head.appendChild(h3);

    var meta = el("div", "hmeta");
    var badge = el("span", "badge", "Next up"); badge.hidden = true; meta.appendChild(badge);
    if (r.main.hrs) meta.appendChild(el("span", "hours", esc(r.main.hrs)));
    var mini = el("div", "mini", '<div class="bar" aria-hidden="true"><i></i></div><span class="count">0/0</span>');
    meta.appendChild(mini);
    head.appendChild(meta);
    card.appendChild(head);

    var body = el("div", "card-b"); body.id = bodyId;
    body.appendChild(el("p", "what", esc(r.main.w)));

    var topics = group("Topics", "grp", r.left.concat(r.right), "sub", blockName);
    body.appendChild(topics.node);
    var lanes = el("div", "lanes");
    var dsa = group("Daily DSA", "lane dsa", r.dsa, "dsa", blockName);
    var ai = group("Sunday AI", "lane ai", r.ai, "ai", blockName);
    lanes.appendChild(dsa.node); lanes.appendChild(ai.node);
    body.appendChild(lanes);

    var act = el("div", "actions");
    var det = el("button", "btn", "Block details, checklist and links");
    det.type = "button"; det.dataset.id = r.main.id; det.setAttribute("aria-haspopup", "dialog");
    det.addEventListener("click", function () { openPanel(r.main.id, det); });
    act.appendChild(det); body.appendChild(act);

    card.appendChild(body); li.appendChild(card); routeEl.appendChild(li);

    var st = {
      key: r.key, li: li, pin: pin, badge: badge, toggle: tg, body: body, mini: mini, title: eb + " " + title,
      groups: [topics, dsa, ai],
      chips: topics.chips.concat(dsa.chips, ai.chips),
      ids: [r.main.id].concat(topics.chips.concat(dsa.chips, ai.chips).map(function (c) { return c.dataset.id; })),
      mainBtn: det
    };
    stations.push(st);
    tg.addEventListener("click", function () { setCollapsed(st, tg.getAttribute("aria-expanded") === "true"); persistCollapsed(); syncFoldBtn(); });
    if (collapsed.has(r.key)) setCollapsed(st, true);
  });

  var mileSt = flagStation(MILE, "mile", "Milestone", ROWS.length + 1, '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 21V4m0 0h11l-2 4 2 4H6"/></svg>');
  $("#route").classList.add("tail");

  // ---------- advanced ----------
  var advgrid = $("#advgrid");
  ADV.forEach(function (a) {
    reg(a, "adv", "Advanced");
    var b = el("button", "adv");
    b.type = "button"; b.dataset.id = a.id; b.setAttribute("aria-haspopup", "dialog");
    b.innerHTML = '<span class="t"><span class="tick">' + ICON.tick + '</span><span class="lbl"></span></span><span class="d"></span><span class="sr st"></span>';
    b.querySelector(".lbl").textContent = a.t; b.querySelector(".d").textContent = a.w;
    b.addEventListener("click", function () { openPanel(a.id, b); });
    advgrid.appendChild(b); advBtns.push(b);
  });

  // ---------- state painting ----------
  function setCollapsed(st, c) {
    st.toggle.setAttribute("aria-expanded", c ? "false" : "true");
    st.body.hidden = !!c;
    if (c) collapsed.add(st.key); else collapsed.delete(st.key);
  }
  function persistCollapsed() { save(KC, collapsed); }
  function syncFoldBtn() {
    var allClosed = stations.every(function (s) { return s.body.hidden; });
    $("#fold-t").textContent = allClosed ? "Expand all" : "Collapse all";
    $("#btn-fold").dataset.state = allClosed ? "closed" : "open";
  }

  function paint() {
    var ids = Object.keys(all);
    var total = ids.length, c = 0;
    ids.forEach(function (id) { if (done.has(id)) c++; });
    var pct = Math.round(100 * c / total);
    $("#pfill").style.width = pct + "%";
    $("#pbar").setAttribute("aria-valuenow", pct);
    $("#pcount").textContent = c + " / " + total;

    document.querySelectorAll(".chip,.adv").forEach(function (b) {
      var d = done.has(b.dataset.id);
      b.classList.toggle("done", d);
      var s = b.querySelector(".st"); if (s) s.textContent = d ? " (done)" : "";
    });
    var nextSt = null;
    stations.forEach(function (st) {
      var cnt = st.ids.filter(function (id) { return done.has(id); }).length;
      var fill = st.mini.querySelector(".bar i"); fill.style.width = (100 * cnt / st.ids.length) + "%";
      st.mini.querySelector(".count").textContent = cnt + "/" + st.ids.length;
      var complete = cnt === st.ids.length;
      st.pin.classList.toggle("complete", complete);
      st.pin.classList.remove("next"); st.badge.hidden = true;
      if (!complete && !nextSt) nextSt = st;
    });
    if (nextSt) { nextSt.pin.classList.add("next"); nextSt.badge.hidden = false; }
    paint.next = nextSt;
    [startSt, mileSt].forEach(function (f) { f.btn.closest(".card").style.opacity = done.has(f.d.id) ? .7 : 1; });
  }

  // ---------- panel ----------
  var panel = $("#panel"), scrim = $("#scrim"), pbody = $("#pbody"), app = $("#app"), opener = null;
  function openSheet(html, mount, from) {
    opener = from || document.activeElement;
    pbody.innerHTML = html;
    if (mount) mount();
    panel.classList.add("on"); scrim.classList.add("on");
    app.setAttribute("inert", ""); app.setAttribute("aria-hidden", "true");
    panel.scrollTop = 0;
    $("#close").focus({ preventScroll: true });
  }
  function closePanel() {
    if (!panel.classList.contains("on")) return;
    panel.classList.remove("on"); scrim.classList.remove("on");
    app.removeAttribute("inert"); app.removeAttribute("aria-hidden");
    if (opener && document.contains(opener)) opener.focus({ preventScroll: true });
  }
  function openPanel(id, from) {
    var d = all[id];
    var h = '<div class="tags"><span class="tag k">' + esc(kindName[d.kind]) + '</span>';
    if (d.block && d.block !== d.t && d.kind !== "start" && d.kind !== "mile") h += '<span class="tag">' + esc(d.block) + '</span>';
    if (d.hrs) h += '<span class="tag">' + esc(d.hrs) + '</span>';
    h += '</div><h2 id="ptitle">' + esc(d.t) + '</h2>';
    h += '<h3>What</h3><p>' + esc(d.w) + '</p>';
    if (d.h && d.h.length) h += '<h3>How to do it</h3><ol>' + d.h.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ol>";
    if (d.d) h += '<h3>Done when</h3><p>' + esc(d.d) + '</p>';
    if (d.l && d.l.length) h += '<h3>Resources</h3><ul>' + d.l.map(function (x) { return '<li><a href="' + esc(x[1]) + '" target="_blank" rel="noopener noreferrer">' + esc(x[0]) + ' <span aria-hidden="true">↗</span><span class="sr"> (opens in new tab)</span></a></li>'; }).join("") + "</ul>";
    h += '<button type="button" class="donebtn" id="dbtn" aria-pressed="false"></button>';
    openSheet(h, function () {
      var btn = $("#dbtn");
      function label() {
        var on = done.has(id);
        btn.setAttribute("aria-pressed", on ? "true" : "false");
        btn.innerHTML = ICON.tick + (on ? "Marked done · tap to undo" : "Mark as done");
      }
      label();
      btn.addEventListener("click", function () {
        if (done.has(id)) done.delete(id); else done.add(id);
        save(KD, done); paint(); label();
      });
    }, from);
  }

  function openProgress(from) {
    var code = btoa(JSON.stringify({ v: 1, done: Array.from(done) }));
    var h = '<div class="tags"><span class="tag k">Progress</span></div><h2 id="ptitle">Move your progress between devices</h2>' +
      '<p class="note">Ticks are stored in this browser only. Copy the code below, open the site on your other device, then paste it under "Import".</p>' +
      '<h3>Export</h3><label class="sr" for="ex">Export code</label><textarea id="ex" readonly></textarea>' +
      '<div class="row"><button class="btn" id="copy" type="button">Copy code</button></div><p class="msg" id="m1" role="status"></p>' +
      '<h3>Import</h3><label class="sr" for="im">Paste code</label><textarea id="im" placeholder="Paste a code here"></textarea>' +
      '<div class="row"><button class="btn" id="load" type="button">Replace my ticks with this code</button></div><p class="msg" id="m2" role="status"></p>';
    openSheet(h, function () {
      $("#ex").value = code;
      $("#copy").addEventListener("click", function () {
        var ta = $("#ex");
        function ok() { $("#m1").textContent = "Copied."; }
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(code).then(ok, function () { ta.select(); document.execCommand("copy"); ok(); });
        else { ta.select(); try { document.execCommand("copy"); ok(); } catch (e) { $("#m1").textContent = "Select the text and copy it manually."; } }
      });
      $("#load").addEventListener("click", function () {
        var m = $("#m2"); m.className = "msg";
        try {
          var o = JSON.parse(atob($("#im").value.trim()));
          if (!o || o.v !== 1 || !Array.isArray(o.done)) throw 0;
          done = new Set(o.done.filter(function (x) { return typeof x === "string" && all[x]; }));
          save(KD, done); paint(); m.textContent = "Loaded " + done.size + " ticks.";
        } catch (e) { m.className = "msg bad"; m.textContent = "That code is not valid. Copy it again from the other device."; }
      });
    }, from);
  }

  $("#close").addEventListener("click", closePanel);
  scrim.addEventListener("click", closePanel);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePanel(); });

  // ---------- toolbar ----------
  $("#btn-next").addEventListener("click", function () {
    var st = paint.next;
    if (!st) { $("#live").textContent = "Every block is complete."; return; }
    setCollapsed(st, false); persistCollapsed(); syncFoldBtn();
    st.li.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    st.toggle.focus({ preventScroll: true });
  });
  $("#btn-fold").addEventListener("click", function () {
    var close = this.dataset.state !== "closed";
    stations.forEach(function (s) { setCollapsed(s, close); });
    persistCollapsed(); syncFoldBtn();
  });
  $("#btn-sync").addEventListener("click", function () { openProgress(this); });

  // ---------- search ----------
  var q = $("#q");
  function applyFilter() {
    var s = q.value.trim().toLowerCase(), hits = 0;
    stations.forEach(function (st) {
      var blockHit = s && st.title.toLowerCase().indexOf(s) > -1, any = false;
      st.groups.forEach(function (g) {
        var gAny = false;
        g.chips.forEach(function (c) {
          var d = all[c.dataset.id];
          var hit = !s || blockHit || (d.t + " " + d.w).toLowerCase().indexOf(s) > -1;
          c.hidden = !hit; if (hit) { gAny = true; any = true; if (s) hits++; }
        });
        g.node.hidden = !gAny;
      });
      st.li.hidden = !!s && !any;
      if (s && any) { st.body.hidden = false; st.toggle.setAttribute("aria-expanded", "true"); }
      else if (!s) { var c = collapsed.has(st.key); st.body.hidden = c; st.toggle.setAttribute("aria-expanded", c ? "false" : "true"); }
    });
    advBtns.forEach(function (b) {
      var d = all[b.dataset.id];
      var hit = !s || (d.t + " " + d.w).toLowerCase().indexOf(s) > -1;
      b.hidden = !hit; if (hit && s) hits++;
    });
    $("#live").textContent = s ? (hits ? hits + " matching topic" + (hits === 1 ? "" : "s") : "No topics match “" + q.value.trim() + "”.") : "";
    syncFoldBtn();
  }
  q.addEventListener("input", applyFilter);

  paint(); syncFoldBtn();
})();
