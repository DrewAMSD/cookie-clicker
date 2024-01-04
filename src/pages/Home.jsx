import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="start-link-container">
        <Link className="start-link" to="/CookiePage">
          <button className="start-link-button">Start</button>
        </Link>
      </div>
    </>
  );
}

export default Home;
