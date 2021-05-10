import React, { useEffect, useState } from "react";
import Project from "./Project";
import Preview from "./Preview";
const projects = require("../projects.json");

const Portfolio = () => {
  useEffect(() => {
    console.log(projects);
  }, []);

  const [preview, setView] = useState(false);
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <ul>
        {projects.map((val) => (
          <Project val={val} setView={setView} />
        ))}
      </ul>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <a
          href="https://github.com/leoikeh99?tab=repositories"
          target="_blank"
          className="btn2"
          style={{ maxWidth: "300px" }}
        >
          <i className="fab fa-github"></i>
          View All Projects
        </a>
      </div>
      {preview && <Preview gif={preview} setView={setView} />}
    </section>
  );
};

export default Portfolio;
