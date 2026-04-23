import { GithubIcon } from "./Icons";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project, index }) {
  return (
    <article className="group relative bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-sm p-7
      hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/5 dark:hover:shadow-black/20
      transition-all duration-300">
      <span className="font-mono text-5xl font-medium text-ink-100 dark:text-ink-800 absolute top-5 right-6 select-none group-hover:text-amber-500/10 transition-colors">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="relative">
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
              <ExternalLink size={13} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
