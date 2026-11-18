import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { useTheme } from '../../context/ThemeContext';
import { containerVariants, itemVariants } from '../../utils/helper';
import PROFILE_IMAGE from '../../assets/images/profile.jpg';

import GradientASCII from '../reactbits/GradientASCII';
import DecryptedText from '../reactbits/DecryptedText';
import TiltedCard from '../reactbits/TiltedCard';
import StarBorder from '../reactbits/StarBorder';

const SOCIALS = [
    { icon: FiGithub, href: 'https://github.com/VatsalRoy', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/vatsal-roy/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vatsal.roy2429@gmail.com', label: 'Email' },
];

const HeroSection = () => {
    const { isDrakeMode } = useTheme();

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    const muted = isDrakeMode ? 'text-gray-300' : 'text-gray-700';
    const faint = isDrakeMode ? 'text-gray-400' : 'text-gray-500';

    return (
        <section
            id="home"
            className={`relative min-h-screen flex items-center overflow-hidden ${isDrakeMode ? 'bg-[#03050d] text-white' : 'bg-[#f5f8ff] text-gray-900'}`}
        >
            {/* React Bits: Gradient ASCII background */}
            <div className="absolute inset-0">
                <GradientASCII
                    shape="horizon"
                    colors={isDrakeMode
                        ? ['#1e3fd8', '#3b82f6', '#a5d8ff', '#38bdf8']
                        : ['#1e3fd8', '#3b82f6', '#93c5fd', '#38bdf8']}
                    cellSize={16}
                    density={0.8}
                    glow={0.25}
                    flow={0.6}
                    speed={0.8}
                    gradientOpacity={isDrakeMode ? 0.85 : 0.55}
                    lightMode={!isDrakeMode}
                    clickEffect="wave"
                />
            </div>
            {/* Readability scrim on the text side */}
            <div
                className={`absolute inset-0 pointer-events-none ${isDrakeMode
                    ? 'bg-gradient-to-r from-[#03050d]/75 via-[#03050d]/25 to-transparent'
                    : 'bg-gradient-to-r from-[#f5f8ff]/90 via-[#f5f8ff]/55 to-transparent'}`}
            />

            <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pt-28 lg:pt-32 pb-24 grid lg:grid-cols-[1.25fr_0.75fr] gap-16 items-center">
                {/* Copy */}
                <motion.div initial="hidden" animate="visible" variants={containerVariants} className="text-center lg:text-left">
                    {/* Portrait — mobile & tablet (Tilted Card, smaller) */}
                    <motion.div variants={itemVariants} className="lg:hidden flex justify-center mb-8">
                        <TiltedCard
                            imageSrc={PROFILE_IMAGE}
                            altText="Vatsal Roy"
                            containerHeight="250px"
                            containerWidth="200px"
                            imageHeight="250px"
                            imageWidth="200px"
                            rotateAmplitude={12}
                            scaleOnHover={1.04}
                            showTooltip={false}
                            flipOnClick={false}
                            radius={24}
                            glare={0.35}
                        />
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-8 font-mono text-xs uppercase tracking-[0.2em] backdrop-blur-md ${isDrakeMode ? 'border-blue-400/30 bg-blue-500/10 text-blue-200' : 'border-blue-500/30 bg-white/60 text-blue-700'}`}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                        </span>
                        Open to FDE · AI · ML Engineer roles
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl xl:text-6xl font-light leading-[1.08] mb-8 tracking-tight">
                        <DecryptedText
                            text="Most LLM demos look great"
                            animateOn="view"
                            sequential
                            speed={30}
                            revealDirection="start"
                            useOriginalCharsOnly
                            parentClassName="block"
                            encryptedClassName="text-blue-400/70"
                        />
                        <DecryptedText
                            text="until someone checks the numbers."
                            animateOn="view"
                            sequential
                            speed={30}
                            revealDirection="start"
                            useOriginalCharsOnly
                            parentClassName="block font-medium bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300 bg-clip-text text-transparent"
                            className="text-transparent"
                            encryptedClassName="text-blue-400/70"
                        />
                    </motion.h1>

                    <motion.p variants={itemVariants} className={`text-lg md:text-xl font-light leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10 ${muted}`}>
                        I'm <span className={isDrakeMode ? 'text-white font-medium' : 'text-gray-900 font-medium'}>Vatsal Roy</span>, an AI/ML and Forward Deployed Engineer in New York.
                        I build AI systems, then prove whether they actually work.
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
                        <StarBorder
                            as="button"
                            onClick={() => scrollToSection('work')}
                            color="#38bdf8"
                            radius={999}
                            theme={isDrakeMode ? 'dark' : 'light'}
                            className="text-sm uppercase tracking-widest font-medium"
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1">
                                View Work <ArrowUpRight size={16} />
                            </span>
                        </StarBorder>
                        <motion.button
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => scrollToSection('contact')}
                            className={`px-8 py-4 rounded-full text-sm uppercase tracking-widest font-medium border backdrop-blur-md transition-colors ${isDrakeMode ? 'border-white/15 bg-white/5 text-gray-200 hover:bg-white/10' : 'border-gray-300 bg-white/60 text-gray-800 hover:bg-white'}`}
                        >
                            Get in Touch
                        </motion.button>
                    </motion.div>

                    <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-3">
                        {SOCIALS.map((s) => (
                            <motion.a
                                key={s.label}
                                href={s.href}
                                target={s.href.startsWith('http') ? '_blank' : undefined}
                                rel="noreferrer"
                                aria-label={s.label}
                                whileHover={{ y: -3 }}
                                className={`p-3 rounded-full border backdrop-blur-md transition-colors ${isDrakeMode ? 'border-white/10 text-gray-300 hover:text-white hover:bg-white/10' : 'border-gray-200 bg-white/60 text-gray-600 hover:text-gray-900'}`}
                            >
                                <s.icon size={18} />
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Portrait — desktop (React Bits: Tilted Card) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="hidden lg:flex flex-col items-center"
                >
                    <TiltedCard
                        imageSrc={PROFILE_IMAGE}
                        altText="Vatsal Roy"
                        containerHeight="420px"
                        containerWidth="340px"
                        imageHeight="420px"
                        imageWidth="340px"
                        rotateAmplitude={10}
                        scaleOnHover={1.04}
                        showTooltip={false}
                        flipOnClick={false}
                        radius={28}
                        glare={0.35}
                    />
                    <div className={`mt-6 font-mono text-xs uppercase tracking-[0.25em] ${faint}`}>
                        Python · Databricks · LangGraph · PyTorch
                    </div>
                </motion.div>
            </div>

            <motion.button
                onClick={() => scrollToSection('about')}
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-label="Scroll to About"
                className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 ${faint}`}
            >
                <ArrowDown size={20} />
            </motion.button>
        </section>
    );
};

export default HeroSection;