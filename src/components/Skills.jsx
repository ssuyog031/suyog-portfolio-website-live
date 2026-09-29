import { skillGroups } from "../data/content.js";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-head">
          <span className="section-index">02</span>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="card skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
