import type { Metadata } from "next";
import Link from "next/link";
import { site, education } from "@/data/site";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";
import { resume } from "@/data/resume";

export const metadata: Metadata = {
  title: `Resume | ${site.name}`,
  alternates: { canonical: "/resume" },
  robots: { index: false, follow: true },
};
export default function Resume() {
  return (
    <>
      <div className="resume-toolbar">
        <Link href="/">← Portfolio</Link>
        <a href={site.resume} download>
          Download PDF ↓
        </a>
      </div>
      <main className="resume-page">
        <header>
          <h1>{site.name}</h1>
          <p className="resume-position">{site.positioning}</p>
          <div className="resume-contact">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>{site.location}</span>
            <a href={site.url}>saujanparajuli.com</a>
            <a href={site.github}>{site.github.replace("https://", "")}</a>
            {site.linkedin && (
              <a href={site.linkedin}>
                {site.linkedin.replace("https://www.", "")}
              </a>
            )}
          </div>
        </header>
        <section>
          <h2>Professional summary</h2>
          <p>{resume.summary}</p>
        </section>
        <section className="resume-skills">
          <h2>Technical skills</h2>
          {resume.skills.map((group) => (
            <p key={group.name}>
              <strong>{group.name}:</strong> {group.items.join(", ")}
            </p>
          ))}
        </section>
        <section>
          <h2>Selected projects</h2>
          {projects.slice(0, 4).map((project) => (
            <article key={project.name}>
              <div className="resume-row">
                <h3>{project.name}</h3>
                <div className="resume-project-actions">
                  {project.live && (
                    <a className="resume-project-link" href={project.live}>
                      Live Demo
                    </a>
                  )}
                  <a className="resume-project-link" href={project.code}>
                    GitHub
                  </a>
                </div>
              </div>
              <p className="resume-tech">
                {project.context} · {project.technologies.join(", ")}
              </p>
              {project.role && (
                <p>
                  <strong>{project.role}</strong>
                </p>
              )}
              {project.note && (
                <p>
                  <strong>{project.note}</strong>
                </p>
              )}
              <ul>
                {project.highlights
                  .slice(0, project.name === "StudyAI" ? 3 : 2)
                  .map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
              </ul>
            </article>
          ))}
        </section>
        <section>
          <h2>Experience</h2>
          {experience.map((job) => (
            <article key={job.title}>
              <div className="resume-row">
                <h3>
                  {job.title} · {job.company}
                </h3>
                <span>{job.period}</span>
              </div>
              <ul>
                {(job.title === "IT Support Assistant"
                  ? [job.bullets[0], `${job.bullets[1]} ${job.bullets[2]}`]
                  : job.bullets
                ).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>
        <section>
          <h2>Education</h2>
          <div className="resume-row">
            <h3>{education.institution}</h3>
            <span>{education.date}</span>
          </div>
          <p>
            {education.degree} · {education.honors.join(" · ")}
          </p>
        </section>
      </main>
    </>
  );
}
