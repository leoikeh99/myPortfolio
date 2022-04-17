import React from "react";
import redux from "../images/redux.svg";
import nextjs from "../images/nextjs.svg";
import st from "../images/st.svg";
import tailwind from "../images/tailwindcss.svg";

const MyTools = () => {
  return (
    <section id="myTools">
      <div className="container">
        <h2>My Tools</h2>
        <ul className="animation-block">
          <li>
            <i class="fab fa-html5" style={{ color: "#E34C26" }}></i>
            <div className="name">HTML5</div>
          </li>
          <li>
            <i class="fab fa-css3" style={{ color: "#264DE4" }}></i>
            <div className="name">CSS3</div>
          </li>
          <li>
            <i class="fab fa-js" style={{ color: "#F0DB4F" }}></i>
            <div className="name">JAVASCRIPT</div>
          </li>
          <li>
            <i class="fab fa-react" style={{ color: "#61DBFB" }}></i>
            <div className="name">REACTJS</div>
          </li>
          <li>
            <i class="fab fa-node" style={{ color: "#68A063" }}></i>
            <div className="name">NodeJS</div>
          </li>

          <li>
            <img src={redux} alt="" />
            <div className="name">REDUX</div>
          </li>
          <li>
            <img src={nextjs} alt="" />
            <div className="name">Next Js</div>
          </li>
          <li>
            <img src={st} alt="" />
            <div className="name">Styled Components</div>
          </li>
          <li>
            <img src={tailwind} alt="" />
            <div className="name">Tailwind Css</div>
          </li>
          <li>
            <i class="fab fa-sass" style={{ color: "#CD6799" }}></i>
            <div className="name">Sass (scss)</div>
          </li>
          <li>
            <i class="fas fa-database" style={{ color: "#4DB33D" }}></i>
            <div className="name">MongoDb</div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default MyTools;
