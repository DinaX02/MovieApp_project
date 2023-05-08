import "../App.css";
import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";

export function HeroLandingPage() {
  return (
    <div className="hero_landing_page">
        <div className="hero_text_40">
        <h1 className="spacing_left">Welcome to Zetflicks !</h1>
        <p className="spacing_left">"Keep track of all your favorite movies and TV shows effortlessly."</p>
        <div  className="spacing_left">
        <Link to={"/movies"}><button className="landing_btn masterofdiscaise">Movies</button></Link>
        <Link to={"/shows"}><button className="landing_btn">TV Shows</button></Link>
        </div>
        </div>
    </div>
  );    
}
