import React from "react";

const WhatIdo = () => {
  return (
    <section id="whatIdo" className="whatIdo">
      <h2>WHAT I DO</h2>

      <ul>
        <li>
          <div className="icon">
            <i className="fas fa-mobile"></i>
          </div>
          <div className="content">
            <h3>Responsive Layout</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, optio temporibus.
            </p>
          </div>
        </li>
        <li>
          <div className="icon">
            <i className="fas fa-laptop"></i>
          </div>
          <div className="content">
            <h3>Frontend Develoment</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, optio temporibus.
            </p>
          </div>
        </li>
        <li>
          <div className="icon">
            <i className="fas fa-cogs"></i>
          </div>
          <div className="content">
            <h3>Backend Develoment</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, optio temporibus. Excepturi, aliquam.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default WhatIdo;
