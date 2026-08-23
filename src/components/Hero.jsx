import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { personal } from "../data/portfolioData";
import headshot from "../assets/headshot.png";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Subtle background grid — slightly more visible in light mode */}
      <div className="absolute inset-0 opacity-[0.06] dark:opacity-[0.05]" style={{
        backgroundImage: `linear-gradient(to right, #c17f4a 1px, transparent 1px), linear-gradient(to bottom, #c17f4a 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      {/* Ambient color blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-dark/10 rounded-full blur-3xl pointer-events-none" />

      {/* Large decorative numeral — more visible in light mode */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 font-display text-[20rem] leading-none text-ink-200 dark:text-ink-900 select-none pointer-events-none hidden lg:block">
        01
      </div>

      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        <div className="flex-1">
          <motion.span {...fadeUp(0.1)} className="font-mono text-xs tracking-[0.2em] uppercase text-amber-600 mb-3 block">
            Hello — I'm
          </motion.span>

          <motion.h1 {...fadeUp(0.2)} className="font-display text-6xl md:text-8xl text-ink-900 dark:text-ink-50 leading-[0.95] mb-6">
            {personal.name.split(" ")[0]}
            <br />
            {/* Fixed: was ink-400 in light — too washed out */}
            <span className="italic bg-gradient-to-r from-amber-600 via-accent to-accent-dark bg-clip-text text-transparent">
              {personal.name.split(" ")[1]}
            </span>
          </motion.h1>

          <motion.div {...fadeUp(0.35)} className="w-12 h-px bg-amber-600/50 my-6" />

          <motion.p {...fadeUp(0.4)} className="font-mono text-sm text-amber-600 mb-2">
            {personal.role}
          </motion.p>

          {/* Fixed: was ink-600 in light — too faint */}
          <motion.p {...fadeUp(0.5)} className="max-w-lg text-ink-700 dark:text-ink-400 text-lg leading-relaxed mb-10">
            {personal.tagline}
          </motion.p>

          <motion.div {...fadeUp(0.6)} className="flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-600 to-accent-dark text-white font-medium text-sm rounded-sm hover:brightness-110 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-amber-600/30">
              View Projects <ArrowDown size={15} />
            </a>
            <a href={personal.resumeUrl} download className="inline-flex items-center gap-2 px-6 py-3 border border-ink-400 dark:border-ink-700 text-ink-700 dark:text-ink-300 font-medium text-sm rounded-sm hover:border-amber-600 hover:text-amber-600 dark:hover:text-amber-500 transition-all duration-200 hover:-translate-y-0.5">
              <Download size={15} /> Resume
            </a>
            <div className="flex items-center gap-3 ml-2">
              {/* Fixed: borders were ink-200 (invisible in light) → ink-400 */}
              <a href={personal.links.github} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-ink-400 dark:border-ink-800 rounded-sm text-ink-600 dark:text-ink-500 hover:text-amber-600 hover:border-amber-600 transition-all">
                <GithubIcon size={16} />
              </a>
              <a href={personal.links.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-ink-400 dark:border-ink-800 rounded-sm text-ink-600 dark:text-ink-500 hover:text-amber-600 hover:border-amber-600 transition-all">
                <LinkedinIcon size={16} />
              </a>
              <a href="https://leetcode.com/u/chirag_gupta_/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-ink-400 dark:border-ink-800 rounded-sm text-ink-600 dark:text-ink-500 hover:text-amber-600 hover:border-amber-600 transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative shrink-0"
        >
          {/* Ambient glow */}
          <div className="absolute inset-0 -m-4 rounded-full bg-amber-500/20 blur-2xl scale-90 animate-pulse-slow" />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-amber-600/40 shadow-xl shadow-ink-900/10 dark:shadow-black/30"
          >
            <img src={headshot} alt={personal.name} className="w-full h-full object-cover" />
          </motion.div>
          {/* Orbiting accent dot */}
          <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-500 border-2 border-ink-50 dark:border-ink-950" />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] tracking-widest text-ink-500 dark:text-ink-400 uppercase">scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-amber-600/60 to-transparent" />
      </motion.div>
    </section>
  );
}
