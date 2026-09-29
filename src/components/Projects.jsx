import { projects } from "../data/content.js";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head">
          <span className="section-index">04</span>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects-list">
          {projects.map((project) => (
            <div className="card project-card" key={project.title}>
              <div>
                <div className="project-title">{project.title}</div>
                <p className="project-description">{project.description}</p>
              </div>
              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                Visit ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
