import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <h1 className = "mainHeading">
          Heritage Of
          <br /> Banaras
        </h1>

        <div className="nav-part-2">
          <h4>
            <Link to="home">Home</Link>
          </h4>
          <h4>
            <Link to="food">Food</Link>
          </h4>
          <h4>
            <Link to="sights">Places To Visit</Link>
          </h4>
          <h4>
            <Link to="random">Radom Category</Link>
          </h4>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
