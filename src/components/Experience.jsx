import { experience } from "../data/content.js";

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-head">
          <span className="section-index">03</span>
          <h2 className="section-title">Experience</h2>
        </div>

        <div className="experience-list">
          {experience.map((job) => (
            <div className="card experience-card" key={job.title + job.period}>
              <div className="experience-period">{job.period}</div>
              <h3 className="experience-title">{job.title}</h3>
              <div className="experience-org">
                {job.org}
                {job.meta ? ` · ${job.meta}` : ""}
              </div>
              <ul className="experience-points">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
