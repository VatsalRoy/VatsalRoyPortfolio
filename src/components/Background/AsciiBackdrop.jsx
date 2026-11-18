import { useTheme } from '../../context/ThemeContext';
import GradientASCII from '../reactbits/GradientASCII';

// Gradient ASCII background shared by Contact + Footer.
// "rise" shape glows up from the bottom, so the page ends on light.
const AsciiBackdrop = ({ children }) => {
    const { isDrakeMode } = useTheme();
    const base = isDrakeMode ? '#03050d' : '#f5f8ff';

    return (
        // overflow-clip (not overflow-hidden), or the sticky background stops following the scroll
        <div className={`relative overflow-clip ${isDrakeMode ? 'bg-[#03050d] text-white' : 'bg-[#f5f8ff] text-gray-900'}`}>
            <div className="absolute inset-0" aria-hidden="true">
                <div className="sticky top-0 h-screen w-full">
                    <GradientASCII
                        shape="rise"
                        colors={isDrakeMode
                            ? ['#1e3fd8', '#3b82f6', '#a5d8ff', '#38bdf8']
                            : ['#1e3fd8', '#3b82f6', '#93c5fd', '#38bdf8']}
                        cellSize={16}
                        density={0.8}
                        glow={0.25}
                        flow={0.6}
                        speed={0.7}
                        gradientOpacity={isDrakeMode ? 0.7 : 0.5}
                        lightMode={!isDrakeMode}
                        clickEffect="wave"
                    />
                    {/* Keep the top of the viewport calm for headings */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{ background: `linear-gradient(to bottom, ${base}e6 0%, ${base}99 25%, transparent 60%)` }}
                    />
                </div>
            </div>
            {/* Blend in from the Letter Glitch section above */}
            <div
                className="absolute inset-x-0 top-0 h-40 pointer-events-none z-[1]"
                style={{ background: `linear-gradient(to bottom, ${base}, transparent)` }}
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
};

export default AsciiBackdrop;