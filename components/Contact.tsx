import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <>
      <section id="contact" className="contact-section">
        <div>
          <p className="eyebrow">CONTACT</p>
          <h2>Get in touch</h2>
          <p>
            Open to new-graduate roles in software, backend development, AI, and
            data. Please reach out to discuss opportunities or project work.
          </p>
        </div>
        <div className="contact-links">
          <a className="email-link" href={`mailto:${site.email}`}>
            <Mail size={21} />
            <span>{site.email}</span>
            <ArrowUpRight size={22} />
          </a>
          <div>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              <Github size={17} /> GitHub <ArrowUpRight size={15} />
            </a>
            {site.linkedin && (
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin size={17} /> LinkedIn <ArrowUpRight size={15} />
              </a>
            )}
            <a href={site.resume} target="_blank" rel="noopener noreferrer">
              Resume <ArrowUpRight size={15} />
            </a>
          </div>
          <p>{site.location}</p>
        </div>
      </section>
      <footer>
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>Computer Science · University of Texas at Arlington</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
