import React from "react";

const WhatIdo = () => {
  return (
    <section id="whatIdo" className="whatIdo">
      <h2>WHAT I DO</h2>

      <ul className="animation-block">
        <li>
          <div className="icon">
            <i className="fas fa-mobile"></i>
          </div>
          <div className="content">
            <h3>Responsive Layout</h3>
            <p>
              For me its just become a rule that any application i work on would
              be well accessible and responsive on all screen sizes.
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
              I love working on the front end, creating reuseable components and
              working with state management tools in order to make my code
              simple and understandable.
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
              I'm all about creating routes for api endpoints, writing secure
              authentication for users and routes and also creating an easy and
              understandable database schema.
            </p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default WhatIdo;
