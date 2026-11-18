import {useRef} from 'react';
import {motion, useInView} from 'framer-motion';

import {useTheme} from '../../context/ThemeContext';
import {PROJECTS} from '../../utils/data';
import ProjectCard from '../ProjectCard';
import DecryptedText from '../reactbits/DecryptedText';
import {containerVariants, itemVariants} from '../../utils/helper';


const ProjectsSection = () => {
    const {isDrakeMode} = useTheme();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {once: true, margin: "-100px"});
    
    return <section
    id="work"
    ref={sectionRef}
    className={`py-24 px-6 ${isDrakeMode ? "text-white" : "text-gray-900"} relative overflow-hidden`}>

        <div className="max-w-7xl mx-auto relative z-10">

            {/* Section Header */}
            <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="text-center mb-20">
                <motion.div
                variants={itemVariants}
                className="font-mono text-xs uppercase tracking-[0.3em] text-blue-500 mb-4">
                    <DecryptedText text="// 04 — Featured Work" animateOn="view" sequential speed={35} encryptedClassName="opacity-60" />
                </motion.div>

                <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-5xl font-light mb-6">
                    Recent
                    <span className="text-blue-500 font-medium"> Projects </span>
                </motion.h2>
                <motion.p
                variants={itemVariants}
                className={`text-lg ${isDrakeMode ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto font-light`}>
                    AI systems I built, then tested to prove whether they actually work — with the numbers, confidence intervals and limitations to back them up.
                </motion.p>
            </motion.div>

            {/* Projects Grid: 2 large cards, then 3 smaller */}
            <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
                {
                    PROJECTS.map((project, index) => (
                        <div key={project.id} className={index < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
                            <ProjectCard
                            project={project}
                            large={index < 2}
                            isDrakeMode={isDrakeMode}
                            />
                        </div>
                    ))
                }
            </motion.div>

        </div>

    </section>
};

export default ProjectsSection;