import { profile } from "../data/content.js";

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head">
          <span className="section-index">07</span>
          <h2 className="section-title">Contact</h2>
        </div>

        <div className="contact-grid">
          <div className="card contact-card">
            <div className="contact-field">
              <div className="contact-field-label">Email</div>
              <div className="contact-field-value">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </div>
            <div className="contact-field">
              <div className="contact-field-label">Phone</div>
              <div className="contact-field-value">
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                  {profile.phone}
                </a>
              </div>
            </div>
            <div className="contact-field">
              <div className="contact-field-label">LinkedIn</div>
              <div className="contact-field-value">
                <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">
                  {profile.linkedinHandle}
                </a>
              </div>
            </div>
            <div className="contact-field">
              <div className="contact-field-label">Location</div>
              <div className="contact-field-value">{profile.location}</div>
            </div>
          </div>

          <form className="card contact-card">
            <fieldset disabled>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your email</label>
                <input id="email" name="email" type="email" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={4} />
              </div>
              <button className="btn btn-primary" type="submit">
                Send message
              </button>
            </fieldset>
            <p className="form-status" role="status">
              The contact form is temporarily unavailable. Please email me at{" "}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
