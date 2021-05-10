import React, { useEffect, useState } from "react";
import emailValidator from "email-validator";
import $ from "jquery";

const Contact = () => {
  const [val, setVal] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [validate, setValidate] = useState(null);
  const [status, setStatus] = useState(null);
  const [btnVal, setBtnVal] = useState("SEND ME");

  const sendMessage = (e) => {
    e.preventDefault();
    setStatus(null);
    var data = {
      access_token: "wcayxi4luodqd6hxfbxalaoa",
      subject: `Name: ${val.name}, Email: ${val.email}`,
      text: val.message,
    };

    const onSuccess = () => {
      setValidate(null);
      setStatus("Great, i will get back to you very soon.");
      setBtnVal("SEND ME");
    };
    const onError = (err) => console.log(err);

    if (val.name.trim() === "") {
      setValidate("Name is required");
    } else if (val.message.trim() === "") {
      setValidate("Message is required");
    } else if (!emailValidator.validate(val.email)) {
      setValidate("Invalid Email");
    } else {
      setBtnVal("Sending...");
      $.post("https://postmail.invotes.com/send", data, onSuccess).fail(
        onError
      );
    }
  };
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="info">
          <h2>CONTACT ME</h2>
          <p>
            <span className="icon">
              <i className="fas fa-phone"></i>
            </span>
            08094482648
          </p>
          <p>
            <span className="icon">
              <i className="fas fa-envelope"></i>
            </span>
            leoikeh99@gmail.com
          </p>
          <p>
            <span className="icon">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            8 Shofidiya, off Masha Surulere, Lagos.
          </p>

          <ul>
            <li>
              <a href="https://github.com/leoikeh99" target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/wazza_dev" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/leonard-ikeh-22367a209/"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
        <form action="" onSubmit={sendMessage}>
          {validate && (
            <div className="alert">
              <i className="fas fa-exclamation-circle"></i> {validate}
            </div>
          )}
          {status && (
            <div className="success">
              <i className="far fa-check-circle"></i> {status}
            </div>
          )}
          <input
            type="text"
            placeholder="Your Name"
            value={val.name}
            onChange={(e) => {
              setVal({ ...val, name: e.target.value });
              setValidate(null);
            }}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={val.email}
            onChange={(e) => {
              setVal({ ...val, email: e.target.value });
              setValidate(null);
            }}
            required
          />
          <textarea
            name=""
            id=""
            placeholder="Your Message"
            value={val.message}
            onChange={(e) => {
              setVal({ ...val, message: e.target.value });
              setValidate(null);
            }}
            required
          ></textarea>
          <input type="submit" value={btnVal} />
        </form>
      </div>
    </section>
  );
};

export default Contact;
