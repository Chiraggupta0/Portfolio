import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MessageCircle, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personal } from "../data/portfolioData";

const links = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: Mail },
  { label: "GitHub", value: "github.com/Chiraggupta0", href: personal.links.github, icon: GithubIcon },
  { label: "LinkedIn", value: "linkedin.com/in/chiragguptx", href: personal.links.linkedin, icon: LinkedinIcon },
  { label: "Phone-No", value: "+91 9927274277", href: personal.links.whatsapp, icon: MessageCircle },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}>
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-amber-600 mb-3 block">Get in touch</span>
          <h2 className="font-display text-4xl md:text-5xl text-ink-900 dark:text-ink-50">Contact</h2>
          <div className="w-12 h-px bg-amber-600/50 my-6" />
          <p className="text-ink-600 dark:text-ink-400 max-w-md leading-relaxed mb-10">
            Open to backend roles, internships, and interesting problems. If you think we'd work well together, reach out.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {links.map(({ label, value, href, icon: Icon }, i) => (
            <motion.a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 p-4 bg-white dark:bg-ink-900 border border-ink-200 dark:border-ink-800 rounded-sm group hover:border-amber-500/50 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200">
              <div className="w-9 h-9 flex items-center justify-center bg-ink-50 dark:bg-ink-800 rounded-sm text-ink-500 group-hover:bg-amber-600/10 group-hover:text-amber-600 transition-all">
                <Icon size={16} />
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-ink-400 dark:text-ink-600">{label}</p>
                <p className="text-sm text-ink-700 dark:text-ink-300 group-hover:text-amber-600 transition-colors">{value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
          <a href={personal.resumeUrl} download
            className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white font-medium text-sm rounded-sm hover:bg-amber-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-amber-600/20">
            <Download size={15} /> Download Resume
          </a>
        </motion.div> */}
      </div>
    </section>
  );
}
