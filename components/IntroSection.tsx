import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Github,
  Linkedin,
  MapPin,
} from "lucide-react";
import { education, site } from "@/data/site";

export default function IntroSection() {
  return (
    <section className="intro" aria-labelledby="intro-title">
      <div className="intro-main">
        <p className="eyebrow">AI APPLICATIONS · DATA · SOFTWARE</p>
        <h1 id="intro-title">{site.name}</h1>
        <p className="positioning">{site.positioning}</p>
        <p className="intro-copy">{site.introduction}</p>
        <div className="button-row">
          <a className="button primary" href="#projects">
            View Projects <ArrowDown size={16} />
          </a>
          <a
            className="button secondary"
            href={site.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText size={16} /> Resume
          </a>
          <a
            className="button quiet"
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={17} /> GitHub <ArrowUpRight size={14} />
          </a>
          {site.linkedin && (
            <a
              className="button quiet"
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} />
            </a>
          )}
        </div>
        <p className="location">
          <MapPin size={14} /> {site.location}
        </p>
      </div>
      <aside
        className="intro-credential"
        aria-label="Education and career focus"
      >
        <span className="credential-rule" />
        <p className="eyebrow">RECENT GRADUATE</p>
        <h2>B.S. Computer Science</h2>
        <p>{education.institution}</p>
        <p className="credential-honors">{education.date} · Cum Laude</p>
        <p className="credential-focus">
          Seeking new-graduate opportunities in software, backend, AI, and data.
        </p>
      </aside>
    </section>
  );
}
