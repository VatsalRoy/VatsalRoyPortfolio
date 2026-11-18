import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Target, GraduationCap, Briefcase, Sparkles } from 'lucide-react';

import { useTheme } from '../../context/ThemeContext';
import { JOURNEY_STEPS, PASSIONS } from '../../utils/data';
import { containerVariants, itemVariants } from '../../utils/helper';

import DecryptedText from '../reactbits/DecryptedText';
import SpotlightCard from '../reactbits/SpotlightCard';

const AT_A_GLANCE = [
    { icon: MapPin, label: 'Based in', value: 'New York, NY' },
    { icon: Target, label: 'Focus', value: 'LLM evaluation, agents, text-to-SQL, data pipelines' },
    { icon: GraduationCap, label: 'Education', value: 'M.S. Computer Science, Long Island University' },
    { icon: Sparkles, label: 'Open to', value: 'Forward Deployed, AI & ML Engineer roles' },
];

const isEducation = (step) => /^(B\.E\.|M\.S\.)/.test(step.title);

const AboutSection = () => {
    const { isDrakeMode } = useTheme();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    const muted = isDrakeMode ? 'text-gray-400' : 'text-gray-600';
    const body = isDrakeMode ? 'text-gray-300' : 'text-gray-700';
    const glass = isDrakeMode ? 'bg-[#060a18]/75 border-white/10' : 'bg-white/80 border-gray-200';

    // Newest first
    const experience = JOURNEY_STEPS.filter((s) => !isEducation(s)).reverse();
    const education = JOURNEY_STEPS.filter(isEducation).reverse();

    return (
        <section id="about" ref={sectionRef} className={`py-28 px-6 ${isDrakeMode ? 'text-white' : 'text-gray-900'} relative`}>
            <div className="max-w-6xl mx-auto relative z-10">

                {/* Header */}
                <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={containerVariants} className="mb-16">
                    <motion.div variants={itemVariants} className="font-mono text-xs uppercase tracking-[0.3em] text-blue-500 mb-4">
                        <DecryptedText text="// 02 — Get to Know Me" animateOn="view" sequential speed={35} encryptedClassName="opacity-60" />
                    </motion.div>
                    <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-light">
                        About <span className="text-blue-500 font-medium">Me</span>
                    </motion.h2>
                </motion.div>

                {/* Intro: quote + bio | at a glance */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    variants={containerVariants}
                    className="grid lg:grid-cols-12 gap-8 mb-20"
                >
                    <motion.div variants={itemVariants} className="lg:col-span-7">
                        <blockquote className="relative pl-6 border-l-2 border-blue-500 mb-8">
                            <p className="text-2xl md:text-3xl font-light leading-snug">
                                Judge an LLM system by the answers it produces,{' '}
                                <span className="text-blue-500">not by how confident the model sounds.</span>
                            </p>
                        </blockquote>
                        <div className={`space-y-5 text-lg leading-relaxed ${body}`}>
                            <p>
                                I'm an AI/ML and Forward Deployed Engineer in New York. I build AI systems, then prove whether they actually work:
                                I write hypotheses before I run an experiment, and I report confidence intervals and limitations along with the wins.
                            </p>
                            <p>
                                I've worked across the whole path — full-stack apps (React, Node.js, REST APIs), data pipelines (Databricks, Airflow, PySpark)
                                and LLM systems (LangGraph, vLLM, OpenAI, Claude). The job, as I see it, is to walk into a customer's messy data,
                                ship something real, and show it works.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div variants={itemVariants} className="lg:col-span-5">
                        <div className={`h-full rounded-2xl border backdrop-blur-md overflow-hidden ${glass}`}>
                            <div className={`flex items-center gap-2 px-5 py-3 border-b font-mono text-xs ${isDrakeMode ? 'border-white/10 bg-white/[0.02]' : 'border-gray-200 bg-gray-50/80'} ${muted}`}>
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                at-a-glance.json
                            </div>
                            <dl className="p-6 space-y-5">
                                {AT_A_GLANCE.map((row) => (
                                    <div key={row.label} className="flex gap-4">
                                        <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${isDrakeMode ? 'bg-blue-500/10 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                                            <row.icon size={18} />
                                        </div>
                                        <div>
                                            <dt className={`font-mono text-[11px] uppercase tracking-wider ${muted}`}>{row.label}</dt>
                                            <dd className="text-sm font-medium mt-0.5">{row.value}</dd>
                                        </div>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </motion.div>
                </motion.div>

                {/* How I work */}
                <motion.div initial="hidden" animate={isInView ? 'visible' : 'hidden'} variants={containerVariants} className="mb-20">
                    <motion.h3 variants={itemVariants} className={`font-mono text-xs uppercase tracking-[0.3em] mb-6 ${muted}`}>How I work</motion.h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {PASSIONS.map((p, i) => (
                            <motion.div key={p.title} variants={itemVariants}>
                                <SpotlightCard
                                    theme={isDrakeMode ? 'dark' : 'light'}
                                    spotlightColor="rgba(56, 189, 248, 0.2)"
                                    className={`h-full !p-6 !rounded-2xl border backdrop-blur-md ${glass}`}
                                >
                                    <div className="flex items-center justify-between mb-5">
                                        <p.icon size={22} className="text-blue-500" />
                                        <span className={`font-mono text-xs ${muted}`}>0{i + 1}</span>
                                    </div>
                                    <h4 className="font-medium mb-2">{p.title}</h4>
                                    <p className={`text-sm leading-relaxed ${muted}`}>{p.description}</p>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Experience + Education */}
                <div className="grid lg:grid-cols-12 gap-10">
                    <div className="lg:col-span-8">
                        <h3 className={`flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] mb-6 ${muted}`}>
                            <Briefcase size={14} /> Experience
                        </h3>
                        <ol className="relative">
                            <span className={`absolute left-[7px] top-2 bottom-2 w-px ${isDrakeMode ? 'bg-white/10' : 'bg-gray-300'}`} aria-hidden="true" />
                            {experience.map((step, i) => {
                                const current = /Present/i.test(step.year);
                                return (
                                    <motion.li
                                        key={step.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: '-60px' }}
                                        transition={{ duration: 0.5, delay: i * 0.08 }}
                                        className="relative pl-10 pb-8 last:pb-0"
                                    >
                                        <span className={`absolute left-0 top-6 w-[15px] h-[15px] rounded-full border-2 ${current ? 'bg-blue-500 border-blue-300 shadow-[0_0_0_6px_rgba(59,130,246,0.2)]' : isDrakeMode ? 'bg-[#03050d] border-gray-600' : 'bg-white border-gray-400'}`} />
                                        <div className={`rounded-2xl border p-6 backdrop-blur-md transition-colors ${glass} ${current ? 'border-blue-500/40' : ''}`}>
                                            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                                <h4 className="text-lg font-medium">{step.title}</h4>
                                                <span className={`font-mono text-xs px-2.5 py-1 rounded-full ${current ? 'bg-blue-500 text-white' : isDrakeMode ? 'bg-white/5 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                                                    {step.year}
                                                </span>
                                            </div>
                                            <div className="text-sm text-blue-500 mb-3">{step.company}</div>
                                            <p className={`text-sm leading-relaxed ${muted}`}>{step.description}</p>
                                        </div>
                                    </motion.li>
                                );
                            })}
                        </ol>
                    </div>

                    <div className="lg:col-span-4">
                        <h3 className={`flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] mb-6 ${muted}`}>
                            <GraduationCap size={14} /> Education
                        </h3>
                        <div className="space-y-4">
                            {education.map((step, i) => (
                                <motion.div
                                    key={step.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: '-60px' }}
                                    transition={{ duration: 0.5, delay: i * 0.08 }}
                                    className={`rounded-2xl border p-6 backdrop-blur-md ${glass}`}
                                >
                                    <div className={`font-mono text-xs mb-3 ${muted}`}>{step.year}</div>
                                    <h4 className="font-medium mb-1">{step.title}</h4>
                                    <div className="text-sm text-blue-500 mb-3">{step.company}</div>
                                    <div className={`text-sm ${muted}`}>{step.description}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;