import { GithubIcon } from "./Icons";
import { ExternalLink, Bot, Dog, Database } from "lucide-react";

const ICONS = {
  SIVP: Bot,
  Home4Paws: Dog,
  NanoBase: Database,
};

export default function ProjectCard({ project, index }) {
  const Icon = ICONS[project.title] || Bot;

  return (
    <article className="group relative bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-sm overflow-hidden
      hover:border-amber-500/40 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-ink-900/10 dark:hover:shadow-black/30
      transition-all duration-500 ease-out">

      {/* Gradient banner */}
      <div className="relative h-28 overflow-hidden bg-gradient-to-br from-ink-900 via-ink-800 to-accent-dark dark:from-ink-950 dark:via-ink-900 dark:to-accent-dark">
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500" style={{
          backgroundImage: `linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }} />
        <span className="font-mono text-6xl font-medium text-white/10 absolute -bottom-3 right-4 select-none group-hover:text-white/[0.15] transition-colors duration-500">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="absolute top-1/2 left-6 -translate-y-1/2 w-11 h-11 rounded-sm bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-white/15 transition-all duration-500">
          <Icon size={20} />
        </div>
      </div>

      <div className="relative p-7">
        <p className="font-mono text-[10px] tracking-[0.15em] uppercase text-amber-600 mb-2">{project.subtitle}</p>
        <h3 className="font-display text-2xl text-ink-900 dark:text-ink-50 mb-3 group-hover:text-amber-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-ink-600 dark:text-ink-400 text-sm leading-relaxed mb-5">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 bg-ink-50 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 text-ink-500 dark:text-ink-400 text-xs font-mono rounded-sm">
              {t}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-4">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-500 dark:text-ink-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors">
              <GithubIcon size={13} /> Source
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-500 dark:text-ink-400 hover:text-amber-600 transition-colors">
              <ExternalLink size={13} /> {project.demoLabel || "Live Demo"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
