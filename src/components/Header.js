import "./Header.css";
import logo from "../images/logo.svg"
import { NavLink } from "react-router-dom";
import iconMenu from "../images/icon-hamburger.svg";
import iconClose from "../images/icon-close.svg";

export default function Header() {
    return (
      <header className="Header">
        <img src={logo} alt="" aria-hidden="true" width="48" height="48" />
        <hr className="header__Line" />
        <button
          type="button"
          className="header__Btn-Menu"
          aria-label="Button Menu, show menu"
          aria-expanded="true"
        >
          <img
            src={iconMenu}
            aria-hidden="true"
            alt=""
            width="24"
            height="21"
          />
        </button>
        <nav className="header__Nav">
          <button
            type="button"
            className="header__Btn-Close"
            aria-label="Button Close, close menu"
            aria-expanded="true"
          >
            <img
              src={iconClose}
              aria-hidden="true"
              alt=""
              width="19"
              height="19"
            />
          </button>
          <ul className="header__List-Links">
            <li className="header__Item-Link">
              <NavLink
                to="/home"
                className="header__Link"
                rel="next"
                target="_self"
              >
                00 Home
              </NavLink>
            </li>
            <li className="header__Item-Link">
              <NavLink
                to="/destination"
                className="header__Link"
                rel="next"
                target="_self"
              >
                01 Destination
              </NavLink>
            </li>
            <li className="header__Item-Link">
              <NavLink
                to="/crew"
                className="header__Link"
                rel="next"
                target="_self"
              >
                02 Crew
              </NavLink>
            </li>
            <li className="header__Item-Link">
              <NavLink
                to="/technology"
                className="header__Link"
                rel="next"
                target="_self"
              >
                03 Technology
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
}