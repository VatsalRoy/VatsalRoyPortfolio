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
                                        I'm a Machine Learning Engineer passionate about building intelligent solutions, teaching through projects, and learning from real-world data. With a Master's in Computer Science from Long Island University and a Bachelor's in Computer Engineering from Gujarat Technological University, my journey spans from leading web development initiatives building an event registration platform for 5,000+ students to developing ML pipelines as a Data Engineer Intern at NMR Infotech. During my summer internship at Blossom Lab of Gem Institute in New York, I analyzed finance and sales data to optimize pricing strategies and identify revenue trends.                                        </p>
                                        <p className={`text-lg leading-relaxed ${isDrakeMode ? "text-gray-300" : "text-gray-700"}`}>
                                        I specialize in deep learning (CNNs), statistical modeling, and end-to-end ML pipeline development using Python, TensorFlow, pandas, and NumPy. My projects range from medical image classification for cardiomegaly detection to restaurant delivery analytics, always transforming complex data into actionable insights. I believe in continuous learning and knowledge sharing approaching each project as an opportunity to build, teach, and grow while contributing to AI technologies that solve real-world challenges
                                        </p>
                                </motion.div>
                                {/* What I Love Building */}
                                <motion.div variants={itemVariants} className="space-y-4">
                                    <h3 className="text-xl font-medium mb-6">What I Love Building</h3>
                                    <div className="grid gap-4">
                                        {PASSIONS.map((passion, index) => (
                                            <motion.div
                                                key={passion.title}
                                                variants={itemVariants}
                                                whileHover={{ x: 4 }}
                                                className={`flex items-center space-x-4 rounded-xl ${isDrakeMode ? "bg-gray-800/30 hover:bg-gray-800/50" : "bg-gray-50/50 hover:bg-gray-100/50"} transition-colors duration-300`}>
                                                    <div 
                                                        className={`p-3 rounded-lg ${isDrakeMode ? "bg-gray-700" : "bg-white"}`}
                                                    >
                                                        <passion.icon size={20} className="text-blue-500" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-medium mb-1">{passion.title}</h4>
                                                        <p
                                                            className={`text-sm ${isDrakeMode ? "text-gray-400" : "text-gray-600"}`}
                                                          >
                                                            {passion.description}
                                                        </p>
                                                    </div>
                                                </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                                {/* Digital Signature */}
                                <motion.div
                                    variants={itemVariants}
                                    className="text-center py-8">
                                        <div className={`text-sm ${isDrakeMode ? "text-gray-500" : "text-gray-600"} mb-4`}>
                                            Crafted with passion by
                                        </div>
                                        {/* Signature Image */}
                                        <div className="flex justify-center">
                                            <img src={SIGNATURE} alt="Vatsal Roy" className="w-28" />
                                        </div>
                                        <div className="text-lg font-medium text-blue-500 mt-2">
                                            Vatsal Roy
                                        </div>
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

                    {/* Call to Action */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                        className="text-center mt-20">
                            <motion.div 
                                variants={itemVariants}
                                className="flex flex-col items-center space-y-6">
                                    <p className={`text-lg ${isDrakeMode ? "text-gray-400" : "text-gray-600"}`}>
                                        I'm looking for a new opportunities to grow and contribute to innovative projects.
                                    </p>

                                    <motion.button
                                        whileHover={{ y: -2, scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300">
                                            Let's Work Together
                                        </motion.button>
                                </motion.div>
                        </motion.div>
                </div>
            </section>
    )
}

export default AboutSection;