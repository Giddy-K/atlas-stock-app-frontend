import React from "react";
import loaderImg from "../../assets/comp.gif";
import ReactDOM from "react-dom";
import "./Loader.scss";

const Loader = () => {
    const loaderRoot = document.getElementById("loader");
  if (!loaderRoot) return null;

  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    loaderRoot
    // document.getElementById("loader")
  );
};

export const SpinnerImg = () => {
  return (
    <div className="--center-all">
      <img src={loaderImg} alt="Loading..." />
    </div>
  );
};

export default Loader;