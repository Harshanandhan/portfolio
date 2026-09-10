const PROJECTS = [
  // Current work
  {
    num: 1,
    status: "live",
    name: "SIEM Dashboard",
    desc: "SOC-style SIEM lab dashboard (Next.js). Real TypeScript detectors for SSH brute force (T1110.001), SQLi (T1190), and port scan (T1046) on RFC 5737 demo logs, plus a deterministic pattern hunter at /hunt (no LLM/threat-intel APIs). Evidence: deployed at buggerhunt.vercel.app with Railway Postgres; 29 vitest tests. Lab/demo — not Elastic, not a production SOC.",
    tags: ["Next.js", "TypeScript", "Cybersecurity", "MITRE ATT&CK"],
    url: "https://buggerhunt.vercel.app",
    github: null,
  },
  {
    num: 2,
    status: "done",
    name: "Hatch Agent",
    desc: "Student internship agent (find → local pattern tailor → review-before-submit). Public repo is the product README; implementation stays private. Evidence: pattern tailor without API keys; Fortune 100 career-page tracker seed (Wikipedia top 100; official 1–500 paywalled). No LinkedIn scrape, no password harvest, no auto-submit by default.",
    tags: ["Next.js", "TypeScript", "Students", "Internships"],
    url: null,
    github: "https://github.com/Harshanandhan/hatch-agent",
  },

  // Live / demos (honest status)
  {
    num: 3,
    status: "wip",
    name: "Repostly",
    desc: "Next.js app that turns a YouTube URL into LinkedIn post drafts (Supabase/Stripe/LLM wired in code). npm build verified 2026-09-09. www.repostly.org currently has an expired TLS cert — do not treat as a reliable live product or as having paying customers.",
    tags: ["Next.js", "TypeScript", "Stripe", "Supabase"],
    url: null,
    github: "https://github.com/Harshanandhan/yt-repurposer-web",
  },
  {
    num: 4,
    status: "live",
    name: "Documind (free)",
    desc: "FastAPI lab: local PDF/CSV/Excel text extract, then optional Groq Llama 3.3 structuring. Evidence 2026-09-09: imports + CSV extract proven. No OCR. Live extract UI on Railway (api_key_set may be false = extract-only). https://documind-free-production.up.railway.app",
    tags: ["Python", "FastAPI", "Groq"],
    url: "https://documind-free-production.up.railway.app",
    github: "https://github.com/Harshanandhan/Documind-Free-version",
  },

  // Completed labs with reproduced evidence
  {
    num: 5,
    status: "live",
    name: "Solidity Vulnerability Detector",
    desc: "Python CLI that splits each Solidity function and flags reentrancy-style calls, missing owner checks, unchecked low-level calls, block.timestamp, and tx.origin. Optional Slither. Sample run 2026-09-09: 7 findings vs 0 clean. Pattern checks only — not ML and not an audit.",
    tags: ["Python", "Solidity", "Cybersecurity"],
    url: null,
    github: "https://github.com/Harshanandhan/solidity-vulnerability-detector",
  },
  {
    num: 6,
    status: "done",
    name: "SIEM Detection Lab",
    desc: "Detection rules on generated auth, Apache, and iptables logs (no Elastic/Kibana). Evidence 2026-09-09: 3 alerts — SSH brute force T1110.001, SQLi T1190, port scan T1046. Local stdlib dashboard optional.",
    tags: ["Python", "Cybersecurity", "MITRE ATT&CK"],
    url: null,
    github: "https://github.com/Harshanandhan/siem-detection-lab",
  },
  {
    num: 7,
    status: "done",
    name: "Host Security Scanner",
    desc: "Python lab scanner: TCP connect, banners, simple web checks, headers, TLS peek. Evidence 2026-09-09 on scanme.nmap.org: 4 open ports, 5 missing headers. No CVE database — not a pentest.",
    tags: ["Python", "Cybersecurity"],
    url: null,
    github: "https://github.com/Harshanandhan/host-security-scanner",
  },
  {
    num: 8,
    status: "live",
    name: "ERC-20 Staking Vault",
    desc: "Solidity staking vault with ReentrancyGuard and CEI. Evidence 2026-09-09: npx hardhat test — 6 passing, 0 failing. Lab contract — not a mainnet deploy.",
    tags: ["Solidity", "Hardhat", "OpenZeppelin"],
    url: "https://solidity-lab-demos.vercel.app",
    github: "https://github.com/Harshanandhan/erc20-staking-vault",
  },
  {
    num: 9,
    status: "live",
    name: "DividendToken",
    desc: "Lab ERC-20 where staking rewards and holder dividends compete for the same balance. Evidence 2026-09-09: npx hardhat test — 33 passing. Not a product or audit.",
    tags: ["Solidity", "Hardhat", "OpenZeppelin", "Ethereum"],
    url: "https://solidity-lab-demos.vercel.app",
    github: "https://github.com/Harshanandhan/dividend-token",
  },
  {
    num: 10,
    status: "done",
    name: "BharatBot",
    desc: "Lab FastAPI RAG over 10 local Indian history chunks (Chroma + MiniLM). Live lab RAG over 10 chunks. Evidence: /health chunks=10; retrieval works; Groq optional (may fall back). https://bharatbot-production-9181.up.railway.app",
    tags: ["Python", "FastAPI", "RAG", "Chroma"],
    url: "https://bharatbot-production-9181.up.railway.app",
    github: "https://github.com/Harshanandhan/bharatbot",
  },
  {
    num: 11,
    status: "live",
    name: "document-agent",
    desc: "Lab FastAPI + Claude tool-use document agent (read/split/validate/export tools in code). Live lab UI on Railway with Claude tool-use when key configured. Not a production multi-tenant product. https://luminous-compassion-production-1f80.up.railway.app",
    tags: ["Python", "FastAPI", "Anthropic"],
    url: "https://luminous-compassion-production-1f80.up.railway.app",
    github: "https://github.com/Harshanandhan/document-agent",
  },
  {
    num: 12,
    status: "live",
    name: "IRIS Vessel Segmentation",
    desc: "Jupyter/Colab lab: U-Net + EfficientNetB3 iris vessel segmentation notebook. Educational CV experiment — not a production biometric system.",
    tags: ["Python", "TensorFlow", "Keras", "Jupyter"],
    url: null,
    github: "https://github.com/Harshanandhan/IRIS-Vessel-Segmentation",
  },

  // Thin / placeholder — honest labels
  {
    num: 13,
    status: "wip",
    name: "x402 Payment Gateway",
    desc: "Docs-only learning stub about Coinbase x402 / HTTP 402. No runnable backend or frontend in the repo (as of 2026-09-09).",
    tags: ["Blockchain", "x402", "Documentation"],
    url: null,
    github: "https://github.com/Harshanandhan/x402-Payment-Gateway",
  },
  {
    num: 14,
    status: "wip",
    name: "Multi-Agent Healthcare System",
    desc: "Healthcare multi-agent experiment stub. Verify README/code before citing specific agent workflows.",
    tags: ["Python", "AI Agents"],
    url: null,
    github: "https://github.com/Harshanandhan/Multi-Agent-Healthcare-System",
  },
];

const SKILLS = {
  "AI / ML": ["Python", "TensorFlow", "scikit-learn", "CodeBERT", "LSTM", "NLP", "LangChain", "Groq"],
  "Cybersecurity": ["Python", "Detection Engineering", "MITRE ATT&CK", "OWASP", "Wireshark", "NIST"],
  "Blockchain": ["Solidity", "Ethereum", "Foundry", "Hardhat", "Slither", "OpenZeppelin", "DeFi", "EVM"],
  "Development": ["Next.js", "FastAPI", "TypeScript", "JavaScript", "Rust", "Bash", "SQL", "Docker", "Vercel"],
};

const TAG_COLORS: Record<string, string> = {
  "Next.js": "bg-white/10 text-white border-white/10",
  "AI": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "SaaS": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Stripe": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Supabase": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Python": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "AI/ML": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Blockchain": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Solidity": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Cybersecurity": "bg-red-500/10 text-red-400 border-red-500/20",
  "DeFi": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Groq": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "LangChain": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "TypeScript": "bg-blue-500/10 text-blue-400 border-blue-500/20",
  "MITRE ATT&CK": "bg-red-500/10 text-red-400 border-red-500/20",
  "Students": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Internships": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
};

function Tag({ label }: { label: string }) {
  const color = TAG_COLORS[label] ?? "bg-white/5 text-gray-400 border-white/10";
  return (
    <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${color}`}>
      {label}
    </span>
  );
}

function StatusDot({ status }: { status: string }) {
  if (status === "live") {
    return (
      <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_#34d399]" />
        Live
      </span>
    );
  }
  if (status === "wip") {
    return (
      <span className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
        In Development
      </span>
    );
  }
  return null;
}

export default function Home() {
  return (
    <div className="min-h-screen">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-end">
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="about" className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-6 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-sm font-medium">Available for opportunities</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight leading-tight">
              Harshanandhan<br />
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Reddy Gajulapalli
              </span>
            </h1>
            <p className="text-xl text-gray-400 font-medium">
              AI/ML · Cybersecurity · Blockchain
            </p>
            <p className="text-gray-400 leading-relaxed max-w-2xl text-lg">
              Cybersecurity Analyst specializing in AI/ML-enhanced security and blockchain auditing.
              I build intelligent systems that detect threats, audit smart contracts, and automate
              security workflows. Currently based in Pennsylvania.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/Harshanandhan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-white/10 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/harshanandhan-reddy-gajulapalli-91a951395/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium hover:bg-blue-500/20 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:harshanandhanreddy820@gmail.com"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium hover:bg-cyan-500/20 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                Email
              </a>
            </div>

            {/* Education */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">MS Cybersecurity</p>
                  <p className="text-xs text-gray-400">Gannon University · 2024–2025</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-white">BTech AI/ML</p>
                  <p className="text-xs text-gray-400">Amrita Vishwa Vidyapeetham · 2019–2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          <div>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">Work</p>
            <h2 className="text-3xl font-bold text-white">Projects</h2>
            <p className="text-gray-500 text-sm mt-2">
              <span className="inline-flex items-center gap-1.5 mr-4"><span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#34d399]" /> Live product</span>
              <span className="inline-flex items-center gap-1.5 mr-4"><span className="w-2 h-2 rounded-full bg-amber-400" /> In development</span>
              <span className="inline-flex items-center gap-1.5">No dot — completed</span>
            </p>
          </div>

          {/* Live Products — full-width spotlight (only if any live) */}
          {PROJECTS.some((p) => p.status === "live") && (
            <div className="flex flex-col gap-4">
              <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Live Products</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {PROJECTS.filter((p) => p.status === "live").map((p) => (
                  <div
                    key={p.name}
                    className="relative flex flex-col gap-4 p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 ring-1 ring-emerald-500/10"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-500 font-mono">#{String(p.num).padStart(2, "0")}</span>
                        <h3 className="font-semibold text-white text-lg">{p.name}</h3>
                      </div>
                      <div className="flex flex-col items-end gap-2 shrink-0">
                        <StatusDot status={p.status} />
                        <div className="flex items-center gap-2">
                          {p.url && (
                            <a
                              href={p.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-emerald-400 border border-emerald-500/40 px-2.5 py-1 rounded-lg hover:bg-emerald-500/10 transition-colors font-medium"
                            >
                              Live ↗
                            </a>
                          )}
                          {p.github && (
                            <a
                              href={p.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs text-gray-400 border border-white/10 px-2.5 py-1 rounded-lg hover:bg-white/10 transition-colors"
                            >
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                              </svg>
                              GitHub
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed flex-1">{p.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => <Tag key={t} label={t} />)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Completed Projects */}
          <div className="flex flex-col gap-4">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Completed Projects</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {PROJECTS.filter((p) => p.status === "done").map((p) => (
                <div
                  key={p.name}
                  className="flex flex-col gap-4 p-5 rounded-2xl border border-white/10 bg-white/5 hover:border-white/20 transition-all"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-gray-600 font-mono">#{String(p.num).padStart(2, "0")}</span>
                      <h3 className="font-semibold text-white">{p.name}</h3>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 pt-4">
                      {p.url && (
                        <a
                          href={p.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-cyan-400 border border-cyan-500/30 px-2 py-1 rounded-lg hover:bg-cyan-500/10 transition-colors"
                        >
                          Live ↗
                        </a>
                      )}
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-gray-400 border border-white/10 px-2 py-1 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <Tag key={t} label={t} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Under Development */}
          <div className="flex flex-col gap-4">
            <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Under Development</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {PROJECTS.filter((p) => p.status === "wip").map((p) => (
                <div
                  key={p.name}
                  className="flex flex-col gap-4 p-5 rounded-2xl border border-amber-500/20 bg-amber-500/5 hover:border-amber-500/30 transition-all"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex flex-col gap-1">
                      <span className="text-xs text-gray-600 font-mono">#{String(p.num).padStart(2, "0")}</span>
                      <h3 className="font-semibold text-white">{p.name}</h3>
                    </div>
                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <StatusDot status={p.status} />
                      {p.github && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-xs text-gray-400 border border-white/10 px-2 py-1 rounded-lg hover:bg-white/10 transition-colors"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                          </svg>
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed flex-1">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((t) => <Tag key={t} label={t} />)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col gap-10">
          <div>
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-2">Expertise</p>
            <h2 className="text-3xl font-bold text-white">Skills</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {Object.entries(SKILLS).map(([category, skills]) => (
              <div key={category} className="flex flex-col gap-3 p-5 rounded-2xl border border-white/10 bg-white/5">
                <p className="text-sm font-semibold text-white">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-cyan-500/10 to-violet-500/10 border border-white/10 rounded-3xl p-12 text-center flex flex-col items-center gap-6">
            <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">Get in touch</p>
            <h2 className="text-3xl font-bold text-white">Let&apos;s work together</h2>
            <p className="text-gray-400 max-w-md">
              Open to full-time roles in cybersecurity, AI/ML, and blockchain. Also available for freelance security audits and AI consulting.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="mailto:harshanandhanreddy820@gmail.com"
                className="px-6 py-3 rounded-xl bg-cyan-500 text-black font-semibold text-sm hover:bg-cyan-400 transition-colors"
              >
                harshanandhanreddy820@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/harshanandhan-reddy-gajulapalli-91a951395/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl border border-white/10 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/5 text-center">
        <p className="text-sm text-gray-500">
          © 2026 Harshanandhan Reddy Gajulapalli · Built with Next.js
        </p>
      </footer>

    </div>
  );
}
