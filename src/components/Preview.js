import React from "react";

const Preview = ({ gif, setView }) => {
  return (
    <div className="preview">
      <i className="fas fa-times" onClick={() => setView(false)}></i>
      <div className="overlay"></div>
      <img src={gif} alt="" />
    </div>
  );
};
export default Preview;
