import "./Header.css";
import logo from "../images/logo.svg";
import { NavLink } from "react-router-dom";
import iconMenu from "../images/icon-hamburger.svg";
import iconClose from "../images/icon-close.svg";
import {useState } from "react";

export default function Header(props) {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <header
      className={
        props.classNameAdd
          ? `Header header_Mg ${props.classNameAdd}`
          : "Header header_Mg"
      }
    >
      <div className="header__Container">
        <NavLink
          to="/home"
          target="_self"
          rel="next"
          className="header__Link-Logo"
          aria-label="Link to page home"
          title="Link to page home"
        >
          <img src={logo} alt="" aria-hidden="true" className="header__Logo" />
        </NavLink>
        <hr className="header__Line" />
        <button
          type="button"
          className="header__Btn-Menu"
          aria-label="Expanded Menu Navigation to Pages With Click or key Enter"
          aria-expanded={navIsOpen}
          title="Expanded Menu Navigation to Pages With Click or key Enter"
          onPointerDown={(event) => {
            setNavIsOpen(true);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setNavIsOpen(true);
            }
          }}
        >
          <img
            src={iconMenu}
            aria-hidden="true"
            alt=""
            width="24"
            height="21"
          />
        </button>
      </div>
      <nav
        className={navIsOpen ? "header__Nav" : "header__Nav header__Nav_Close"}
      >
        <button
          type="button"
          className="header__Btn-Close"
          aria-label="Button Close, close menu with click or key Enter"
          aria-expanded="true"
          title="Close Menu"
          onPointerDown={(event) => setNavIsOpen(false)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              setNavIsOpen(false);
            }
          }}
        >
          <img
            src={iconClose}
            aria-hidden="true"
            alt=""
            width="19"
            height="19"
          />
        </button>
        <ul
          className="header__List-Links"
          aria-label="List from links navigation pages"
        >
          <li className="header__Item-Link">
            <NavLink
              to="/home"
              className="header__Link"
              rel="next"
              target="_self"
              aria-label="Page Home"
            >
              <span className="header__Number-Page">00</span> Home
            </NavLink>
          </li>
          <li className="header__Item-Link">
            <NavLink
              to="/destination"
              className="header__Link"
              rel="next"
              target="_self"
              aria-label="Page Destination"
            >
              <span className="header__Number-Page">01</span> Destination
            </NavLink>
          </li>
          <li className="header__Item-Link">
            <NavLink
              to="/crew"
              className="header__Link"
              rel="next"
              target="_self"
              aria-label="Page Crew"
            >
              <span className="header__Number-Page">02</span> Crew
            </NavLink>
          </li>
          <li className="header__Item-Link">
            <NavLink
              to="/technology"
              className="header__Link"
              rel="next"
              target="_self"
              aria-label="Page Technology"
            >
              <span className="header__Number-Page">03</span> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
