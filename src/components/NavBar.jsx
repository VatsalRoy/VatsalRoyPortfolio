import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Code2, Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';
import GooeyNav from './reactbits/GooeyNav';

const SECTIONS = ['Home', 'About', 'Skills', 'Work', 'Contact'];

const NavBar = () => {
    const { isDrakeMode, toggleDrakeMode } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [active, setActive] = useState(0);
    const [scrolled, setScrolled] = useState(false);
    const lockRef = useRef(0);

    // Thin progress line along the top
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

    // Scrollspy: highlight the section in the middle of the screen
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 24);
            if (Date.now() < lockRef.current) return;
            const mid = window.innerHeight * 0.4;
            let current = 0;
            SECTIONS.forEach((name, i) => {
                const el = document.getElementById(name.toLowerCase());
                if (el && el.getBoundingClientRect().top <= mid) current = i;
            });
            setActive(current);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    }, [isMenuOpen]);

    const goTo = (index) => {
        setActive(index);
        lockRef.current = Date.now() + 900; // don't let scrollspy fight the smooth scroll
        document.getElementById(SECTIONS[index].toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const toggleTheme = () => toggleDrakeMode(isDrakeMode ? 'light' : 'dark');

    const glass = isDrakeMode
        ? 'bg-[#060a18]/90 border-white/10 text-white'
        : 'bg-white/90 border-gray-200 text-gray-900';

    return (
        <>
            <motion.div style={{ scaleX: progress }} className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300" />

            <motion.header
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed inset-x-0 z-50 px-4 transition-all duration-300 ${scrolled ? 'top-3' : 'top-5'}`}
            >
                <nav className="max-w-6xl mx-auto flex items-center justify-between gap-3" aria-label="Main">
                    {/* Brand */}
                    <button
                        onClick={() => goTo(0)}
                        className={`flex items-center gap-2 rounded-full border px-4 py-2.5 backdrop-blur-xl transition-shadow ${glass} ${scrolled ? 'shadow-lg shadow-black/20' : ''}`}
                    >
                        <Code2 size={20} className="text-blue-500" />
                        <span className="font-medium">Vatsal Roy</span>
                        <span className="hidden sm:inline font-mono text-xs text-blue-500 animate-pulse">_</span>
                    </button>

                    {/* Center: React Bits Gooey Nav (desktop) */}
                    <div className="hidden md:block">
                        <GooeyNav
                            items={SECTIONS.map((label) => ({ label }))}
                            activeIndex={active}
                            onChange={(i) => goTo(i)}
                            theme={isDrakeMode ? 'dark' : 'light'}
                            color="#3b82f6"
                            activeTextColor="#ffffff"
                            colors={['#3b82f6', '#38bdf8', '#a5d8ff', '#1e3fd8']}
                            size="md"
                            frame
                        />
                    </div>

                    {/* Right: theme + CTA */}
                    <div className="flex items-center gap-2">
                        <motion.button
                            whileTap={{ scale: 0.92, rotate: 20 }}
                            onClick={toggleTheme}
                            aria-label={isDrakeMode ? 'Switch to light mode' : 'Switch to dark mode'}
                            className={`p-3 rounded-full border backdrop-blur-xl ${glass}`}
                        >
                            {isDrakeMode ? <Sun size={16} /> : <Moon size={16} />}
                        </motion.button>
                        <button
                            onClick={() => goTo(4)}
                            className="hidden lg:inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white transition-colors shadow-lg shadow-blue-500/25"
                        >
                            Let's talk <ArrowUpRight size={15} />
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            aria-label="Open menu"
                            className={`md:hidden p-3 rounded-full border backdrop-blur-xl ${glass}`}
                        >
                            <Menu size={16} />
                        </button>
                    </div>
                </nav>
            </motion.header>

            {/* Mobile: full-screen menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
                        animate={{ clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
                        exit={{ clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
                        transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                        className={`fixed inset-0 z-[70] flex flex-col px-6 pt-6 pb-10 ${isDrakeMode ? 'bg-[#03050d] text-white' : 'bg-[#f5f8ff] text-gray-900'}`}
                    >
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-2 font-medium"><Code2 size={20} className="text-blue-500" /> Vatsal Roy</span>
                            <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu" className={`p-3 rounded-full border ${glass}`}>
                                <X size={16} />
                            </button>
                        </div>

                        <ul className="mt-16 space-y-2">
                            {SECTIONS.map((label, i) => (
                                <motion.li
                                    key={label}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.15 + i * 0.06 }}
                                >
                                    <button onClick={() => goTo(i)} className="flex items-baseline gap-4 py-2 w-full text-left group">
                                        <span className="font-mono text-xs text-blue-500">0{i + 1}</span>
                                        <span className={`text-4xl font-light transition-colors ${active === i ? 'text-blue-500' : ''} group-hover:text-blue-500`}>{label}</span>
                                    </button>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="mt-auto flex items-center gap-3">
                            <a href="https://github.com/VatsalRoy" target="_blank" rel="noreferrer" aria-label="GitHub" className={`p-3 rounded-full border ${glass}`}><FiGithub size={18} /></a>
                            <a href="https://www.linkedin.com/in/vatsal-roy/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className={`p-3 rounded-full border ${glass}`}><FiLinkedin size={18} /></a>
                            <span className="ml-auto font-mono text-xs opacity-60">New York, NY</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default NavBar;