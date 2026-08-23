import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { personal } from "../data/portfolioData";
import { useActiveSection } from "../hooks/useActiveSection";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
const SECTION_IDS = ["hero", "about", "achievements", "projects", "experience", "contact"];

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 dark:bg-ink-950/90 backdrop-blur-md border-b border-ink-200/60 dark:border-ink-800/60" : "bg-transparent"
      }`}>
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-display text-xl text-ink-900 dark:text-ink-50 hover:text-amber-600 transition-colors">
          {personal.name}<span className="text-amber-600">.</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace("#", "");
            return (
              <a key={label} href={href}
                className={`text-sm transition-colors duration-200 relative group ${active === id ? "text-amber-600" : "text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-ink-100"
                  }`}>
                {label}
                <span className={`absolute -bottom-0.5 left-0 h-px bg-amber-600 transition-all duration-300 ${active === id ? "w-full" : "w-0 group-hover:w-full"}`} />
              </a>
            );
          })}
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => setDark(!dark)}
            className="w-9 h-9 flex items-center justify-center rounded-sm text-ink-500 dark:text-ink-400 hover:text-amber-600 dark:hover:text-amber-500 hover:bg-ink-100 dark:hover:bg-ink-800 transition-all"
            aria-label="Toggle dark mode">
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-sm text-ink-500 hover:bg-ink-100 dark:hover:bg-ink-800 transition-all">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-ink-950 border-b border-ink-200 dark:border-ink-800 px-6 pb-4">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm text-ink-700 dark:text-ink-300 hover:text-amber-600 transition-colors border-b border-ink-100 dark:border-ink-800 last:border-0">
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
