import React, { useState } from "react";
import "./CookiePage.css";
import cookieImage from "../images/cookie.jpg";

export default function CookiePage() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(0);

  const TotalCookies = () => {
    return (
      <>
        <div>Total Cookies:</div>
        <div className="total-cookies">{cookies}</div>
        <div>cps: {cps}</div>
      </>
    );
  };

  const CookieClicked = () => {
    setCookies((prev) => {
      return prev + 1;
    });
  };

  const Cookie = (props) => {
    return (
      <img
        onClick={props.onClick}
        className="cookie-picture"
        src={cookieImage}
        alt="cookie"
      ></img>
    );
  };

  const ClickStrengthUpgarde = () => {};

  return (
    <>
      <div className="cookie-page">
        <div className="cookie-container">
          <TotalCookies />
          <Cookie onClick={CookieClicked} />
        </div>
        <div className="cookie-upgrades">
          <ClickStrengthUpgrade />
        </div>
      </div>
    </>
  );
}
