import React from "react";
import Applogo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark justify-content-center fixed-top">
          <img src={Applogo} height="45px" alt="Covid"/>
      </nav>
    </div>
  );
};

export default Header;
