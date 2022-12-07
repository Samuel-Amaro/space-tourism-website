import { useEffect } from "react";
import { NavLink, useRouteError } from "react-router-dom";
import "./ErrorPage.css";
import replaceBg from "../utils/utils";

export default function ErrorPage() {
    useEffect(() => {
          replaceBg("body-page_Bg--Error");
    }, []);

    const error = useRouteError();
    return (
      <div className="Error-Page">
        <h1 className="error-page__Title">Oops!</h1>
        <p className="error-page__Description">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="error-page__Error">
          <i>{error.statusText || error.message}</i>
        </p>
        <NavLink
          to="/home"
          target="_self"
          rel="next"
          aria-label="Return page Home"
          title="Return page Home"
          className="error-page__Link"
        >Explore</NavLink>
      </div>
    );
}