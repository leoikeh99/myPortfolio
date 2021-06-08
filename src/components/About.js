import React from "react";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container animation-block">
        <div className="content">
          <h2>ABOUT ME</h2>
          <p>FULLSTACK DEVELOPER</p>
          <p>
            I'm Leonard ikeh a fullstack web developer that works with MERN
            (Mongodb, ExpressJs, ReactJs and NodeJs) stack technologies, I love
            to build/create applications in a way that users find easy to use
            and also in a way that other developers can work with.
          </p>
          <p>
            I enjoy programming, building applicaations and working with new
            technologies.
          </p>
        </div>

        <div className="avatar">
          <div className="imgCover">
            <img
              src="https://devchallenges.io/_next/image?url=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F60815974%3Fv%3D4&w=750&q=75"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
