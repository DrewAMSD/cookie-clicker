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
    strength: 2,
    multiplier: 1,
  });
  const [grandma, setGrandma] = useState({
    cost: 10,
    numOwned: 0,
    strength: 5,
    multiplier: 1,
  });
  const [farm, setFarm] = useState({
    cost: 1111,
    numOwned: 0,
    strength: 100,
    multiplier: 1,
  });
  const [factory, setFactory] = useState({
    cost: 500000,
    numOwned: 0,
    strength: 5000,
    multiplier: 1,
  });
  const [nuclearPlant, setNuclearPlant] = useState({
    cost: 10000000,
    numOwned: 0,
    strength: 200000,
    multiplier: 1,
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
          cost: Math.floor(prevDoughRoller.cost * 1.4),
          numOwned: prevDoughRoller.numOwned + 1,
        };
        return newDoughRoller;
      });
      setClickStrength((prevClickStrength) => {
        const newClickStrength =
          prevClickStrength + doughRoller.strength * doughRoller.multiplier;
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
          cost: Math.ceil(prevGrandma.cost * 1.05),
          numOwned: prevGrandma.numOwned + 1,
        };
        return newGrandma;
      });
      setCps((prevCps) => {
        const newCps = prevCps + grandma.strength * grandma.multiplier;
        return newCps;
      });
    }
  };

  const FarmClicked = () => {
    if (cookies >= farm.cost) {
      setCookies((prevCookies) => {
        const newCookies = prevCookies - farm.cost;
        return newCookies;
      });
      setFarm((prevFarm) => {
        const newFarm = {
          ...prevFarm,
          cost: Math.floor(prevFarm.cost * 1.1),
          numOwned: prevFarm.numOwned + 1,
        };
        return newFarm;
      });
      setCps((prevCps) => {
        const newCps = prevCps + farm.strength * farm.multiplier;
        return newCps;
      });
    }
  };

  const FactoryClicked = () => {
    if (cookies >= factory.cost) {
      setCookies((prevCookies) => {
        const newCookies = prevCookies - factory.cost;
        return newCookies;
      });
      setFactory((prevFactory) => {
        const newFactory = {
          ...prevFactory,
          cost: Math.floor(prevFactory.cost * 1.15),
          numOwned: prevFactory.numOwned + 1,
        };
        return newFactory;
      });
      setCps((prevCps) => {
        const newCps = prevCps + factory.strength * factory.multiplier;
        return newCps;
      });
    }
  };

  const NuclearPlantClicked = () => {
    if (cookies >= nuclearPlant.cost) {
      setCookies((prevCookies) => {
        const newCookies = prevCookies - nuclearPlant.cost;
        return newCookies;
      });
      setNuclearPlant((prevNuclearPlant) => {
        const newNuclearPlant = {
          ...prevNuclearPlant,
          cost: Math.floor(prevNuclearPlant.cost * 1.2),
          numOwned: prevNuclearPlant.numOwned + 1,
        };
        return newNuclearPlant;
      });
      setCps((prevCps) => {
        const newCps =
          prevCps + nuclearPlant.strength * nuclearPlant.multiplier;
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
            itemInfo={
              "Dough Roller: +" +
              doughRoller.strength * doughRoller.multiplier +
              " click strength"
            }
            onClick={DoughRollerClicked}
          />
          <UpgradeItem
            upgradeItem={grandma}
            itemInfo={
              "Grandma: +" + grandma.strength * grandma.multiplier + " cps"
            }
            onClick={GrandmaClicked}
          />
          <UpgradeItem
            upgradeItem={farm}
            itemInfo={"Farm: +" + farm.strength * farm.multiplier + " cps"}
            onClick={FarmClicked}
          />
          <UpgradeItem
            upgradeItem={factory}
            itemInfo={
              "Factory: +" + factory.strength * factory.multiplier + " cps"
            }
            onClick={FactoryClicked}
          />
          <UpgradeItem
            upgradeItem={nuclearPlant}
            itemInfo={
              "Nuclear Cookie Plant: +" +
              nuclearPlant.strength * nuclearPlant.multiplier +
              " cps"
            }
            onClick={NuclearPlantClicked}
          />
        </div>
      </div>
    </>
  );
}
