import React from "react";

const Project = ({ val, setView }) => {
  return (
    <li>
      <div>
        <img src={val.image} alt="" />
        <div className="content">
          <h3>{val.name}</h3>
          <p>{val.desc}</p>
          <div className="techs">
            {val.techs.map((val2) => (
              <span>
                <i class={val2.class} style={{ color: val2.color }}></i>{" "}
                {val2.name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className={val.code && "bottom1"}>
          <a href={val.live} className="btn2" target="_blank">
            <i className="fas fa-external-link-alt"></i> View Live
          </a>
          {val.code && (
            <a href={val.code} className="btn2" target="_blank">
              <i className="fab fa-github"></i> View Code
            </a>
          )}
        </div>
        {val.preview && (
          <div className="bottom2" onClick={() => setView(val.preview)}>
            <a href="#!" className="btn2">
              <i className="fas fa-play"></i> Preview (GIF)
            </a>
          </div>
        )}
      </div>
    </li>
  );
};

export default Project;
