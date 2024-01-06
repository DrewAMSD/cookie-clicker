import React, { useEffect, useState } from "react";
import "./CookiePage.css";
import cookieImage from "../images/cookie.jpg";
import cookieImage2 from "../images/cookie2.jpg";

export default function CookiePage() {
  const [cookies, setCookies] = useState(0);
  const [cps, setCps] = useState(0);
  const [clickStrength, setClickStrength] = useState(1);
  const [doughRoller, setDoughRoller] = useState({
    cost: 10,
    numOwned: 0,
    strength: 1,
  });
  const [grandma, setGrandma] = useState({
    cost: 10,
    numOwned: 0,
    strength: 1,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCookies((prevCookies) => {
        const newCookies = prevCookies + cps;
        return newCookies;
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [cps]);

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

  /*Clickable Cookie on Screen, main image*/
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

  const CookieClicked = () => {
    setCookies((prevCookies) => {
      const newCookies = prevCookies + clickStrength;
      return newCookies;
    });
  };

  /*Items in the Upgrade Menu*/
  const UpgradeItem = (props) => {
    return (
      <>
        <div onClick={props.onClick} className="upgradeItem-container">
          <div className="upgradeItem-textcost-container">
            <div className="upgradeItem-text">{props.itemInfo}</div>
            <div className="upgradeItem-cost">
              <div>cost: {props.upgradeItem.cost}</div>
              <img
                className="cookie-picture2"
                src={cookieImage2}
                alt="cookie2"
              ></img>
            </div>
          </div>
          <div className="upgradeItem-num-owned">
            {props.upgradeItem.numOwned}
          </div>
        </div>
      </>
    );
  };

  /*click event for each upgrade item*/
  const DoughRollerClicked = () => {
    if (cookies >= doughRoller.cost) {
      setCookies((prevCookies) => {
        const newCookies = prevCookies - doughRoller.cost;
        return newCookies;
      });
      setDoughRoller((prevDoughRoller) => {
        const newDoughRoller = {
          ...prevDoughRoller,
          cost: Math.round(prevDoughRoller.cost * 2.15),
          numOwned: prevDoughRoller.numOwned + 1,
        };
        return newDoughRoller;
      });
      setClickStrength((prevClickStrength) => {
        const newClickStrength = prevClickStrength + 1;
        return newClickStrength;
      });
    }
  };

  const GrandmaClicked = () => {
    if (cookies >= grandma.cost) {
      setCookies((prevCookies) => {
        const newCookies = prevCookies - grandma.cost;
        return newCookies;
      });
      setGrandma((prevGrandma) => {
        const newGrandma = {
          ...prevGrandma,
          cost: Math.round(prevGrandma.cost * 2.15),
          numOwned: prevGrandma.numOwned + 1,
        };
        return newGrandma;
      });
      setCps((prevCps) => {
        const newCps = prevCps + 1;
        return newCps;
      });
    }
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
          <UpgradeItem
            upgradeItem={doughRoller}
            itemInfo={"Dough Roller: +1 click strength"}
            onClick={DoughRollerClicked}
          />
          <UpgradeItem
            upgradeItem={grandma}
            itemInfo={"Grandma: +1 cps"}
            onClick={GrandmaClicked}
          />
        </div>
      </div>
    </>
  );
}
