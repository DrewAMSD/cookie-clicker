import React, { useState } from "react";
import "./CookiePage.css";
import cookieImage from "../images/cookie.jpg";
import cookieImage2 from "../images/cookie2.jpg";

export default function CookiePage() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(0);
  const [clickStrength, setClickStrength] = useState(1);
  const [doughRoller, setDoughRoller] = useState({cost: 10, 
    numOwned: 0});

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
    setCookies((prevCookies) => {
      const newCookies = prevCookies + clickStrength;
      return newCookies;
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
    if (cookies >= doughRoller.cost) {
      setCookies((prevCookies) => {
        const newCookies = prevCookies - doughRoller.cost;
        return newCookies;
      });
      setDoughRoller((prevDoughRoller) => {
        const newDoughRoller = {cost: Math.round(prevDoughRoller.cost * 2.3),
        numOwned: prevDoughRoller.numOwned + 1}
        return newDoughRoller;
      });
      setClickStrength(prevClickStrength => {
        const newClickStrength = prevClickStrength + 1;
        return newClickStrength;
      })
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
              <div>cost: {doughRoller.cost}</div>
              <img
                className="cookie-picture2"
                src={cookieImage2}
                alt="cookie2"
              ></img>
            </div>
          </div>
          <div className="clickStrengthUpgrade-num-owned">{doughRoller.numOwned}</div>
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
