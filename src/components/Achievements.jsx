// src/components/Achievements.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { achievements } from "../data/portfolioData";
import { Award, ExternalLink } from "lucide-react";

export default function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements">
      <div className="section-wrapper">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Open Source & Achievements</span>
          <h2 className="section-title">Achievements</h2>
          <div className="w-12 h-px bg-accent/50 my-6" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 mt-4">
          {achievements.map((a, i) => {
            const singleLink = a.link && !a.links;
            const Wrapper = singleLink ? "a" : "div";
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Wrapper
                  {...(singleLink ? { href: a.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-start gap-4 bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-sm p-5
                    hover:border-amber-500/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink-900/5 dark:hover:shadow-black/20
                    transition-all duration-300"
                >
                  <div className="shrink-0 w-9 h-9 rounded-sm flex items-center justify-center bg-accent/10 border border-accent/30 text-accent">
                    <Award size={16} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-body font-medium text-ink-900 dark:text-ink-100 text-sm">
                        {a.title}
                      </h3>
                      {singleLink && (
                        <ExternalLink size={12} className="text-ink-400 dark:text-ink-600 group-hover:text-amber-600 transition-colors" />
                      )}
                    </div>
                    <p className="mt-1 text-sm text-ink-600 dark:text-ink-400 leading-relaxed">{a.detail}</p>
                    {a.links && (
                      <div className="mt-2 flex flex-wrap gap-4">
                        {a.links.map((l) => (
                          <a
                            key={l.url}
                            href={l.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-500 dark:text-ink-400 hover:text-amber-600 dark:hover:text-amber-500 transition-colors"
                          >
                            <ExternalLink size={12} /> {l.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
