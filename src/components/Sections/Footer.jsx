import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUp, ArrowUpRight, Code2, Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import { useTheme } from '../../context/ThemeContext';

const NAV = ['Home', 'About', 'Skills', 'Work', 'Contact'];

const SOCIALS = [
    { name: 'GitHub', icon: FiGithub, url: 'https://github.com/VatsalRoy' },
    { name: 'LinkedIn', icon: FiLinkedin, url: 'https://www.linkedin.com/in/vatsal-roy/' },
    { name: 'Email', icon: Mail, url: 'mailto:vatsal.roy2429@gmail.com' },
];

const PROJECTS = [
    { name: 'lakehouse-sql-eval', url: 'https://github.com/VatsalRoy/lakehouse-sql-eval' },
    { name: 'agent-reliability-bench', url: 'https://github.com/VatsalRoy/agent-reliability-bench' },
    { name: 'keep-it-warm', url: 'https://github.com/VatsalRoy/keep-it-warm' },
    { name: 'quant-gate', url: 'https://github.com/VatsalRoy/quant-gate' },
    { name: 'shadow-ai-privacy-auditor', url: 'https://github.com/VatsalRoy/shadow-ai-privacy-auditor' },
];

// Live clock in New York time
const useNewYorkTime = () => {
    const format = () => new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit' });
    const [time, setTime] = useState(format);
    useEffect(() => {
        const id = setInterval(() => setTime(format()), 15000);
        return () => clearInterval(id);
    }, []);
    return time;
};

const Footer = () => {
    const { isDrakeMode } = useTheme();
    const footerRef = useRef(null);
    const isInView = useInView(footerRef, { once: true, margin: '-50px' });
    const time = useNewYorkTime();

    const muted = isDrakeMode ? 'text-gray-400' : 'text-gray-600';
    const link = `transition-colors ${isDrakeMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-950'}`;
    const glass = isDrakeMode ? 'bg-[#03050d]/75 border-white/10' : 'bg-white/80 border-gray-200';

    const go = (id) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });

    return (
        <footer ref={footerRef} className={`relative px-6 pb-6 ${isDrakeMode ? 'text-white' : 'text-gray-900'}`}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="max-w-6xl mx-auto"
            >
                {/* Link panel */}
                <div className={`rounded-3xl border backdrop-blur-xl p-8 md:p-10 ${glass}`}>
                    <div className="grid gap-10 md:grid-cols-12">
                        <div className="md:col-span-5">
                            <div className="flex items-center gap-2 text-xl font-medium mb-3">
                                <Code2 size={22} className="text-blue-500" /> Vatsal Roy
                            </div>
                            <p className={`text-sm leading-relaxed max-w-xs mb-6 ${muted}`}>
                                AI/ML and Forward Deployed Engineer. I build AI systems, then prove whether they actually work.
                            </p>
                            <div className="flex gap-2">
                                {SOCIALS.map((s) => (
                                    <motion.a
                                        key={s.name}
                                        href={s.url}
                                        target={s.url.startsWith('http') ? '_blank' : undefined}
                                        rel="noreferrer"
                                        aria-label={s.name}
                                        whileHover={{ y: -3 }}
                                        className={`p-3 rounded-full border transition-colors ${isDrakeMode ? 'border-white/10 hover:bg-white/10' : 'border-gray-200 hover:bg-gray-100'}`}
                                    >
                                        <s.icon size={16} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        <nav className="md:col-span-3" aria-label="Footer">
                            <h4 className={`font-mono text-[11px] uppercase tracking-[0.25em] mb-4 ${muted}`}>Navigate</h4>
                            <ul className="space-y-2.5 text-sm">
                                {NAV.map((n, i) => (
                                    <li key={n}>
                                        <button onClick={() => go(n)} className={`group inline-flex items-center gap-3 ${link}`}>
                                            <span className="font-mono text-[10px] text-blue-500">0{i + 1}</span> {n}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="md:col-span-4">
                            <h4 className={`font-mono text-[11px] uppercase tracking-[0.25em] mb-4 ${muted}`}>Projects</h4>
                            <ul className="space-y-2.5 text-sm">
                                {PROJECTS.map((p) => (
                                    <li key={p.name}>
                                        <a href={p.url} target="_blank" rel="noreferrer" className={`group inline-flex items-center gap-1.5 font-mono text-[13px] ${link}`}>
                                            {p.name}
                                            <ArrowUpRight size={13} className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={`mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${isDrakeMode ? 'border-white/10' : 'border-gray-200'} ${muted}`}>
                        <span>© {new Date().getFullYear()} Vatsal Roy</span>
                        <span className="font-mono inline-flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            New York · {time} ET
                        </span>
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 transition-colors ${isDrakeMode ? 'border-white/10 hover:bg-white/10 text-gray-300' : 'border-gray-200 hover:bg-gray-100 text-gray-700'}`}
                        >
                            Back to top <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
                        </button>
                    </div>
                </div>

                {/* Oversized wordmark sitting in the ASCII glow (SVG so it always fits the width) */}
                <div className="relative mt-8 select-none pointer-events-none" aria-hidden="true">
                    <svg viewBox="0 0 1000 150" className="w-full h-auto">
                        <defs>
                            <linearGradient id="wordmark-fill" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor={isDrakeMode ? '#ffffff' : '#1e3a8a'} stopOpacity={isDrakeMode ? 0.9 : 0.85} />
                                <stop offset="100%" stopColor={isDrakeMode ? '#ffffff' : '#1e3a8a'} stopOpacity="0.04" />
                            </linearGradient>
                        </defs>
                        <text
                            x="0"
                            y="132"
                            textLength="1000"
                            lengthAdjust="spacingAndGlyphs"
                            fill="url(#wordmark-fill)"
                            style={{ fontSize: 170, fontWeight: 600, fontFamily: 'Urbanist, sans-serif', letterSpacing: '-0.04em' }}
                        >
                            VATSAL ROY
                        </text>
                    </svg>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;