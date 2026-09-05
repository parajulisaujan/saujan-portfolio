import { ArrowUpRight, GraduationCap } from "lucide-react";
import { experience } from "@/data/experience";
import { skills } from "@/data/skills";
import { education, site } from "@/data/site";
import { involvement } from "@/data/involvement";
import SectionHeading from "./SectionHeading";

export function About() {
  return (
    <section className="section about-section" id="about">
      <SectionHeading number="01" title="About" />
      <div className="about-copy">
        <p>
          I’m a recent Computer Science graduate from the University of Texas at
          Arlington with hands-on project experience in AI applications,
          relational data workflows, and backend development.
        </p>
        <p>
          My work emphasizes breaking down problems, testing integrations, and
          debugging across components. Independent projects and collaborative
          Senior Design work have strengthened both my technical skills and my
          ability to learn unfamiliar tools.
        </p>
        <a
          className="text-link"
          href={site.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          View GitHub profile <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}
export function Experience() {
  return (
    <section className="section" id="experience">
      <SectionHeading
        number="03"
        title="Experience"
        subtitle="Technical support and customer-facing business experience."
      />
      <div className="experience-list">
        {experience.map((job) => (
          <article className="experience-row" key={job.title}>
            <div className="experience-date">
              <span>{job.period}</span>
              <span>{job.location}</span>
            </div>
            <div>
              <h3>{job.title}</h3>
              <p className="company">{job.company}</p>
              <ul>
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading
        number="04"
        title="Technical skills"
        subtitle="Core project technologies, supported by additional programming experience."
      />
      <div className="skills-grid">
        {skills.map((group) => (
          <article key={group.name}>
            <h3>{group.name}</h3>
            <p>{group.items.join(" · ")}</p>
            {group.additional && (
              <p className="additional-skills">
                Additional: {group.additional.join(" · ")}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
export function Education() {
  return (
    <section className="section" id="education">
      <SectionHeading number="05" title="Education" />
      <div className="education-card">
        <div className="education-main">
          <span className="education-icon">
            <GraduationCap size={28} />
          </span>
          <div>
            <p className="eyebrow">{education.date}</p>
            <h3>{education.institution}</h3>
            <p>{education.degree}</p>
            <ul className="honors">
              {education.honors.map((honor) => (
                <li key={honor}>{honor}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="coursework">
          <h4>Selected coursework</h4>
          <p>{education.courses.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}
export function Involvement() {
  return (
    <section className="section" id="involvement">
      <SectionHeading number="06" title="Community & involvement" />
      <div className="involvement-grid">
        {involvement.map((item) => (
          <article key={item.title}>
            <p className="eyebrow">{item.role}</p>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
