// src/components/Footer.jsx
import { personal } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-ink-200 dark:border-ink-800 bg-ink-100/50 dark:bg-ink-900/50">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-display text-lg text-ink-400 dark:text-ink-600">
          {personal.name.split(" ")[0]}<span className="text-accent">.</span>
        </span>
        <p className="font-mono text-xs text-ink-400 dark:text-ink-600 text-center">
          Designed & built by Chirag Gupta — {new Date().getFullYear()}
        </p>
        <a
          href="#hero"
          className="font-mono text-xs text-ink-400 hover:text-accent transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
