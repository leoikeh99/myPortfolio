import React from "react";
import av from "../images/profilepic.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="content">
          <h2>ABOUT ME</h2>
          <p>FULLSTACK DEVELOPER</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            maiores cupiditate veritatis a provident voluptates possimus
            blanditiis iusto magni, temporibus nisi beatae ut illo ex!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            maiores cupiditate veritatis a provident voluptates possimus
            blanditiis iusto magni, temporibus nisi beatae ut illo ex!
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
