import { useDarkMode } from "./hooks/useDarkMode";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [dark, setDark] = useDarkMode();
  return (
    <div className={dark ? "dark" : ""}>
      <div className="bg-ink-50 dark:bg-ink-950 min-h-screen">
        <Navbar dark={dark} setDark={setDark} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
