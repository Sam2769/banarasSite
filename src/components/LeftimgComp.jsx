import React from "react";

const LeftimgComp = (props) => {
  return (
    <>
      <h2 className="locationName">{props.title}</h2>
      <div className="leftImgPlace">
        <div className="info">
          <p>{props.desc}</p>
        </div>

        <div className="random">
          <img src="" alt="Mani Mandir" />
        </div>
      </div>

      <div className="buttonContainer">
        <div></div>

        <a href={props.link} target="_blank">
          <button className="mapsButton">Go To Maps</button>
        </a>
      </div>
    </>
  );
};

export default LeftimgComp;
