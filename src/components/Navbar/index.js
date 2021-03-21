import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <>
      {/* <div class="logo-sevensons"/>
      <img class="logo-sevensons-image" src={logo}/> */}

      <div class="header">
        <ul>
          <li class="menu">
            <Link
              to="menu"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Menu
            </Link>
          </li>
          <li class="contact">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <li class="ourStory">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li class="catering">
            <Link
              to="catering"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Catering
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;