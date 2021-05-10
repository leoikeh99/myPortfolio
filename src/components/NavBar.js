import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [active, setActive] = useState("home");
  useEffect(() => {
    const ids = ["whatIdo", "myTools", "about"];
    var prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
      ids.forEach((id) => {
        const element = document.getElementById(id);
        const top = element.getBoundingClientRect().top;
        const bottom = element.getBoundingClientRect().bottom;
        const height = window.innerHeight - 70;
        if (top <= height && bottom > 0) {
          document
            .querySelector(`#${id} .animation-block`)
            .classList.add("animate");
        } else {
          document
            .querySelector(`#${id} .animation-block`)
            .classList.remove("animate");
        }
      });

      if (window.pageYOffset > prevScrollpos) {
        document.getElementsByTagName("nav")[0].style.top = "0";
      } else {
        document.getElementsByTagName("nav")[0].style.top = "-200px";
      }
      if (
        window.pageYOffset >=
        document.getElementById("intro").offsetTop - 5
      ) {
        setActive("home");
      }
      if (
        window.pageYOffset >=
        document.getElementById("whatIdo").offsetTop - 5
      ) {
        setActive("wid");
      }
      if (
        window.pageYOffset >=
        document.getElementById("myTools").offsetTop - 5
      ) {
        setActive("mt");
      }
      if (
        window.pageYOffset >=
        document.getElementById("portfolio").offsetTop - 5
      ) {
        setActive("port");
      }
      if (
        window.pageYOffset >=
        document.getElementById("about").offsetTop - 5
      ) {
        setActive("abt");
      }
      if (
        window.pageYOffset >=
          document.getElementById("contact").offsetTop - 5 ||
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      ) {
        setActive("ct");
      }
    };
  }, []);

  const show = () => {
    document.querySelector("nav ul").classList.add("show");
    document.querySelector("nav .overlay").style.display = "block";
    document.querySelector("nav .close").style.display = "block";
    document.querySelector("nav .menu").style.opacity = "0";
  };

  const close = () => {
    document.querySelector("nav ul").classList.remove("show");
    document.querySelector("nav .overlay").style.display = "none";
    document.querySelector("nav .close").style.display = "none";
    document.querySelector("nav .menu").style.opacity = "1";
  };
  return (
    <nav id="nav">
      <div className="overlay"></div>
      <div className="close" onClick={close}>
        <i className="fas fa-times"></i>
      </div>
      <div className="container">
        <h1 className="title">Leonard</h1>

        <ul>
          <li>
            <a href="#intro" className={active === "home" ? "active" : null}>
              HOME
            </a>
          </li>
          <li>
            <a href="#whatIdo" className={active === "wid" ? "active" : null}>
              WHAT I DO
            </a>
          </li>
          <li>
            <a href="#myTools" className={active === "mt" ? "active" : null}>
              MY TOOLS
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className={active === "port" ? "active" : null}
            >
              PORTFOLIO
            </a>
          </li>
          <li>
            <a href="#about" className={active === "abt" ? "active" : null}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#contact" className={active === "ct" ? "active" : null}>
              CONTACT
            </a>
          </li>
        </ul>

        <div className="menu" onClick={show}>
          <i className="fas fa-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
