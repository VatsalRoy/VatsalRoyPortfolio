import {useRef} from 'react';
import {useInView, motion, useScroll, useTransform} from 'framer-motion';
import {useTheme} from '../../context/ThemeContext';
import { JOURNEY_STEPS, PASSIONS } from '../../utils/data';

import SIGNATURE from '../../assets/images/signature.png';
import {containerVariants, itemVariants} from '../../utils/helper';

const AboutSection = () => {
    const {isDrakeMode} = useTheme();
    const sectionRef = useRef(null);
    const timelineRef = useRef(null);
    const isInView = useInView(sectionRef, {once: true, margin: "-100px"});
    const timelineInView = useInView(timelineRef, {once: true, margin: "-100px"});

    const {scrollYProgress} = useScroll({target: sectionRef, offset: ["start end", "end start"]});

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const timelineVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const stepVariants = {
        hidden: {opacity: 0, x: -50},
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    return (
        <section
            id="about"
            ref={sectionRef}
            className={`py-24 px-6 ${isDrakeMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"} relative overflow-hidden`}
            >

                {/* Background Elements */}
                <motion.div style={{y}} className="absolute inset-0 overflow-hidden">
                    <div
                        className={`absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-5 ${isDrakeMode ? "bg-blue-500" : "bg-blue-400"}`}
                    />
                    <div
                        className={`absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-5 ${isDrakeMode ? "bg-purple-500" : "bg-purple-400"}`}
                    />

                </motion.div>

                <div className="max-w-6xl mx-auto relative z-10">
                    
                    {/* Section Header */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="text-center mb-20"
                        >
                            Get to Know Me
                    
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:test-5xl font-light mb-6"
                    >
                        About
                        <span className="text-blue-500 font-medium"> Me</span>
                    </motion.h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        {/* Personal Story */}
                        <motion.div
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={containerVariants}
                            className="space-y-8">
                                <motion.div
                                    variants={itemVariants}
                                    className={'p-8 rounded-2xl border ${isDrakeMode ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm" : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"}'}>
                                        <h3 className="text-2xl font-medium mb-6">My Mission</h3>
                                        <p className={`text-lg leading-relaxed mb-6 ${isDrakeMode ? "text-gray-300" : "text-gray-700"}`}>
                                        Over the past few years, I've worked across the full stack of applied machine learning — from designing ETL pipelines and data warehouses that feed clean, reliable signals into models, to deploying LLM-powered systems that process millions of records without manual intervention. At NMR Infotech, I cut model development timelines by 25% across 8+ client projects by standardizing feature engineering frameworks, and kept production ML running at 99.2% uptime with automated drift monitoring and rollback. Currently at Community Dreams Foundation, I focus on customer behavioral data — building anomaly detection into pipelines and turning A/B experiment results into self-serve dashboards that product teams actually use.
                                        </p>
                                        <p className={`text-lg leading-relaxed ${isDrakeMode ? "text-gray-300" : "text-gray-700"}`}>
                                        What I enjoy most is the intersection of GenAI and engineering rigor. My recent projects include a fault-tolerant, agentic LLM pipeline that processed 5M+ Yelp reviews with 100% completion (Airflow + LLaMA 3.2, with bandit-style routing that self-heals malformed inputs), a RAG-based personalized news aggregator that improved content relevance by 42%, and a CNN for cardiomegaly detection (AUC 0.906) tuned with reinforcement-learning-style hyperparameter search.
                                        </p>
                                        <p className={`text-lg leading-relaxed ${isDrakeMode ? "text-gray-300" : "text-gray-700"}`}>
                                        I hold an M.S. in Computer Science from Long Island University (Deep Learning, AI, Statistics) and a B.S. in Computer Engineering from Gujarat Technological University. My toolkit spans Python, SQL, PyTorch, TensorFlow, Spark, Databricks, Airflow, and AWS — but what I really care about is shipping systems that are measurable, reliable, and useful.
                                        </p>
                                        <p className={`text-lg leading-relaxed ${isDrakeMode ? "text-gray-300" : "text-gray-700"}`}>
                                        Open to connecting about applied ML, data engineering, and GenAI/LLM systems — or anything in between.
                                        </p>
                                </motion.div>
                            </motion.div>
                                        
                        {/* Devloper Journey Timeline */}
                        <motion.div
                            ref={timelineRef}
                            initial="hidden"
                            animate={timelineInView ? "visible" : "hidden"}
                            variants={timelineVariants}
                            className="relative">
                                <h3 className="text-2xl font-medium mb-8 text-center lg:text-left"> 
                                    My Developer Journey
                                </h3>
                                <div 
                                    className={`absolute left-8 top-16 bottom-0 w-px ${isDrakeMode ? "bg-gray-700" : "bg-gray-300"}`}
                                />
                                <div className="space-y-8">
                                    {JOURNEY_STEPS.map((step,index) => (
                                        <motion.div
                                            key={step.year}
                                            variants={stepVariants}
                                            whileHover={{ x: 4 }}
                                            className="relative flex items-start space-x-6 group">

                                                {/* Timeline Dot */}
                                                <div 
                                                    className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                                >
                                                    <step.icon size={24} className="text-white" />
                                                </div>
                                                {/* Timeline Content */}
                                                <div 
                                                    className={`flex-grow p-6 rounded-xl border transition-all duration-300 ${isDrakeMode ? "bg-gray-800/50 border-gray-700 group-hover:border-gray-600 group-hover:bg-gray-800/70" : "bg-white/80 border-gray-200 group-hover:border-gray-300 group-hover:bg-white"} backdrop-blur-sm`}
                                                >
                                                    <div className="flex items-center justify-between mb-2">
                                                        <h4 className="text-xl font-medium"> {step.title} </h4>
                                                        <span
                                                            className={`text-sm px-3 py-1 rounded-full ${isDrakeMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"}`}
                                                        >
                                                            {step.year}
                                                        </span>
                                                    </div>
                                                    <div
                                                        className={`text-sm font-medium ${isDrakeMode ? "text-blue-400" : "text-blue-600"} mb-3`}
                                                    >
                                                        {step.company}
                                                    </div>
                                                    <p
                                                        className={`text-sm leading-relaxed ${isDrakeMode ? "text-gray-400" : "text-gray-600"}`}
                                                    >
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </motion.div>
                                    ))}

                                </div>
                                
                            </motion.div>
                    </div>

                    {/* Digital Signature */}
                    {/*
                    <motion.div
                                    variants={itemVariants}
                                    className="text-center py-8">
                                        <div className={`text-sm ${isDrakeMode ? "text-gray-500" : "text-gray-600"} mb-4`}>
                                            Crafted with passion by
                                        </div>
                                        {/* Signature Image *
                                        <div className="flex justify-center">
                                            <img src={SIGNATURE} alt="Vatsal Roy" className="w-28" />
                                        </div>
                                        <div className="text-lg font-medium text-blue-500 mt-2">
                                            Vatsal Roy
                                        </div>
                        </motion.div> */}
                </div>
            </section>
    )
}

export default AboutSection;