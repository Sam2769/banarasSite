import React from "react";

const RightimgComp = (props) => {
  return (
    <>
      <h2 className="locationName">{props.title}</h2>
      <div className="rightImgPlace">
        <div className="random">
          <img src="" alt="mansingh observatory" />
        </div>

        <div className="info">
          <p>
            {props.desc}
          </p>
        </div>
      </div>

      <div className="buttonContainer">
        <a
          target="_blank"
          href={props.link}
        >
          <button className="mapsButton">Go To Maps</button>
        </a>
      </div>
    </>
  );
};

export default RightimgComp;
