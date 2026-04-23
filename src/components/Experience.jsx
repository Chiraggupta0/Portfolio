// src/components/Experience.jsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience } from "../data/portfolioData";
import { Briefcase, GraduationCap } from "lucide-react";

function TimelineItem({ item, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10 pb-10 last:pb-0"
    >
      {/* Vertical line */}
      <div className="absolute left-3 top-5 bottom-0 w-px bg-ink-200 dark:bg-ink-800 last:hidden" />

      {/* Dot */}
      <div className={`absolute left-0 top-1 w-6 h-6 rounded-sm flex items-center justify-center
        ${item.type === "work"
          ? "bg-accent/10 border border-accent/30 text-accent"
          : "bg-ink-100 dark:bg-ink-800 border border-ink-200 dark:border-ink-700 text-ink-500"
        }`}>
        {item.type === "work" ? <Briefcase size={11} /> : <GraduationCap size={11} />}
      </div>

      {/* Content */}
      <div className="group">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <div>
            <h3 className="font-body font-medium text-ink-900 dark:text-ink-100 text-base">
              {item.role}
            </h3>
            <p className="font-mono text-xs text-accent">{item.company}</p>
          </div>
          <span className="font-mono text-xs text-ink-400 dark:text-ink-600 whitespace-nowrap mt-0.5">
            {item.period}
          </span>
        </div>

        <ul className="mt-3 space-y-1.5">
          {item.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-ink-600 dark:text-ink-400">
              <span className="text-accent mt-1.5 shrink-0 text-[8px]">◆</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const work = experience.filter((e) => e.type === "work");
  const edu = experience.filter((e) => e.type === "education");

  return (
    <section id="experience" className="bg-ink-100/50 dark:bg-ink-900/50">
      <div className="section-wrapper">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Background</span>
          <h2 className="section-title">Experience & Education</h2>
          <div className="w-12 h-px bg-accent/50 my-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mt-4">
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-ink-400 dark:text-ink-600 mb-6">
              Work
            </p>
            {work.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} inView={inView} />
            ))}
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-ink-400 dark:text-ink-600 mb-6">
              Education
            </p>
            {edu.map((item, i) => (
              <TimelineItem key={item.id} item={item} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
