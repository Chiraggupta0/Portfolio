// src/components/About.jsx
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { personal, skills } from "../data/portfolioData";
import { Code2, Briefcase, GraduationCap } from "lucide-react";

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

// Skill category icons (simple inline SVGs to avoid deps)
const categoryIcons = {
  Languages: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  Backend: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  "Data Stores": (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" /><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  Infrastructure: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  ),
  Systems: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
    </svg>
  ),
};

export default function About() {
  return (
    <section id="about" className="relative bg-ink-100/50 dark:bg-ink-900/50 overflow-hidden">
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="section-wrapper py-20 lg:py-28 relative">

        {/* Header */}
        <FadeIn>
          <div className="flex items-center gap-4 mb-3">
            <span className="section-label tracking-[0.2em] text-accent/80 font-mono text-xs uppercase">
              Who I am
            </span>
            <div className="flex-1 h-px bg-ink-200/40 dark:bg-ink-700/40" />
          </div>
          <h2 className="section-title text-4xl lg:text-5xl font-bold mb-2">About Me</h2>
          <div className="w-10 h-0.5 bg-accent mt-5 mb-10 rounded-full" />
        </FadeIn>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── Left: Bio ── */}
          <FadeIn delay={0.1}>
            <div className="space-y-6">
              {/* Pull-quote highlight */}
              <div className="border-l-2 border-accent pl-5">
                <p className="text-ink-800 dark:text-ink-200 text-lg leading-relaxed font-medium">
                  {personal.shortBio}
                </p>
              </div>

              <p className="text-ink-600 dark:text-ink-400 leading-relaxed text-sm">
                {personal.longBio}
              </p>

              {/* Quick-stat row */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { value: "4+", label: "Years Coding", Icon: Code2 },
                  { value: "2", label: "Internships", Icon: Briefcase },
                  { value: "9.08", label: "CGPA", Icon: GraduationCap },
                ].map(({ value, label, Icon }) => (
                  <div
                    key={label}
                    className="group bg-white/60 dark:bg-ink-800/60 border border-ink-200/60 dark:border-ink-700/60
                               rounded-sm px-4 py-3 text-center hover:border-accent/50 hover:-translate-y-0.5
                               hover:shadow-lg hover:shadow-accent/5 transition-all duration-300"
                  >
                    <Icon size={14} className="text-accent/60 group-hover:text-accent mx-auto mb-1.5 transition-colors" />
                    <p className="font-mono text-accent text-xl font-bold leading-none">{value}</p>
                    <p className="font-mono text-ink-500 dark:text-ink-500 text-[10px] uppercase tracking-widest mt-1">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Contact line */}
              <div className="flex items-center gap-3 pt-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a
                  href={`mailto:${personal.email}`}
                  className="font-mono text-sm text-accent hover:underline underline-offset-4"
                >
                  {personal.email}
                </a>
              </div>
            </div>
          </FadeIn>

          {/* ── Right: Skills ── */}
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-400 dark:text-ink-600 mb-4">
                Technical Skills
              </p>

              {skills.map((group, i) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07 }}
                  className="group"
                >
                  {/* Category header */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="text-accent/70 group-hover:text-accent transition-colors">
                      {categoryIcons[group.category]}
                    </span>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-ink-500 dark:text-ink-500">
                      {group.category}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-white dark:bg-ink-800 border border-ink-200 dark:border-ink-700 
                                   text-ink-700 dark:text-ink-300 text-xs font-mono rounded-sm 
                                   hover:border-accent hover:text-accent hover:bg-accent/5
                                   transition-all duration-200 cursor-default whitespace-nowrap"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Separator (not after last) */}
                  {i < skills.length - 1 && (
                    <div className="mt-5 h-px bg-ink-200/30 dark:bg-ink-800/50" />
                  )}
                </motion.div>
              ))}
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
