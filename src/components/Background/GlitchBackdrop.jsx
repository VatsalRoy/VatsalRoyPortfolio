import { useTheme } from '../../context/ThemeContext';
import LetterGlitch from '../reactbits/LetterGlitch';

// One Letter Glitch canvas shared by every section below the hero.
// It sticks to the viewport while the sections scroll over it.
const GlitchBackdrop = ({ children }) => {
    const { isDrakeMode } = useTheme();

    return (
        <div className={`relative ${isDrakeMode ? 'bg-[#03050d] text-white' : 'bg-[#f5f8ff] text-gray-900'}`}>
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="sticky top-0 h-screen w-full">
                    <LetterGlitch
                        glitchColors={isDrakeMode ? ['#1e3a8a', '#2563eb', '#38bdf8'] : ['#93c5fd', '#60a5fa', '#bae6fd']}
                        baseOpacity={isDrakeMode ? 0.2 : 0.22}
                        glitchAmount={0.45}
                        speed={0.6}
                        fontSize={14}
                        smooth
                        interactive
                        cursorRadius={160}
                        edgeFade={0.15}
                        centerFade={0.4}
                        intro={false}
                        lightMode={!isDrakeMode}
                    />
                    {/* Soft wash so text and cards stay readable */}
                    <div className={`absolute inset-0 ${isDrakeMode
                        ? 'bg-[radial-gradient(ellipse_at_center,rgba(3,5,13,0.6)_0%,rgba(3,5,13,0.25)_70%,rgba(3,5,13,0.05)_100%)]'
                        : 'bg-[radial-gradient(ellipse_at_center,rgba(245,248,255,0.85)_0%,rgba(245,248,255,0.5)_70%,rgba(245,248,255,0.25)_100%)]'}`}
                    />
                </div>
            </div>
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default GlitchBackdrop;