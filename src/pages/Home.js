
import React from "react";

import { Link } from "react-router-dom";
  import BannerImage from '../images/img-8.jpg';
 import "../pages/Home.css";

function Home() {
  return (
     <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Our Company for Jurneys </h1>
        <p> Your happiness is our goal</p>
        <Link to="/services">
          <button> Contact us now </button>
        </Link>
      </div>
     </div>
  );
}

export default Home;




