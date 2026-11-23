// ---------- link library ----------
const L = {
  mcs:["6.042 textbook (PDF)","https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/resources/mit6_042js15_textbook_pdf/"],
  o6042:["MIT 6.042J course (videos)","https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/"],
  o6006:["MIT 6.006 lecture videos","https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/video_galleries/lecture-videos"],
  o6006r:["MIT 6.006 notes and problem sets","https://www.ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/pages/resource-index/"],
  nc:["NeetCode 150 practice","https://neetcode.io/practice"],
  sql50:["LeetCode SQL 50","https://leetcode.com/studyplan/top-sql-50/"],
  c213:["CMU 15-213 (CS:APP course)","https://www.cs.cmu.edu/~213/"],
  n2t:["Nand2Tetris","https://www.nand2tetris.org/"],
  ostep:["OSTEP (free book)","https://pages.cs.wisc.edu/~remzi/OSTEP/"],
  xv6:["MIT 6.1810 (xv6)","https://pdos.csail.mit.edu/6.1810/"],
  kr:["Kurose and Ross resources","https://gaia.cs.umass.edu/kurose_ross/"],
  beej:["Beej's Guide to Network Programming","https://beej.us/guide/bgnet/"],
  c445:["CMU 15-445 Database Systems","https://15445.courses.cs.cmu.edu/"],
  toc:["MIT 18.404J Theory of Computation","https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/"],
  ddia:["Designing Data-Intensive Applications","https://dataintensive.net/"],
  apsd:["A Philosophy of Software Design","https://web.stanford.edu/~ouster/cgi-bin/book.php"],
  sdp:["System Design Primer","https://github.com/donnemartin/system-design-primer"],
  sdpPaste:["System Design Primer: Pastebin","https://github.com/donnemartin/system-design-primer/blob/master/solutions/system_design/pastebin/README.md"],
  rmsd:["roadmap.sh system design","https://roadmap.sh/system-design"],
  ps:["PortSwigger Web Security Academy","https://portswigger.net/web-security"],
  owasp:["OWASP Top 10","https://owasp.org/www-project-top-ten/"],
  owapi:["OWASP API Security Top 10","https://owasp.org/API-Security/"],
  owllm:["OWASP GenAI / LLM Top 10","https://genai.owasp.org/"],
  boneh:["Dan Boneh, Cryptography I","https://www.coursera.org/learn/crypto"],
  b3la:["3Blue1Brown linear algebra","https://www.3blue1brown.com/topics/linear-algebra"],
  m1806:["MIT 18.06 Linear Algebra","https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/"],
  s110:["Harvard Stat 110","https://projects.iq.harvard.edu/stat110"],
  mml:["Mathematics for Machine Learning (free)","https://mml-book.github.io/"],
  ng:["Andrew Ng ML Specialization","https://www.coursera.org/specializations/machine-learning-introduction"],
  islp:["ISLP (free book)","https://www.statlearning.com/"],
  sq:["StatQuest","https://statquest.org/"],
  aefs:["ai-engineering-from-scratch","https://github.com/rohitg00/ai-engineering-from-scratch"],
  agents:["Building effective agents","https://www.anthropic.com/engineering/building-effective-agents"],
  mcp:["MCP docs","https://modelcontextprotocol.io/"],
  mcppy:["MCP Python SDK","https://github.com/modelcontextprotocol/python-sdk"],
  insp:["MCP Inspector","https://github.com/modelcontextprotocol/inspector"],
  evals:["Your AI product needs evals","https://hamel.dev/blog/posts/evals/"],
  chip:["Chip Huyen, AI Engineering","https://www.oreilly.com/library/view/ai-engineering/9781098166298/"],
  kz:["Karpathy, Zero to Hero","https://karpathy.ai/zero-to-hero.html"],
  d2l:["Dive into Deep Learning","https://d2l.ai/"],
  fai:["fast.ai course","https://course.fast.ai/"],
  hf:["Hugging Face Learn","https://huggingface.co/learn"],
  vllm:["vLLM docs","https://docs.vllm.ai/"],
  k8s:["Kubernetes basics tutorial","https://kubernetes.io/docs/tutorials/kubernetes-basics/"],
  tf:["Terraform tutorials","https://developer.hashicorp.com/terraform/tutorials"],
  dist:["MIT 6.5840 Distributed Systems","https://pdos.csail.mit.edu/6.824/"],
  gh:["GitHub CLI","https://cli.github.com/"],
  anki:["Anki","https://apps.ankiweb.net/"],
  repo:["Your repo: cs-foundations","https://github.com/Rabbitshah/cs-foundations"],
  doc:["Roadmap doc (private)","https://claude.ai/artifact/HkPy2BwYCi2Q2mg4b9tCwy"]
};
const lc = s => "https://leetcode.com/problems/"+s+"/";

// node helper: n(id,title,what,how[],done,links[],hours)
const n=(id,t,w,h,d,l,hrs)=>({id,t,w,h,d,l:l||[],hrs});

// ---------- data ----------
const ROWS = [
 {key:"b0",
  main:n("b0","Block 0 · Setup and diagnose","Build the study system and measure where you really stand before planning anything.",
   ["Create the repo, venv, pytest, CI and Anki.","Take five baselines: DSA, math, SQL, system design, AI evals.","Rank the gaps you found."],
   "Repo live with green CI, five baseline scores logged, ranked gap list written.",[L.repo,L.doc],"1 week"),
  left:[
   n("b0-repo","Repo setup","One public repo holds notes, solutions, logs and progress.",["Follow steps 1 to 8 in the roadmap doc.","Ignore agent files (handoff.md, .claude-review/).","Commit at the end of every session."],"CI green, README progress table in place.",[L.repo,L.gh,L.anki]),
   n("b0-dsa","DSA baseline","Four timed problems across topics to see your real level.",["25 min each, no help: Valid Parentheses, Merge Two Sorted Lists, Number of Islands, Coin Change.","Log time and result for each."],"All four attempted and logged.",[["Valid Parentheses",lc("valid-parentheses")],["Merge Two Sorted Lists",lc("merge-two-sorted-lists")],["Number of Islands",lc("number-of-islands")],["Coin Change",lc("coin-change")]]),
   n("b0-math","Math baseline","Check proof, induction and asymptotics skills before Block 1.",["Do MIT 6.006 Problem Set 0 in 90 min, timed.","Mark it with the posted solutions."],"Score logged; weak areas listed.",[L.o6006r])
  ],
  right:[
   n("b0-sql","SQL baseline","Check joins, grouping and window functions.",["First 10 problems of LeetCode SQL 50 in 60 min."],"Score and failed patterns logged.",[L.sql50]),
   n("b0-sd","System design baseline","See how you design without help.",["Design Pastebin with short URLs on paper in 45 min.","Compare with the System Design Primer answer."],"Written list of what you missed.",[L.sdpPaste,L.sdp]),
   n("b0-explain","Explain test","Test whether you understand your own shipped work.",["One page on your 90-day data-retention system: data flow, failure modes, why each choice.","No code open; then compare with the code."],"Page written, mistakes marked.",[]),
   n("b0-gap","Ranked gap list","Turn baselines into priorities.",["List every gap from the five baselines.","Rank by how much it blocks later modules."],"List committed in log/.",[L.repo])
  ],
  dsa:[n("b0-l-dsa","Pipeline test: Contains Duplicate","Prove the solve-test-push loop works.",["Solve in Python with a pytest file.","Push and confirm CI is green."],"Green CI on a real solution.",[["Contains Duplicate",lc("contains-duplicate")]])],
  ai:[n("b0-l-ai","Jarvis eval baseline","Measure Jarvis before improving it.",["Read the evals article.","Write 25 test questions, run them, record the pass rate and failure types."],"Pass rate saved in projects/jarvis-evals.md.",[L.evals])]
 },
 {key:"b1",
  main:n("b1","Block 1 · F1 Discrete math and proofs","The proof base that algorithm analysis, theory of computation and ML math all rely on.",
   ["Watch the 6.042 lecture for the topic.","Read the textbook chapter.","Do the Class Problems in writing, every time."],
   "You can write clean proofs for 6.042 problem sets without looking at solutions.",[L.mcs,L.o6042],"40 h · ~4 weeks"),
  left:[
   n("b1-proofs","Proofs","What a proof is: direct, contrapositive, cases, contradiction.",["Ch 1 What is a Proof?","4+ Class Problems written out."],"You can prove a claim three different ways.",[L.mcs,L.o6042]),
   n("b1-wop","Well ordering","Using the smallest counterexample to prove things.",["Ch 2 The Well Ordering Principle, all Class Problems."],"You can turn any induction proof into a well-ordering proof.",[L.mcs]),
   n("b1-logic","Logic","Propositional and predicate logic, quantifiers, equivalences.",["Ch 3 Logical Formulas.","Translate 10 English statements into logic."],"You can negate nested quantifiers correctly.",[L.mcs]),
   n("b1-sets","Sets, functions, relations","Mathematical data types used everywhere in CS.",["Ch 4 Mathematical Data Types.","Exercises on injections, surjections, relations."],"You can prove properties of functions and relations.",[L.mcs]),
   n("b1-ind","Induction","Ordinary and strong induction.",["Ch 5 Induction plus the 6.042 induction lecture.","5+ problems, including strong induction."],"You can pick the right induction form and write it cleanly.",[L.mcs,L.o6042])
  ],
  right:[
   n("b1-sm","State machines and invariants","Proving programs and processes stay correct.",["Ch 6 State Machines.","Find the invariant in 3 problems."],"You can prove a loop invariant.",[L.mcs]),
   n("b1-rdt","Structural induction","Induction over recursive data like trees and lists.",["Ch 7 Recursive Data Types."],"You can prove a fact about every binary tree.",[L.mcs]),
   n("b1-graph","Graphs","Graph basics: degree, paths, trees, coloring, matching.",["Simple Graphs chapters in the textbook.","Prove 3 graph facts."],"You can prove basic facts about trees and connectivity.",[L.mcs]),
   n("b1-count","Counting","Sum and product rules, bijections, permutations, combinations, pigeonhole.",["Counting chapters in the textbook.","10 counting problems."],"You solve counting problems without guessing formulas.",[L.mcs]),
   n("b1-prob","Discrete probability","Events, conditional probability, independence, expectation.",["Probability chapters in the textbook."],"You can compute expectations of simple random processes.",[L.mcs]),
   n("b1-rec","Sums and recurrences","Asymptotics, sums, solving recurrences.",["Sums and Asymptotics plus Recurrences chapters."],"You can solve divide-and-conquer recurrences.",[L.mcs])
  ],
  dsa:[
   n("b1-l1","Arrays and hashing","Hash maps and sets to trade space for time.",["NeetCode 150, Arrays and Hashing section.","Write the pattern note in dsa/patterns/."],"All problems in the section solved; pattern note written.",[L.nc]),
   n("b1-l2","Two pointers","Two indices moving through sorted or symmetric data.",["NeetCode Two Pointers section."],"Section done; you can say when two pointers apply.",[L.nc]),
   n("b1-l3","Sliding window","A moving window over arrays or strings.",["NeetCode Sliding Window section.","Watch 6.006 Lectures 1 and 2 on Saturdays."],"Section done.",[L.nc,L.o6006])
  ],
  ai:[
   n("b1-a1","How LLMs behave","Tokens, context windows, sampling, cost per call.",["Matching lessons in ai-engineering-from-scratch.","Measure token cost of Jarvis on your eval set."],"Cost per eval run recorded.",[L.aefs,L.chip]),
   n("b1-a2","Agent patterns","Workflows vs agents: chaining, routing, orchestrator, evaluator.",["Read Building effective agents.","Map Jarvis to these patterns in a 1-page note."],"Note written; 5 tool-use eval questions added.",[L.agents])
  ]
 },
 {key:"b2",
  main:n("b2","Block 2 · F3 Systems, then F4 OS","What your backend code really does: memory, threads, processes and I/O.",
   ["F3 first: CS:APP chapters with 15-213 lectures and labs.","Then F4: OSTEP chapters with homework.","Write C, not just read it."],
   "CS:APP data, bomb and malloc labs done; OSTEP homework done; a working shell in C.",[L.c213,L.ostep],"90 h · ~9 weeks"),
  left:[
   n("b2-c","C and pointers","Memory, pointers, arrays and structs in C.",["Refresh C with small exercises.","Use valgrind or AddressSanitizer on everything."],"You write C without memory errors.",[L.c213]),
   n("b2-rep","Data representation","Integers, two's complement, floating point, bit operations.",["CS:APP ch 2.","Data lab."],"Data lab passes.",[L.c213]),
   n("b2-asm","Machine-level code","x86-64 assembly, the stack, calling conventions.",["CS:APP ch 3.","Bomb lab."],"Bomb lab defused.",[L.c213]),
   n("b2-cache","Memory hierarchy and caches","Locality, cache lines, why access patterns matter.",["CS:APP ch 6.","Measure a cache-friendly vs unfriendly loop."],"You can explain a cache miss and fix one.",[L.c213]),
   n("b2-link","Linking","Compilation, object files, static and dynamic linking.",["CS:APP ch 7."],"You can explain an undefined symbol error.",[L.c213]),
   n("b2-malloc","Dynamic memory","How malloc and free work inside.",["CS:APP ch 9 (virtual memory and allocation).","Malloc lab."],"Malloc lab passes.",[L.c213])
  ],
  right:[
   n("b2-proc","Processes and syscalls","fork, exec, wait, the process API.",["OSTEP virtualization chapters on processes.","Homework simulators."],"You can trace fork and exec by hand.",[L.ostep]),
   n("b2-thr","Threads and locks","Race conditions, mutexes, lock design.",["OSTEP concurrency chapters.","Write a thread-safe counter and queue."],"You can find a race in someone's code.",[L.ostep]),
   n("b2-cv","Condition variables and semaphores","Producer-consumer, deadlock and how to avoid it.",["OSTEP chapters on CVs, semaphores, bugs."],"You solve producer-consumer correctly.",[L.ostep]),
   n("b2-sched","Scheduling","FIFO, round robin, MLFQ, fairness.",["OSTEP scheduling chapters with homework."],"You can predict scheduler output by hand.",[L.ostep]),
   n("b2-vm","Virtual memory","Address spaces, paging, TLBs, swapping.",["OSTEP memory chapters."],"You can translate a virtual address by hand.",[L.ostep]),
   n("b2-fs","File systems","Files, directories, journaling, crash consistency.",["OSTEP persistence chapters."],"You can explain what fsync guarantees.",[L.ostep]),
   n("b2-shell","Build a shell","A Unix shell in C with pipes, redirection and job control.",["Build it step by step; test each feature."],"Shell runs pipelines and background jobs.",[L.ostep,L.xv6])
  ],
  dsa:[
   n("b2-l1","Stack","LIFO problems: parsing, monotonic stack.",["NeetCode Stack section."],"Section done.",[L.nc]),
   n("b2-l2","Binary search","Search on sorted data and on the answer.",["NeetCode Binary Search section.","6.006 sorting and hashing lectures."],"Section done; you can write bug-free binary search.",[L.nc,L.o6006]),
   n("b2-l3","Linked list","Pointer manipulation, fast and slow pointers.",["NeetCode Linked List section."],"Section done.",[L.nc])
  ],
  ai:[
   n("b2-a1","MCP","Model Context Protocol: exposing tools and data to models.",["Read the MCP intro.","Build an MCP server for Jarvis note search; test with Inspector."],"Server works in Inspector.",[L.mcp,L.mcppy,L.insp]),
   n("b2-a2","Context engineering","Choosing what goes into the context window and in what order.",["Matching lessons in ai-engineering-from-scratch.","Run your eval set with 3 context strategies."],"Measured difference between strategies.",[L.aefs,L.chip])
  ]
 },
 {key:"b3",
  main:n("b3","Block 3 · F5 Networks, then F6 Database internals","How data moves over the network and how databases store and protect it.",
   ["F5: Kurose and Ross chapters plus Beej for sockets.","F6: CMU 15-445 lectures and 2 projects.","Relate every concept to your Postgres work."],
   "HTTP server from raw sockets built; 2 CMU 15-445 projects done.",[L.kr,L.c445],"65 h · ~7 weeks"),
  left:[
   n("b3-layers","Layers and sockets","The network stack and the socket API.",["Kurose ch 1 and 2.","Beej's guide, client and server examples."],"You wrote a TCP echo server.",[L.kr,L.beej]),
   n("b3-tcp","TCP and congestion control","Reliable delivery, flow control, congestion control.",["Kurose transport chapter."],"You can explain slow start and retransmission.",[L.kr]),
   n("b3-dns","DNS","How names become addresses, caching, records.",["Kurose DNS section.","Trace a lookup with dig."],"You can explain a full DNS resolution.",[L.kr]),
   n("b3-tls","TLS","Handshake, certificates, what HTTPS protects.",["Kurose security chapter, TLS part."],"You can explain the TLS handshake step by step.",[L.kr]),
   n("b3-http","HTTP 1.1, 2 and 3","Versions, multiplexing, QUIC.",["Kurose application layer plus HTTP/2 and 3 reading."],"You can explain why HTTP/3 uses QUIC.",[L.kr]),
   n("b3-srv","HTTP server from sockets","A minimal HTTP server with no framework.",["Build it in Python or C from raw sockets.","Handle GET, headers and concurrent clients."],"Server serves files to a browser.",[L.beej])
  ],
  right:[
   n("b3-rel","Relational model and SQL depth","Relational algebra, normalization, advanced SQL.",["15-445 early lectures.","Finish LeetCode SQL 50."],"SQL 50 done; you can normalize a schema.",[L.c445,L.sql50]),
   n("b3-store","Storage and buffer pool","Pages, files, buffer management.",["15-445 storage lectures.","Buffer pool project."],"Project passes tests.",[L.c445]),
   n("b3-idx","Indexes: B+ trees and LSM","How indexes are built and when each wins.",["15-445 index lectures.","Index project."],"You can explain why an index is or isn't used.",[L.c445]),
   n("b3-qp","Query planning and joins","Join algorithms, cost estimation, EXPLAIN.",["15-445 query lectures.","Read EXPLAIN ANALYZE on your own app queries."],"You can fix a slow query using the plan.",[L.c445]),
   n("b3-txn","Transactions and isolation","ACID, isolation levels, anomalies.",["15-445 transaction lectures."],"You can name the anomaly each isolation level allows.",[L.c445]),
   n("b3-mvcc","Concurrency control and MVCC","Locking, two-phase locking, MVCC as in Postgres.",["15-445 concurrency lectures."],"You can explain how Postgres MVCC works.",[L.c445]),
   n("b3-rec","Recovery","Write-ahead logging and crash recovery.",["15-445 logging and recovery lectures."],"You can explain WAL and ARIES at a high level.",[L.c445])
  ],
  dsa:[
   n("b3-l1","Trees","Traversals, BST, recursion on trees.",["NeetCode Trees section."],"Section done.",[L.nc]),
   n("b3-l2","Tries","Prefix trees for string problems.",["NeetCode Tries section."],"Section done.",[L.nc]),
   n("b3-l3","Heaps and priority queues","Top-k, merging, scheduling with heaps.",["NeetCode Heap section.","6.006 heaps lecture."],"Section done.",[L.nc,L.o6006])
  ],
  ai:[
   n("b3-a1","Embeddings and vector search","What embeddings capture, similarity, vector indexes.",["Matching lessons in ai-engineering-from-scratch.","Compare 2 embedding models on your notes."],"Measured retrieval difference.",[L.aefs]),
   n("b3-a2","RAG pipeline","Chunking, retrieval, prompt assembly.",["Rebuild Jarvis retrieval with clear stages.","Track the right-note-first score."],"Score beats your 18/20 baseline or you know why not.",[L.aefs,L.chip])
  ]
 },
 {key:"b4",
  main:n("b4","Block 4 · F7 Theory of computation, then F8 SE and system design","Theory for the Ottawa and Carleton breadth rule; design pulls Blocks 2 and 3 together.",
   ["F7: Sipser chapters with MIT 18.404J lectures.","F8: DDIA parts 1 and 2 plus A Philosophy of Software Design.","Write a design doc for every system you study."],
   "Sipser ch 1 to 5 and 7 exercises done; 3 design docs written; Sustainability Tracker redesigned and deployed.",[L.toc,L.ddia,L.apsd],"95 h · ~10 weeks"),
  left:[
   n("b4-fa","Finite automata and regex","DFAs, NFAs, regular expressions, pumping lemma.",["Sipser ch 1 with 18.404J lectures."],"You can prove a language is not regular.",[L.toc]),
   n("b4-cfg","Context-free grammars","CFGs, pushdown automata, parsing.",["Sipser ch 2."],"You can write a grammar and prove a language is not context-free.",[L.toc]),
   n("b4-tm","Turing machines","The model of computation and its variants.",["Sipser ch 3."],"You can describe a TM for a simple language.",[L.toc]),
   n("b4-dec","Decidability","What no program can ever decide; reductions.",["Sipser ch 4 and 5."],"You can prove a problem undecidable by reduction.",[L.toc]),
   n("b4-pnp","Complexity: P and NP","Time complexity, NP-completeness, reductions.",["Sipser ch 7."],"You can show a problem is NP-complete.",[L.toc])
  ],
  right:[
   n("b4-dp","Design principles","Deep modules, information hiding, complexity.",["Read A Philosophy of Software Design.","Refactor one module of your code using it."],"Before and after written up.",[L.apsd]),
   n("b4-test","Testing strategy","Unit, integration, property-based, what to test.",["Apply to Sustainability Tracker; add property-based tests."],"Test plan written and applied.",[]),
   n("b4-arch","Architecture styles","Monolith, services, event-driven, queues.",["DDIA part 1.","System Design Primer core topics."],"You can argue for and against each style.",[L.ddia,L.sdp]),
   n("b4-repl","Replication","Leaders, followers, lag, failover.",["DDIA replication chapter."],"You can explain read-after-write problems and fixes.",[L.ddia]),
   n("b4-part","Partitioning","Sharding, rebalancing, hot spots.",["DDIA partitioning chapter."],"You can design a sharding key for a real case.",[L.ddia]),
   n("b4-cons","Consistency and consensus","Linearizability, distributed transactions, consensus basics.",["DDIA consistency chapters."],"You can explain what linearizable means with an example.",[L.ddia]),
   n("b4-docs","Design docs and ADRs","Writing decisions so others can review them.",["Write 3 design docs, one a redesign of Sustainability Tracker.","Deploy the redesign."],"3 docs in repo; app deployed.",[L.rmsd,L.sdp])
  ],
  dsa:[
   n("b4-l1","Backtracking","Search all choices with pruning.",["NeetCode Backtracking section."],"Section done.",[L.nc]),
   n("b4-l2","Graphs","BFS, DFS, topological sort, union-find.",["NeetCode Graphs section.","6.006 graph lectures."],"Section done.",[L.nc,L.o6006]),
   n("b4-l3","Advanced graphs","Shortest paths, minimum spanning trees.",["NeetCode Advanced Graphs section.","6.006 Dijkstra and Bellman-Ford lectures."],"Section done; you can prove Dijkstra correct.",[L.nc,L.o6006])
  ],
  ai:[
   n("b4-a1","RAG evals and reranking","Measuring retrieval and answer quality; reranking.",["Add a reranker to Jarvis.","Build an eval harness that runs in CI."],"Measured gain from reranking.",[L.evals,L.aefs]),
   n("b4-a2","Tool calling","Reliable tool schemas, errors, retries.",["Harden Jarvis tools: validation, error messages, retries."],"Tool-use eval pass rate improved.",[L.agents,L.aefs])
  ]
 },
 {key:"b5",
  main:n("b5","Block 5 · F9 Security, then F10 Math for ML","Security closes the engineering side; math opens the ML side.",
   ["F9: PortSwigger labs plus OWASP lists; threat-model your own app.","F10: 3Blue1Brown first for intuition, then 18.06 and Stat 110 for depth.","Derive things by hand on paper."],
   "40+ PortSwigger labs, one threat model; linear regression and backprop derived by hand.",[L.ps,L.b3la,L.m1806,L.s110],"100 h · ~10 weeks"),
  left:[
   n("b5-crypto","Crypto basics","Hashing, symmetric and public-key crypto, signatures.",["Boneh Cryptography I, first weeks (audit)."],"You can explain why passwords use slow hashes.",[L.boneh]),
   n("b5-auth","Auth: sessions, OAuth2, OIDC","How login and delegated access work.",["Read the specs' overviews; map your JWT setup against them."],"You can draw the OAuth2 code flow with PKCE.",[L.ps]),
   n("b5-web","OWASP Web Top 10","The most common web holes.",["OWASP Top 10 plus matching PortSwigger labs."],"30+ labs solved.",[L.owasp,L.ps]),
   n("b5-api","OWASP API Top 10","API-specific holes like broken object-level auth.",["OWASP API list; check one of your APIs against it."],"Findings written up.",[L.owapi]),
   n("b5-llm","LLM security","Prompt injection, data leaks, insecure tool use.",["OWASP GenAI list; attack Jarvis with injections."],"Injection tests added to the Jarvis eval set.",[L.owllm]),
   n("b5-tm","Threat modeling","Finding risks before attackers do.",["Threat model Sustainability Tracker (assets, entry points, risks, fixes)."],"Threat model doc in repo.",[])
  ],
  right:[
   n("b5-vec","Vectors and matrices","Spaces, matrix multiplication, linear maps.",["3Blue1Brown series, then 18.06 early lectures."],"You can explain a matrix as a transformation.",[L.b3la,L.m1806]),
   n("b5-eig","Eigenvectors and SVD","The decompositions behind PCA and more.",["18.06 eigen and SVD lectures."],"You can compute an SVD by hand for a 2x2.",[L.m1806,L.mml]),
   n("b5-calc","Multivariable calculus and gradients","Partial derivatives, chain rule, gradient descent.",["MML book calculus chapters."],"You can derive backprop for a 2-layer net.",[L.mml]),
   n("b5-prob","Probability","Random variables, distributions, Bayes.",["Stat 110 lectures and problems."],"You can solve Stat 110 problem sets.",[L.s110]),
   n("b5-stat","Statistics and inference","Estimation, MLE, hypothesis tests, confidence intervals.",["MML and ISLP stats sections."],"You can derive linear regression by MLE.",[L.mml,L.islp])
  ],
  dsa:[
   n("b5-l1","1-D dynamic programming","Subproblems, memoization, tabulation.",["NeetCode 1-D DP section.","6.006 DP lectures."],"Section done.",[L.nc,L.o6006]),
   n("b5-l2","2-D dynamic programming","Grids, strings, knapsack-style DP.",["NeetCode 2-D DP section."],"Section done.",[L.nc]),
   n("b5-l3","Greedy and intervals","When greedy is safe; interval problems.",["NeetCode Greedy and Intervals sections."],"Sections done; you can prove one greedy choice.",[L.nc])
  ],
  ai:[
   n("b5-a1","Agents and multi-step tasks","Planning, memory, long tasks, failure handling.",["Matching lessons in ai-engineering-from-scratch.","Add a multi-step task to Jarvis with approval gates."],"Multi-step eval cases pass.",[L.aefs,L.agents]),
   n("b5-a2","Guardrails, cost and latency","Limits, fallbacks, caching, model choice.",["Track cost and latency per eval run; add caching."],"Cost per run reduced with no quality loss.",[L.chip])
  ]
 },
 {key:"b6",
  main:n("b6","Block 6 · F11 Classical ML","Core ML algorithms, coded from scratch and then with scikit-learn.",
   ["Ng Specialization for structure, ISLP for depth.","Code each algorithm from scratch in NumPy first.","Then compare with scikit-learn on the same data."],
   "5 algorithms from scratch, compared with scikit-learn on one dataset.",[L.ng,L.islp],"50 h · ~5 weeks"),
  left:[
   n("b6-lin","Linear and logistic regression","The base models and how they are fit.",["Code both with gradient descent from scratch."],"Matches scikit-learn results.",[L.ng,L.islp]),
   n("b6-tree","Trees and ensembles","Decision trees, random forests, boosting.",["ISLP tree chapter; code a decision tree."],"Your tree matches scikit-learn on a toy set.",[L.islp,L.sq]),
   n("b6-svm","SVM and kernels","Margins and the kernel trick.",["ISLP SVM chapter."],"You can explain the kernel trick simply.",[L.islp])
  ],
  right:[
   n("b6-clu","Clustering and PCA","k-means and dimensionality reduction.",["Code k-means and PCA from scratch."],"PCA matches scikit-learn.",[L.islp,L.mml]),
   n("b6-eval","Evaluation and bias-variance","Splits, cross-validation, metrics, overfitting.",["ISLP resampling chapter; error analysis on every model."],"Every notebook has an error analysis section.",[L.islp]),
   n("b6-proj","End-to-end ML project","One full pipeline from raw data to evaluated model.",["Pick a public dataset; clean, model, evaluate, write up."],"Write-up in the repo.",[L.islp])
  ],
  dsa:[
   n("b6-l1","Bit manipulation and math","Bit tricks and number problems.",["NeetCode Bit Manipulation and Math sections."],"NeetCode 150 complete.",[L.nc]),
   n("b6-l2","Timed mock interviews","Put it together under time pressure.",["2 timed mediums per week, 30 min each.","Re-solve old problems you got wrong."],"Medium in 30 min, most of the time.",[L.nc])
  ],
  ai:[n("b6-a1","Jarvis v0.2 capstone","Ship the AI project with everything learned.",["Eval suite in CI, MCP server, RAG with reranking, guardrails, cost tracking.","Write a public README with measured results."],"v0.2 tagged with an eval score you can show.",[L.evals,L.mcp])]
 }
];

const MILE = n("mile","Foundations done → Masters (target Sept 2027)","All 12 foundation modules finished. Advanced topics come next, matched to your Masters electives.",["Send your admitted program's course list to plan electives.","Pick the advanced order based on your thesis or project topic."],"Every block's done-when checks passed.",[L.doc]);

const ADV = [
 n("a-dl","Deep learning","PyTorch, CNNs, sequence models, training practice.",["Karpathy Zero to Hero first, then d2l.ai chapters."],"You trained and debugged your own networks.",[L.kz,L.d2l,L.fai]),
 n("a-llm","LLMs from the inside","Transformers, tokenizers, a small GPT from scratch.",["Karpathy GPT videos; Raschka's book."],"Your own small GPT trained.",[L.kz,L.aefs]),
 n("a-ft","Fine-tuning","LoRA, DPO, instruction tuning.",["Hugging Face courses; fine-tune a small model with an eval before and after."],"Measured improvement from fine-tuning.",[L.hf]),
 n("a-serve","Inference and serving","Quantization, batching, vLLM.",["Serve a model with vLLM; measure latency and throughput."],"Benchmark written up.",[L.vllm]),
 n("a-agents","Advanced AI engineering","Multi-agent systems, evals at scale, observability, voice, multimodal.",["Extend Jarvis or start a new agent project."],"A second shipped AI project.",[L.aefs,L.chip]),
 n("a-ops","MLOps and cloud","Kubernetes, Terraform, model deployment and monitoring.",["Kubernetes basics; Terraform tutorials; deploy a model service."],"A model deployed with infra as code.",[L.k8s,L.tf]),
 n("a-dist","Distributed systems theory","Consensus, Raft, fault tolerance.",["MIT 6.5840 lectures and labs."],"Raft lab passes.",[L.dist]),
 n("a-res","Research methods","Reading papers, experiment design, writing.",["Read 2 papers a week with a 1-page summary each.","Plan your Regina project topic."],"Project proposal drafted.",[])
];
