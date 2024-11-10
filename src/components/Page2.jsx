import React from "react";

const Page2 = (props) => {
  return (
    <>
      <div className="parentFact">
        <div className="leftFact">
          <h2>{props.heading}</h2>
          <p>
            {props.desc}
          </p>
        </div>

        <div className="rightFact">
          <h2>The epicenter of sciences</h2>
          <p>
            Being the land where the founder of natural sciences, Maharishi
            Patanjali, took his first steps, this town has been at the helm of
            the germination of scientific knowledge.
            <br /> It is hardly an enigma that the ancient holistic healing
            sciences such as Yoga and other traditional forms have their roots
            in this city.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page2;
