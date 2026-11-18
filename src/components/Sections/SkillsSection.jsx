import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

import { useTheme } from '../../context/ThemeContext';
import { SKILLS_CATEGORY, STATS, TECH_STACK } from '../../utils/data';
import { containerVariants, itemVariants } from '../../utils/helper';

import DecryptedText from '../reactbits/DecryptedText';
import SpotlightCard from '../reactbits/SpotlightCard';
import CountUp from '../reactbits/CountUp';
import LogoLoop from '../reactbits/LogoLoop';

const SEGMENTS = 20;

const slug = (title) => title.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const levelLabel = (level) => (level >= 90 ? 'expert' : level >= 80 ? 'advanced' : level >= 70 ? 'proficient' : 'working');

// Segmented meter: 20 cells that fill one after another
const SegmentMeter = ({ level, isDrakeMode, delay = 0 }) => {
    const filled = Math.round((level / 100) * SEGMENTS);
    return (
        <div className="flex gap-[3px]" aria-hidden="true">
            {Array.from({ length: SEGMENTS }).map((_, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, scaleY: 0.3 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    transition={{ delay: delay + i * 0.025, duration: 0.25 }}
                    className={`h-3 flex-1 rounded-[2px] ${i < filled
                        ? i >= filled - 3 ? 'bg-sky-400' : 'bg-blue-500'
                        : isDrakeMode ? 'bg-white/[0.06]' : 'bg-gray-200'}`}
                />
            ))}
        </div>
    );
};

const SkillsSection = () => {
    const { isDrakeMode } = useTheme();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    const [active, setActive] = useState(0);

    const category = SKILLS_CATEGORY[active];
    const avg = Math.round(category.skills.reduce((a, s) => a + s.level, 0) / category.skills.length);

    const muted = isDrakeMode ? 'text-gray-400' : 'text-gray-600';
    const glass = isDrakeMode ? 'bg-[#060a18]/75 border-white/10' : 'bg-white/80 border-gray-200';

    const half = Math.ceil(TECH_STACK.length / 2);
    const toPills = (list) => list.map((tech) => ({
        title: tech,
        node: (
            <span className={`whitespace-nowrap font-mono text-sm px-4 py-2 rounded-full border ${isDrakeMode ? 'bg-[#060a18]/80 border-white/10 text-gray-300' : 'bg-white/80 border-gray-200 text-gray-700'}`}>
                {tech}
            </span>
        ),
    }));

    return (
        <section ref={sectionRef} id="skills" className={`py-24 px-6 ${isDrakeMode ? 'text-white' : 'text-gray-900'} relative overflow-hidden`}>
            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header */}
                <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={containerVariants} className="text-center mb-16">
                    <motion.div variants={itemVariants} className="font-mono text-xs uppercase tracking-[0.3em] text-blue-500 mb-4">
                        <DecryptedText text="// 03 — Technical Expertise" animateOn="view" sequential speed={35} encryptedClassName="opacity-60" />
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-light mb-6">
                        Skills & <span className="text-blue-500 font-medium">Technologies</span>
                    </motion.h2>
                    <motion.p variants={itemVariants} className={`text-lg ${muted} max-w-2xl mx-auto font-light`}>
                        The toolkit I use to ship LLM systems, data pipelines and full-stack apps — and to measure whether they work.
                    </motion.p>
                </motion.div>

                {/* Terminal window */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className={`rounded-2xl border overflow-hidden backdrop-blur-md shadow-2xl shadow-blue-950/20 ${glass}`}
                >
                    {/* Title bar */}
                    <div className={`flex items-center gap-2 px-5 py-3 border-b ${isDrakeMode ? 'border-white/10 bg-white/[0.02]' : 'border-gray-200 bg-gray-50/80'}`}>
                        <span className="w-3 h-3 rounded-full bg-red-400/80" />
                        <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                        <span className="w-3 h-3 rounded-full bg-green-400/80" />
                        <span className={`ml-4 font-mono text-xs truncate ${muted}`}>
                            vatsal@portfolio:~/skills/<span className="text-blue-500">{slug(category.title)}</span>
                        </span>
                    </div>

                    <div className="grid md:grid-cols-[280px_1fr]">
                        {/* Category list (tabs) */}
                        <div
                            role="tablist"
                            aria-label="Skill categories"
                            className={`flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-r p-3 gap-1 ${isDrakeMode ? 'border-white/10' : 'border-gray-200'}`}
                        >
                            {SKILLS_CATEGORY.map((cat, i) => {
                                const selected = i === active;
                                return (
                                    <button
                                        key={cat.title}
                                        role="tab"
                                        aria-selected={selected}
                                        onClick={() => setActive(i)}
                                        className={`relative shrink-0 flex items-center gap-3 text-left rounded-xl px-3 py-3 transition-colors ${selected
                                            ? isDrakeMode ? 'text-white' : 'text-gray-900'
                                            : `${muted} ${isDrakeMode ? 'hover:bg-white/[0.04]' : 'hover:bg-gray-100'}`}`}
                                    >
                                        {selected && (
                                            <motion.span
                                                layoutId="skill-tab"
                                                className={`absolute inset-0 rounded-xl border ${isDrakeMode ? 'bg-blue-500/10 border-blue-400/30' : 'bg-blue-50 border-blue-200'}`}
                                                transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                                            />
                                        )}
                                        <cat.icon size={18} className={`relative ${selected ? 'text-blue-500' : ''}`} />
                                        <span className="relative text-sm font-medium whitespace-nowrap md:whitespace-normal">{cat.title}</span>
                                        <ChevronRight size={14} className={`relative ml-auto hidden md:block transition-opacity ${selected ? 'opacity-100 text-blue-500' : 'opacity-0'}`} />
                                    </button>
                                );
                            })}
                        </div>

                        {/* Active panel */}
                        <div className="p-6 md:p-8 min-h-[440px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, x: 12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -12 }}
                                    transition={{ duration: 0.25 }}
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                                        <div>
                                            <div className="font-mono text-xs text-blue-500 mb-2">$ cat {slug(category.title)}.md</div>
                                            <h3 className="text-2xl font-medium mb-2">{category.title}</h3>
                                            <p className={`text-sm max-w-md ${muted}`}>{category.description}</p>
                                        </div>
                                        <div className={`rounded-xl border px-4 py-3 text-right ${isDrakeMode ? 'border-white/10 bg-white/[0.03]' : 'border-gray-200 bg-white'}`}>
                                            <div className="text-3xl font-light text-blue-500">{avg}</div>
                                            <div className={`font-mono text-[10px] uppercase tracking-wider ${muted}`}>avg. depth</div>
                                        </div>
                                    </div>

                                    <div className="space-y-5 mb-8">
                                        {category.skills.map((skill, i) => (
                                            <div key={skill.name}>
                                                <div className="flex justify-between items-baseline mb-2 gap-4">
                                                    <span className="text-sm font-medium">{skill.name}</span>
                                                    <span className={`font-mono text-xs ${muted}`}>
                                                        {levelLabel(skill.level)} · <span className="text-blue-500">{skill.level}</span>
                                                    </span>
                                                </div>
                                                <SegmentMeter level={skill.level} isDrakeMode={isDrakeMode} delay={i * 0.06} />
                                            </div>
                                        ))}
                                    </div>

                                    {/* Proof */}
                                    {category.proof && (
                                        <SpotlightCard
                                            theme={isDrakeMode ? 'dark' : 'light'}
                                            spotlightColor="rgba(56, 189, 248, 0.2)"
                                            className={`!p-4 !rounded-xl border ${isDrakeMode ? 'border-sky-400/20 bg-sky-400/[0.04]' : 'border-blue-200 bg-blue-50/60'}`}
                                        >
                                            <div className="flex items-center justify-between gap-4">
                                                <div className="min-w-0">
                                                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-sky-400 mb-1">Proof · {category.proof.name}</div>
                                                    <div className={`text-sm ${isDrakeMode ? 'text-gray-200' : 'text-gray-800'}`}>{category.proof.text}</div>
                                                </div>
                                                {category.proof.url && (
                                                    <a
                                                        href={category.proof.url}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        aria-label={`Open ${category.proof.name} on GitHub`}
                                                        className="shrink-0 p-2 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                                                    >
                                                        <ArrowUpRight size={16} />
                                                    </a>
                                                )}
                                            </div>
                                        </SpotlightCard>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>

                {/* Also working with — React Bits: Logo Loop */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.4 }}
                    className="mt-16"
                >
                    <h3 className={`text-center font-mono text-xs uppercase tracking-[0.3em] mb-6 ${muted}`}>Also working with</h3>
                    <div className="space-y-3">
                        <LogoLoop logos={toPills(TECH_STACK.slice(0, half))} speed={40} gap={12} logoHeight={40} pauseOnHover fadeOut ariaLabel="Tools, row one" />
                        <LogoLoop logos={toPills(TECH_STACK.slice(half))} speed={40} direction="right" gap={12} logoHeight={40} pauseOnHover fadeOut ariaLabel="Tools, row two" />
                    </div>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                    className="mt-16 grid grid-cols-3 gap-4 md:gap-6"
                >
                    {STATS.map((stat) => (
                        <motion.div key={stat.label} variants={itemVariants} className={`text-center rounded-2xl border px-4 py-6 backdrop-blur-md ${glass}`}>
                            <div className="text-3xl md:text-4xl font-light text-blue-500 mb-2">
                                <CountUp to={parseFloat(stat.number)} duration={1.6} />{stat.number.replace(/[\d.]/g, '')}
                            </div>
                            <div className={`font-mono text-[10px] md:text-xs uppercase tracking-wider ${muted}`}>{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;