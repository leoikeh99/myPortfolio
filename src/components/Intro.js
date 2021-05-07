import React, { useEffect, useState } from "react";

const About = () => {
  const [attr, setAttr] = useState("FRONTEND DEVELOPER");

  useEffect(() => {
    const attrs = [
      "FRONTEND DEVELOPER",
      "BACKEND DEVELOPER",
      "FULLSTACK DEVELOPER",
    ];

    const elemt = document.querySelector("#intro h2");
    var index = 0;
    setInterval(() => {
      if (index === 2) {
        index = 0;
      } else {
        index++;
      }
      elemt.style.opacity = "1";
      setTimeout(() => {
        elemt.style.opacity = "0";
      }, 1200);
      setAttr(attrs[index]);
    }, 1600);
  }, []);
  return (
    <section id="intro">
      <div className="content">
        <h1>Leonard Ikeh</h1>
        <h2>{attr}</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque
          quaerat a maxime inventore est autem eligendi error aut. Consectetur
          molestiae rem modi? Tempore, repudiandae dolor.
        </p>
        <a href="#whatIdo" className="btn">
          Get started
        </a>
      </div>

      <div className="overflow"></div>
    </section>
  );
};

export default About;
