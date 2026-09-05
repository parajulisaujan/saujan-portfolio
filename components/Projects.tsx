import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <SectionHeading
        number="02"
        title="Selected projects"
        subtitle="Hands-on work across AI applications, data analysis, and software development."
      />
      <div className="project-list">
        {projects.map((project, index) => (
          <article
            className={`project-card ${index === 4 ? "project-small" : ""}`}
            key={project.name}
          >
            <div className="project-overview">
              <p className="project-category">
                <span>0{index + 1}</span>
                {project.area}
              </p>
              <h3>{project.name}</h3>
              <p className="project-context">{project.context}</p>
              {project.role && <p className="project-role">{project.role}</p>}
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                {project.live && (
                  <a
                    className="button primary live-link"
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.name} live demo`}
                  >
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                )}
                <a
                  className="button secondary"
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} code on GitHub`}
                >
                  <Github size={16} />
                  {project.name === "StudyAI" ? "Team GitHub" : "GitHub"}
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
            <div className="project-detail">
              <p className="detail-label">
                {project.role ? "MY CONTRIBUTION" : "TECHNICAL HIGHLIGHTS"}
              </p>
              <ul className="project-highlights">
                {project.highlights.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
              <ul className="technologies" aria-label="Main technologies">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              {project.note && <p className="data-note">{project.note}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
