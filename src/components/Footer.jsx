import { useEffect, useRef, useState } from "react";
import { profile } from "../data/content.js";

export default function Footer() {
  const year = new Date().getFullYear();
  const [visitCount, setVisitCount] = useState(null);
  const requestStarted = useRef(false);

  useEffect(() => {
    if (requestStarted.current) return;
    requestStarted.current = true;

    fetch("https://api.counterapi.dev/v1/suyog-portfolio/visits/up")
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load visit count");
        return response.json();
      })
      .then((data) => {
        const count = Number(data.count);
        if (!Number.isFinite(count)) throw new Error("Invalid visit count");
        setVisitCount(count);
      })
      .catch(() => setVisitCount("Unavailable"));
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span>
            © {year} {profile.name}
          </span>
          <span className="footer-visits" aria-live="polite">
            Site visits <strong>
              {visitCount === null
                ? "Loading..."
                : typeof visitCount === "number"
                  ? visitCount.toLocaleString()
                  : visitCount}
            </strong>
          </span>
          <span>Built with React</span>
        </div>
      </div>
    </footer>
  );
}
