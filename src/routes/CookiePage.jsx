import React, { useEffect, useState } from "react";
import "./CookiePage.css";
import cookieImage from "../images/cookie.jpg";
import cookieImage2 from "../images/cookie2.jpg";

const itemInfo = {
  1: {
    name: "Dough Roller",
    cost: 30,
    value: 1,
    multiplier: 1.15,
  },
  2: {
    name: "Flour Farm",
    cost: 200,
    value: 8,
    multiplier: 1.15,
  },
  3: {
    name: "Sugar Factory",
    cost: 1400,
    value: 64,
    multiplier: 1.15,
  },
  4: {
    name: "Chocolate Mine",
    cost: 11200,
    value: 245,
    multiplier: 1.15,
  },
  5: {
    name: "Nuclear Cookie Oven",
    cost: 130000,
    value: 1024,
    multiplier: 1.15,
  },
  6: {
    name: "Hydro Dough Facility",
    cost: 1000000,
    value: 4048,
    multiplier: 1.15,
  },
};

export default function CookiePage() {
  const [cookies, setCookies] = useState(0);
  const clickStrength = 1;
  const [items, setItems] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
  });

  const getCps = () => {
    let cps = 0;
    Object.entries(items).forEach(([key, val]) => {
      cps += itemInfo[key].value * val;
    });
    return cps;
  };

  const getCost = (key) => {
    return Math.floor(itemInfo[key].cost * Math.pow(1.15, items[key]));
  };

  let cps = getCps();
  
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
  });
  
  const CookieStats = () => {
    let cps = getCps();
    return (
      <div className="cookie-stats">
        <div>Total Cookies:</div>
        <div className="total-cookies">{cookies}</div>
        <div>cps:</div>
        <div>{cps}</div>
      </div>
    );
  };

  /*Clickable Cookie on Screen, main image*/
  const Cookie = (props) => {
    return (
      <div className="cookie-container">
        <img
          onClick={props.onClick}
          className="cookie-picture"
          src={cookieImage}
          alt="cookie"
        ></img>
      </div>
    );
  };

  const CookieClicked = () => {
    setCookies((prevCookies) => {
      const newCookies = prevCookies + clickStrength;
      return newCookies;
    });
  };

  /*Items in the Upgrade Menu*/
  const UpgradeItems = () => {
    return (
      <>
        {Object.entries(items).map(([key, numOwned]) => (
          <div
            onClick={() => upgradeItemClicked(key)}
            key={key}
            className="upgradeItem-container"
          >
            <div className="upgradeItem-textcost-container">
              <div className="upgradeItem-text">
                {itemInfo[key].name + " +" + itemInfo[key].value}
              </div>
              <div className="upgradeItem-cost">
                <div>cost: {getCost(key)}</div>
                <img
                  className="cookie-picture2"
                  src={cookieImage2}
                  alt="cookie2"
                ></img>
              </div>
            </div>
            <div className="upgradeItem-num-owned">{numOwned}</div>
          </div>
        ))}
      </>
    );
  };

  const upgradeItemClicked = (key) => {
    let cost = getCost(key);
    if (cookies >= cost) {
      setCookies((prevCookies) => {
        const newCookies = prevCookies - cost;
        return newCookies;
      });
      setItems((prevItems) => {
        const newItems = { ...prevItems };
        newItems[key] = newItems[key] + 1;
        return newItems;
      });
    }
  };

  return (
    <>
      <div className="cookie-page">
        <div className="cookie-and-stats-container">
          <CookieStats />
          <Cookie onClick={CookieClicked} />
        </div>
        <div className="cookie-upgrades">
          <div className="cookie-upgrades-text">Upgrades:</div>
          <UpgradeItems />
        </div>
      </div>
    </>
  );
}
