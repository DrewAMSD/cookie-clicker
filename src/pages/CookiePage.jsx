import React, { useState } from "react";
import "./CookiePage.css";
import cookieImage from "../images/cookie.jpg";
import cookieImage2 from "../images/cookie2.jpg";

export default function CookiePage() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(0);
  const [clickStrength, setClickStrength] = useState(1);
  const [doughRoller, setDoughRoller] = useState([10, 0]);

  const CookieStats = () => {
    return (
      <div className="cookie-stats">
        <div>Total Cookies:</div>
        <div className="total-cookies">{cookies}</div>
        <div>cps:</div>
        <div>{cps}</div>
        <div>clickStrength:</div>
        <div>{clickStrength}</div>
      </div>
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

  const ClickStrengthUpgradeClicked = () => {
    if (cookies >= doughRoller[0]) {
      setCookies((prev) => {
        return prev - doughRoller[0];
      });
      setDoughRoller((prev) => {
        prev[0] = Math.round(prev[0] * 2.5);
        prev[1] = prev[1] + 1;
        return prev;
      });
    }
  };

  const ClickStrengthUpgrade = (props) => {
    return (
      <>
        <div onClick={props.onClick} className="clickStrengthUpgrade-container">
          <div className="clickStrengthUpgrade-textcost-container">
            <div className="clickStrengthUpgrade-text">
              Dough Roller: +1 click strength
            </div>
            <div className="clickStrengthUpgrade-cost">
              <div>cost: {doughRoller[0]}</div>
              <img
                className="cookie-picture2"
                src={cookieImage2}
                alt="cookie2"
              ></img>
            </div>
          </div>
          <div className="clickStrengthUpgrade-num-owned">{doughRoller[1]}</div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="cookie-page">
        <div className="cookie-container">
          <CookieStats />
          <Cookie onClick={CookieClicked} />
        </div>
        <div className="cookie-upgrades">
          <div className="cookie-upgrades-text">Upgrades:</div>
          <ClickStrengthUpgrade onClick={ClickStrengthUpgradeClicked} />
        </div>
      </div>
    </>
  );
}
