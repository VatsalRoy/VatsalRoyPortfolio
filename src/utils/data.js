import{
    Code2,
    GraduationCap,
    Briefcase,
    Award,
    Rocket,
    Heart,
    Coffee,
    BookOpen,
    Zap,
    Database,
    Server,
    Cloud,
    Mail,
    MapPin,
    Phone,
    BrainCircuit,
    Frame,
    BarChart3, 
    Network,
    FileUser,
    FlaskConical,
    ShieldCheck,

} from "lucide-react";

import{ FiGithub, FiLinkedin} from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/01_agentic_pipeline.png";
import PROJECT_IMG_2 from "../assets/images/02_cardiomegaly_cnn.png";
import PROJECT_IMG_3 from "../assets/images/03_ai_news_aggregator.png";
import PROJECT_IMG_4 from "../assets/images/04_ma_pipeline.png";
import PROJECT_IMG_5 from "../assets/images/05_protein_lab.png";
import PROJECT_IMG_7 from "../assets/images/07_call_center_speech.png";
import PROJECT_IMG_8 from "../assets/images/08_multilingual_ner.png";
import PROJECT_IMG_9 from "../assets/images/09_wireframepro.png";
import PROJECT_IMG_10 from "../assets/images/10_crispr_efficiency.png";

export const SKILLS_CATEGORY = [
    {
        title: "LLM Systems & Agents",
        icon: Network,
        description: "Build tool-using agents, RAG and text-to-SQL systems on open and hosted models",
        skills: [
            { name: "LangGraph / LangChain", level: 85, color: "bg-blue-500" },
            { name: "OpenAI & Claude APIs", level: 85, color: "bg-purple-500" },
            { name: "vLLM / Ollama / llama.cpp", level: 80, color: "bg-green-500" },
            { name: "LlamaIndex", level: 70, color: "bg-yellow-500" },
            { name: "Hugging Face Transformers", level: 75, color: "bg-orange-500" },
        ],
    },
    {
        title: "LLM Evaluation & Reliability",
        icon: FlaskConical,
        description: "Judge AI systems by the answers they produce, with confidence intervals and limitations",
        skills: [
            { name: "Benchmark & Eval Harness Design", level: 90, color: "bg-red-500" },
            { name: "State-Based Agent Grading (pass@k, pass^k)", level: 85, color: "bg-blue-500" },
            { name: "LLM-as-Judge Auditing", level: 80, color: "bg-green-500" },
            { name: "Bootstrap CIs & Hypothesis Testing", level: 80, color: "bg-purple-500" },
            { name: "Prompt Caching & Token Cost Analysis", level: 80, color: "bg-yellow-500" },
        ],
    },
    {
        title: "Machine Learning & MLOps",
        icon: BrainCircuit,
        description: "Train, ship and monitor models that survive production",
        skills: [
            { name: "PyTorch", level: 80, color: "bg-orange-500" },
            { name: "Scikit-learn", level: 85, color: "bg-blue-500" },
            { name: "MLflow", level: 80, color: "bg-green-500" },
            { name: "Drift Monitoring & Rollback", level: 80, color: "bg-red-500" },
            { name: "GitHub Actions CI Gates", level: 75, color: "bg-purple-500" },
        ],
    },
    {
        title: "Data Engineering & Lakehouse",
        icon: Database,
        description: "Pipelines, semantic layers and warehouses that give models trustworthy inputs",
        skills: [
            { name: "Databricks (Lakeflow, Unity Catalog)", level: 85, color: "bg-red-500" },
            { name: "SQL / PostgreSQL", level: 90, color: "bg-blue-500" },
            { name: "PySpark & Delta Lake", level: 80, color: "bg-orange-500" },
            { name: "Apache Airflow", level: 75, color: "bg-green-500" },
            { name: "ELT, Schema Contracts & Data Quality", level: 85, color: "bg-yellow-500" },
        ],
    },
    {
        title: "Backend & Full-Stack",
        icon: Server,
        description: "Ship real apps and APIs around AI systems",
        skills: [
            { name: "Python", level: 95, color: "bg-yellow-500" },
            { name: "TypeScript / JavaScript", level: 80, color: "bg-blue-500" },
            { name: "FastAPI", level: 85, color: "bg-green-500" },
            { name: "React", level: 80, color: "bg-purple-500" },
            { name: "Node.js & REST APIs", level: 80, color: "bg-orange-500" },
        ],
    },
    {
        title: "Cloud, Security & DevOps",
        icon: Cloud,
        description: "Deploy, containerize and protect data before it leaves the company",
        skills: [
            { name: "AWS (S3, SageMaker)", level: 75, color: "bg-orange-500" },
            { name: "Docker", level: 75, color: "bg-blue-500" },
            { name: "PII & Credential Redaction", level: 80, color: "bg-red-500" },
            { name: "Databricks Asset Bundles", level: 70, color: "bg-green-500" },
            { name: "Git & GitHub Actions", level: 85, color: "bg-purple-500" },
        ],
    },
];

export const TECH_STACK = [
    "Git", "GitHub Actions", "Databricks Apps", "MLflow 3", "Unity Catalog Metric Views",
    "Ollama", "vLLM", "llama.cpp / GGUF", "spaCy", "pandas", "NumPy", "Matplotlib",
    "SQLite", "pytest", "Jupyter", "Kaggle GPUs", "Render", "Vercel", "Cursor",
    "Claude Code", "Notion", "Postman",
];

export const STATS = [
    {number: "2.5+", label: "Years of Experience"},
    {number: "5", label: "Open-Source AI Benchmarks"},
    {number: "40+", label: "Technologies"},
];

export const PROJECTS = [
    {
        id: 1,
        title: "lakehouse-sql-eval — Does a Semantic Layer Make Text-to-SQL Trustworthy?",
        description: "End-to-end text-to-SQL evaluation on Databricks that scores LLM-written SQL by the number it returns, not just whether it runs. A semantic layer built with Unity Catalog metric views raised accuracy from 45.6% to 81.7% (+36 points, paired bootstrap 95% CI +22 to +51) on a 60-question benchmark over 200k synthetic retail orders full of traps (refunds, fiscal calendar, test accounts, five currencies). Found that 84% of raw-schema failures were silent — the query ran and returned a plausible wrong number — and that column comments alone added nothing measurable. Built with a Lakeflow bronze→silver→gold pipeline, ai_query with Llama 3.3 70B, MLflow 3 tracking, a Databricks App and a nightly regression gate.",
        image: "https://raw.githubusercontent.com/VatsalRoy/VatsalRoy/blob/main/assets/card-lakehouse.svg",
        linkUrl: "#",
        githubUrl: "https://github.com/VatsalRoy/lakehouse-sql-eval",
        tags: ["Databricks", "Unity Catalog", "Text-to-SQL", "MLflow", "Lakeflow", "LLM Evaluation", "Python", "SQL"],
        category: "LLM Evaluation",
        featured: true,
    },
    {
        id: 2,
        title: "agent-reliability-bench — Agents Say \"Done.\" The Database Often Disagrees.",
        description: "Reproducible harness that grades a tool-using LLM agent by what actually changed in the database, not by what it says it did. 17 customer-support tasks × 5 runs on a fresh SQLite shop (85 attempts). The agent claimed success 98% of the time, but the database confirmed only 65% (pass@1), and just 29% of tasks succeeded all 5 times (pass^5). An LLM judge approved 60% of the runs that had failed (κ = 0.44). Probes showed a tool-name-matching grader dropped 65 points on renamed tools while true agent success barely moved. Runs fully local with Qwen 4B via Ollama; 151 unit tests.",
        image: "https://raw.githubusercontent.com/VatsalRoy/VatsalRoy/blob/main/assets/card-agent-bench.svg",
        linkUrl: "https://vatsalroy.github.io/agent-reliability-bench/",
        githubUrl: "https://github.com/VatsalRoy/agent-reliability-bench",
        tags: ["AI Agents", "LLM Evaluation", "LLM-as-Judge", "Ollama", "SQLite", "Python", "pytest"],
        category: "Agent Reliability",
        featured: true,
    },
    {
        id: 3,
        title: "Keep It Warm — What Context Trimming Really Costs Once Prompt Caching Is Counted",
        description: "Benchmark measuring the true cost of context-management policies for a long-running, tool-using agent. Every trimming policy cut tokens by 22–46%, yet under premium prompt-cache pricing each one cost 1.5–2.6× more per solved question than keeping the full history, because every edit broke the prefix cache. One timestamp line in a prompt dropped cache hits from 94% to 0%. Qwen3-4B on vLLM using free Kaggle T4 GPUs, exact-answer grading, per-request cache telemetry, bootstrap confidence intervals, 79 tests, a paper and an interactive Hugging Face trace viewer.",
        image: "https://raw.githubusercontent.com/VatsalRoy/VatsalRoy/blob/main/assets/card-keep-it-warm.svg",
        linkUrl: "https://huggingface.co/spaces/vatsal-roy-29/agent-cache-bill-viewer",
        githubUrl: "https://github.com/VatsalRoy/keep-it-warm",
        tags: ["LLM Cost", "Prompt Caching", "vLLM", "Qwen3", "AI Agents", "Python", "Hugging Face"],
        category: "LLM Cost Optimization",
        featured: true,
    },
    {
        id: 4,
        title: "quant-gate — Your Compressed AI Model Loads. Does It Still Work?",
        description: "PASS/FAIL quality gate for GGUF model files that runs on a laptop or automatically in GitHub Actions. Gives each file a short exam (20 tool-call tasks + 15 executed coding problems) with exit codes that block bad files, rejecting broken ones in about 30 seconds and finishing a full check ~7× faster than the full benchmark. Tested all 45 public compressed versions of LiquidAI's LFM3-1.7B from 4 uploaders: one file that loaded with no errors solved 1 of 164 coding problems, and two files with the same Q3_K_M name solved 96 vs 74. A controlled rebuild showed imatrix calibration is the difference between broken (1 solved) and usable (51–55).",
        image: "https://raw.githubusercontent.com/VatsalRoy/VatsalRoy/blob/main/assets/card-quant-gate.svg",
        linkUrl: "#",
        githubUrl: "https://github.com/VatsalRoy/quant-gate",
        tags: ["GGUF", "llama.cpp", "Quantization", "GitHub Actions", "Model QA", "CI/CD", "Python"],
        category: "Model QA",
        featured: true,
    },
    {
        id: 5,
        title: "Shadow AI Privacy Auditor — Redact PII & Secrets Before Prompts Leave the Company",
        description: "Full-stack tool that detects and redacts PII, credentials and confidential data before a prompt is sent to an external AI tool. A FastAPI /analyze service runs detectors for names (spaCy NER), emails, phones, SSNs, credit cards (Luhn-validated), bank routing numbers (ABA checksum), API keys, passwords, medical terms, employee IDs, IP addresses and more, resolves overlapping findings, assigns severity and an overall risk score, and returns a safely redacted prompt while leaving safe text byte-for-byte unchanged. Supports session-only custom regex rules with ReDoS checks; input is never logged. React 19 + Vite frontend, deployed on Render.",
        image: "https://raw.githubusercontent.com/VatsalRoy/VatsalRoy/blob/main/assets/card-shadow-ai.svg",
        linkUrl: "https://shadow-ai-frontend.onrender.com",
        githubUrl: "https://github.com/VatsalRoy/shadow-ai-privacy-auditor",
        tags: ["AI Privacy", "PII Detection", "FastAPI", "spaCy", "React", "Vite", "Render"],
        category: "AI Security",
        featured: true,
    },
];

export const JOURNEY_STEPS = [
    {
        year: "2019 - 2023",
        title: "B.E. in Computer Engineering",
        company: "Gujarat Technological University, Gujarat, India",
        description: "Graduated with a GPA of 3.17",
        icon: GraduationCap,
        color: "bg-blue-500",
    },
    {
        year: "2020 - 2022",
        title: "Web and Graphic Head",
        company: "SVIT, Vasad, Gujarat, India",
        description: "Led a 10–15 person team building an event registration platform for 5,000–6,000 students (95% user satisfaction), lifted registrations 40% and form completion 25%.",
        icon: Rocket,
        color: "bg-yellow-500",
    },
    {
        year: "2022 - 2023",
        title: "ML & Data Engineer",
        company: "NMR Infotech Pvt Ltd, Gujarat, India",
        description: "Cut ML model development time 25% across 8+ client projects by standardizing feature engineering, kept production pipelines at 99.2% uptime with drift monitoring, and built an AWS S3 warehouse with schema contracts and quality gates.",
        icon: Briefcase,
        color: "bg-green-500",
    },
    {
        year: "2024 - 2026",
        title: "M.S. in Computer Science",
        company: "Long Island University, Brooklyn, NY",
        description: "Graduated with a GPA of 3.7",
        icon: GraduationCap,
        color: "bg-cyan-500",
    },
    {
        year: "2026 - Present",
        title: "Applied ML Analyst",
        company: "Community Dreams Foundation",
        description: "Built monitored behavior-data pipelines across 6+ source systems with anomaly detection and drift alerting (35% fewer failures), cut data delivery latency 40% for 20+ stakeholders, and shipped self-serve A/B readouts that sped decisions 2×.",
        icon: Briefcase,
        color: "bg-purple-500",
    }
];

export const PASSIONS = [
    { icon: FlaskConical, title: "Honest Evaluation", description: "Hypotheses first, then confidence intervals and limitations alongside the wins" },
    { icon: Rocket, title: "Shipping in Messy Data", description: "Walking into real customer data and shipping something that works" },
    { icon: Zap, title: "LLM Cost & Performance", description: "Making AI systems cheaper per correct answer, not just per token" },
    { icon: ShieldCheck, title: "AI Privacy & Safety", description: "Keeping PII and secrets inside the company" },
];

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "https://github.com/VatsalRoy",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/vatsal-roy/",
        color: "hover:text-blue-500",
        bgColor: "hover:bg-blue-500/10",
    },
    /*
    {
        name: "Email",
        icon: Mail,
        url: "mailto:vatsal.roy2429@gmail.com",
        color: "hover:text-green-500",
        bgColor: "hover:bg-green-500/10",
    },
    {
        name: "Resume",
        icon: FileUser,
        url: "https://drive.google.com/file/d/1_YdJ2jt9anbf1vNyLsSSTsvr1VMb1xL7/view?usp=sharing",
        color: "hover:text-gray-500",
        bgColor: "hover:bg-gray-500/10",
    },
    */
]

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "New York City, NY",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+1 (908) 900-7259",
    },
    {
        icon: Mail,
        label: "Email",
        value: "vatsal.roy2429@gmail.com",
    },
];
