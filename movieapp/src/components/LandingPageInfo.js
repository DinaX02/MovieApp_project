import "../App.css";
import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Info_add } from "../assets/img_landing_page_add.svg";

export function HeroLandingPageInfo() {
  return (
    <div className="info_landing_page">
      <div className="info_img">
      <Info_add className="img_ifo" />

      </div>
      <div className="info_text">
      <h2>The Best Movie and TV Shows Tracker</h2>
      <p className="size_text">Keep track of all your favorite movies and TV shows in one place and never miss a scene again - with our movie and TV show list manager!</p>

      
  <Link to={"/addToWatchlist"}><button className="landing_btn space-top_try">Try it Now</button></Link>
  
      </div>

    </div>
  );
}
