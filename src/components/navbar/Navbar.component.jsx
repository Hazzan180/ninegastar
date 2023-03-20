import "./navbar.styles.css";
import { PlayIcon } from "../../svg/PlayIcon.svg";
import { HamburgerIcon } from "../../svg/Hamburger.svg";
import { NavLink, Outlet } from "react-router-dom";
import { useState, useLayoutEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Utils/firebase/firebase.utils";
import { signOut } from "@firebase/auth";
import { profile } from "../../context/UserProfile";
import { CardProfile } from "../cards/Card.component";
import {BsTwitter, BsFacebook, BsInstagram} from "react-icons/bs"
import logo from "../../Dassets/image/logo.png";

export const Navbar = () => {

  const [user] = useAuthState(auth)

  const navToFanRequest = user ? "https://rb.gy/5k5kpc" : "/login";

  const navToPartnerWithUs = user ? "https://rb.gy/bfioll" : "/login";
  
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  let activeStyle = {
    color: "#5ebb3b",
  };

  return (
    <>
      <nav className="nav ">
      <div>
        <NavLink to="/" className="link ">
        <img src={logo} alt="artist" className="link"/>
        </NavLink>
      </div>
      <div className="nav-item ">
      <ul className="fl fl-row wd-100">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="link"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/explore-music"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
                className="link"
              >
                Expolore Music
              </NavLink>
            </li>
            { ( 
              <li>
                <NavLink
                  to={navToFanRequest}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="link"
                >
                  Fan request
                </NavLink>
              </li>
            ) }  
            { (
              <li>
                <NavLink
                  to={navToPartnerWithUs}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="link"
                >
                  Partner With us
                </NavLink>
              </li>
            )}
          </ul>
      </div>
      <div className="logos">
        <Icon />
      </div>
      <div className="toggle-icon" onClick={toggleNav}>
          <HamburgerIcon />
        </div>
        {showNav && <NavDropDown handleClick={toggleNav} />}
      </nav>
      <div className="outlet-container">
        <Outlet></Outlet>
      </div>
      <div className="footer-wrapper">
        <Footer />
      </div>
    </>
  );
};
export const Header = ({ children }) => {
  return (
    <>
      <header className="header-container">{children}</header>
    </>
  );
};

export const Icon = () => {
  const { role } = useContext(profile);
  const [user] = useAuthState(auth);

  let activeStyle = {
    color: "#5ebb3b",
  };
  const view = !user ? (
    <>
      <NavLink
        to="/explore-music"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className="link"
      >
        <div className="logo">
          <p> Listen now</p>
          <div className="svg-round">
            <PlayIcon />
          </div>
        </div>
      </NavLink>
    </>
  ) : (
    <div
      className="logo"
      onClick={() => {
        signOut(auth);
      }}
    >
      <p> Log out</p>
      <div className="svg-round">
        <CardProfile
          image={role === "User" ? "images/user.jpg" : "images/artist.jpeg"}
        />
      </div>
    </div>
  );
  return <>{view}</>;
};

export const NavDropDown = ({ handleClick }) => {
  const { role } = useContext(profile);
  const navSlide = useRef();
  let activeStyle = {
    color: "#5ebb3b",
  };

  useLayoutEffect(() => {
    gsap.from(navSlide.current, {
      transition: "all 0.3s ease-out",
    });
  }, []);
  return (
    <div className="nav-dropdown" ref={navSlide}>
      <div className="nav-close-btn" onClick={handleClick}>
        &#x2715;
      </div>
      <ul className="fl fl-col">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="link"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/explore-music"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="link"
          >
            Expolore Music
          </NavLink>
        </li>
        { (
          <li>
            <NavLink
              to="https://rb.gy/5k5kpc"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="link"
            >
              Fan request
            </NavLink>
          </li>
        )}
        {(
          <li>
            <NavLink
               to="https://rb.gy/bfioll"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              className="link"
            >
              Partner With us
            </NavLink>
          </li>
        )}

        <li>
          <Icon />
        </li>
      </ul>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="footer-container">

     <div className="footer-logo">
     <NavLink to="/" className="link ">
        <img src={logo} alt="artist" className="link"/>
      </NavLink>
     </div>

    <div className="footer-flex">
    <div>
     <NavLink to="/explore-music" className="link ">
        <h3>Explore Music</h3>
      </NavLink>

      <NavLink to="https://rb.gy/bfioll" className="link ">
        <h3>Partner with us</h3>
      </NavLink>
     </div>

     <div>
     <NavLink to="https://t.me/+FMasogwKVv4yNDJk" className="link ">
        <h3>Community</h3>
      </NavLink>

      <NavLink to="9jastar11@gmail.com" className="link ">
        <h3>Get Support</h3>
      </NavLink>
     </div>

     <div>
     <NavLink to="/" className="link ">
        <h3>Useful Links</h3>
      </NavLink>

      <NavLink to="https://rb.gy/5k5kpc" className="link ">
        <h3>Fan Request</h3>
      </NavLink>
     </div>

     <div  className="footer-icon">
      <BsTwitter />
      <BsFacebook />
      <BsInstagram />
     </div>
    </div>
    </footer>
  );
};
