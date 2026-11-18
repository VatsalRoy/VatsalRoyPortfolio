import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

import { useTheme } from '../../context/ThemeContext';
import { containerVariants, itemVariants } from '../../utils/helper';

import DecryptedText from '../reactbits/DecryptedText';
import SpotlightCard from '../reactbits/SpotlightCard';
import StarBorder from '../reactbits/StarBorder';

const EMAIL = 'vatsal.roy2429@gmail.com';
const PHONE = '+1 (908) 900-7259';

const CHANNELS = [
    { icon: FiLinkedin, label: 'LinkedIn', value: 'in/vatsal-roy', href: 'https://www.linkedin.com/in/vatsal-roy/', note: 'Best for recruiters' },
    { icon: FiGithub, label: 'GitHub', value: 'VatsalRoy', href: 'https://github.com/VatsalRoy', note: 'Code & write-ups' },
    { icon: Phone, label: 'Phone', value: PHONE, href: 'tel:+19089007259', note: 'Call or text' },
    { icon: MapPin, label: 'Location', value: 'New York, NY', href: null, note: 'Eastern Time' },
];

const ROLES = ['Forward Deployed Engineer', 'AI Engineer', 'ML Engineer'];

const ContactSection = () => {
    const { isDrakeMode } = useTheme();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    const [copied, setCopied] = useState(false);

    const muted = isDrakeMode ? 'text-gray-400' : 'text-gray-600';
    const glass = isDrakeMode ? 'bg-[#060a18]/80 border-white/10' : 'bg-white/85 border-gray-200';

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    };

    return (
        <section id="contact" ref={sectionRef} className={`pt-28 pb-16 px-6 ${isDrakeMode ? 'text-white' : 'text-gray-900'} relative`}>
            <motion.div
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={containerVariants}
                className="max-w-6xl mx-auto relative z-10"
            >
                {/* Label */}
                <motion.div variants={itemVariants} className="font-mono text-xs uppercase tracking-[0.3em] text-blue-500 mb-6">
                    <DecryptedText text="// 05 — Let's Connect" animateOn="view" sequential speed={35} encryptedClassName="opacity-60" />
                </motion.div>

                <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
                    {/* Big statement */}
                    <motion.div variants={itemVariants} className="lg:col-span-7">
                        <h2 className="text-4xl md:text-6xl font-light leading-[1.05] tracking-tight mb-6">
                            Got messy data and an AI idea?{' '}
                            <span className="font-medium bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent">
                                Let's prove it works.
                            </span>
                        </h2>
                        <p className={`text-lg max-w-xl ${muted}`}>
                            I'm open to roles where I can ship AI systems with real customers and measure whether they hold up.
                        </p>
                    </motion.div>

                    {/* Availability */}
                    <motion.div variants={itemVariants} className="lg:col-span-5">
                        <div className={`rounded-2xl border p-6 backdrop-blur-xl ${glass}`}>
                            <div className="flex items-center gap-2 mb-4">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                                </span>
                                <span className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-400">Available now</span>
                            </div>
                            <div className={`text-sm mb-3 ${muted}`}>Open to</div>
                            <div className="flex flex-wrap gap-2">
                                {ROLES.map((r) => (
                                    <span key={r} className={`text-sm px-3 py-1.5 rounded-full border ${isDrakeMode ? 'border-blue-400/30 bg-blue-500/10 text-blue-100' : 'border-blue-200 bg-blue-50 text-blue-800'}`}>
                                        {r}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Email — the main action */}
                <motion.div variants={itemVariants} className="mb-6">
                    <SpotlightCard
                        theme={isDrakeMode ? 'dark' : 'light'}
                        spotlightColor="rgba(56, 189, 248, 0.22)"
                        className={`!p-0 !rounded-3xl border backdrop-blur-xl ${glass}`}
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 md:p-10">
                            <div className="min-w-0">
                                <div className={`flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] mb-3 ${muted}`}>
                                    <Mail size={14} className="text-blue-500" /> Email me directly
                                </div>
                                <button
                                    onClick={copyEmail}
                                    className="group text-left text-2xl sm:text-3xl md:text-4xl font-light break-all hover:text-blue-500 transition-colors"
                                    aria-label={`Copy ${EMAIL}`}
                                >
                                    {EMAIL}
                                </button>
                            </div>
                            <div className="flex gap-3 shrink-0">
                                <button
                                    onClick={copyEmail}
                                    className={`relative inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-colors ${isDrakeMode ? 'border-white/15 hover:bg-white/10' : 'border-gray-300 hover:bg-gray-100'}`}
                                >
                                    <AnimatePresence mode="wait" initial={false}>
                                        {copied ? (
                                            <motion.span key="ok" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="inline-flex items-center gap-2 text-emerald-400">
                                                <Check size={16} /> Copied
                                            </motion.span>
                                        ) : (
                                            <motion.span key="copy" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} className="inline-flex items-center gap-2">
                                                <Copy size={16} /> Copy
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </button>
                                <StarBorder
                                    as="a"
                                    href={`mailto:${EMAIL}`}
                                    color="#38bdf8"
                                    radius={999}
                                    theme={isDrakeMode ? 'dark' : 'light'}
                                    className="text-sm font-medium"
                                >
                                    <span className="inline-flex items-center gap-2 px-2">
                                        Send email <ArrowUpRight size={16} />
                                    </span>
                                </StarBorder>
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>

                {/* Other channels */}
                <motion.div variants={containerVariants} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {CHANNELS.map((c) => {
                        const Tag = c.href ? 'a' : 'div';
                        return (
                            <motion.div key={c.label} variants={itemVariants} whileHover={c.href ? { y: -4 } : undefined}>
                                <Tag
                                    {...(c.href ? { href: c.href, target: c.href.startsWith('http') ? '_blank' : undefined, rel: 'noreferrer' } : {})}
                                    className={`group block h-full rounded-2xl border p-5 backdrop-blur-xl transition-colors ${glass} ${c.href ? (isDrakeMode ? 'hover:border-blue-400/40' : 'hover:border-blue-400') : ''}`}
                                >
                                    <div className="flex items-center justify-between mb-6">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDrakeMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                                            <c.icon size={18} />
                                        </div>
                                        {c.href && <ArrowUpRight size={18} className={`transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${muted}`} />}
                                    </div>
                                    <div className={`font-mono text-[11px] uppercase tracking-wider mb-1 ${muted}`}>{c.label}</div>
                                    <div className="font-medium mb-1 truncate">{c.value}</div>
                                    <div className={`text-xs ${muted}`}>{c.note}</div>
                                </Tag>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactSection;