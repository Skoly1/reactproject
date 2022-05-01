import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { faSpider } from "@fortawesome/free-solid-svg-icons";
import { AiOutlineMenu, AiOutlineMenuUnfold } from "react-icons/ai";
import { Button } from "../Button/Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <FontAwesomeIcon icon={faSpider} />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <AiOutlineMenuUnfold /> : <AiOutlineMenu />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/latestmarveltrailers"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Latest Marvel Trailers
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/addtrailer"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Add Trailer
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
