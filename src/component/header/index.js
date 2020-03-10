import React from "react";
import "./style.scss";
import Logo from "./../../assets/graphics/logo.png";

const Header = () => {
  return (
    <header data-test='headerComponent'>
      <div className='wrap'>
        <div className='logo' data-test='logoIMG'>
          <img src={Logo} alt='app logo'></img>
        </div>
      </div>
    </header>
  );
};

export default Header;
