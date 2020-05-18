import React from "react";
import Applogo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark fixed-top">
          <img src={Applogo} height="45px" width="175px" style={{"margin":"auto"}}  alt="Covid"/>
      </nav>
    </div>
  );
};

export default Header;
