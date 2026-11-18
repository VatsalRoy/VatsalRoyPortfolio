import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';
import SpotlightCard from './reactbits/SpotlightCard';

const ProjectCard = ({ project, isDrakeMode }) => {
    const [expanded, setExpanded] = useState(false);
    const hasLive = project.linkUrl && project.linkUrl !== '#';

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    // "lakehouse-sql-eval — Does a Semantic Layer…" → name + tagline
    const [name, ...rest] = project.title.split(' — ');
    const tagline = rest.join(' — ');

    return (
        <motion.div variants={cardVariants} whileHover={{ y: -6 }} transition={{ duration: 0.3 }} className="group h-full">
            <SpotlightCard
                theme={isDrakeMode ? 'dark' : 'light'}
                spotlightColor="rgba(56, 189, 248, 0.2)"
                className={`h-full flex flex-col !p-0 rounded-2xl overflow-hidden border ${isDrakeMode ? 'bg-[#060a18]/75 border-white/10' : 'bg-white/80 border-gray-200'} backdrop-blur-md`}
            >
                {/* Image (box matches the 800×460 card artwork, so nothing is cropped) */}
                <div className="relative overflow-hidden aspect-[800/460] bg-[#0b1020]">
                    <img
                        src={project.image}
                        alt={name}
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between gap-3 mb-2">
                        <span className="font-mono text-xs text-blue-500">{name}</span>
                        <span className={`font-mono text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border ${isDrakeMode ? 'border-sky-400/30 text-sky-300 bg-sky-400/5' : 'border-blue-300 text-blue-700 bg-blue-50'}`}>
                            {project.category}
                        </span>
                    </div>
                    <h3 className={`text-xl font-medium leading-snug mb-3 transition-colors group-hover:text-blue-500 ${isDrakeMode ? 'text-white' : 'text-gray-900'}`}>
                        {tagline || name}
                    </h3>

                    <p className={`text-sm leading-relaxed ${expanded ? '' : 'line-clamp-4'} ${isDrakeMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {project.description}
                    </p>
                    <button
                        onClick={() => setExpanded((v) => !v)}
                        className="self-start mt-2 mb-5 font-mono text-xs uppercase tracking-wider text-blue-500 hover:text-sky-400"
                    >
                        {expanded ? '− Show less' : '+ Read more'}
                    </button>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className={`text-xs px-3 py-1 rounded-full border ${isDrakeMode ? 'bg-white/[0.03] border-white/10 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-700'}`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-auto flex gap-3">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${isDrakeMode ? 'border-white/15 text-gray-200 hover:bg-white/10' : 'border-gray-300 text-gray-800 hover:bg-gray-100'}`}
                        >
                            <FiGithub size={15} /> Code
                        </a>
                        {hasLive && (
                            <a
                                href={project.linkUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                            >
                                Live <ArrowUpRight size={15} />
                            </a>
                        )}
                    </div>
                </div>
            </SpotlightCard>
        </motion.div>
    );
};

export default ProjectCard;