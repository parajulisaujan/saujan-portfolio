import Navbar from "@/components/Navbar";
import IntroSection from "@/components/IntroSection";
import Projects from "@/components/Projects";
import {
  About,
  Education,
  Experience,
  Involvement,
  Skills,
} from "@/components/Background";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="container">
        <IntroSection />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Involvement />
        <Contact />
      </main>
    </div>
  );
}
