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
      {preview && <Preview gif={preview} setView={setView} />}
    </section>
  );
};

export default Portfolio;
