import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";
import "../App.css";
const Navbar = ()=> {

    const [isOpen, setIsOpen] = useState(false);
    return(
        <div className="Navbar">
            <span className="nav-logo">
           <Link to={"/"}><Logo className={"logo"} /></Link> 
            </span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <Link to={"/"}>Movies </Link>
                <Link to={"/"}>Tv Shows</Link>
                <Link to={"/watchlist"}>Your Watchlist</Link>
                <Link to={"/watchedlist"}>Watched</Link>
                <Link to={"/addToWatchlist"}>+ Add</Link>
                 <div className="space_search_bar">
        </div>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar













  {/*

import "../App.css";
import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";
export function Nav() {
  return (
    <div className="navbar">
        <div className={"navLeft"}>
            <Logo className={"logo"} />
            <div className={"navLinks"}>
                <h6 className={"selected"}>Movies</h6>
                <Link to={"/details"}><h6>TV Shows</h6></Link>
            </div>

        </div>

      <div className="navRight">
        <div className="space_search_bar">
         <div className="container">
          <input className="input_search" type="text" placeholder="Search..." />
          <div className="search"></div>
        </div>
        </div>
      
        <Link to={"/login"}>
          <button className="btn_register_nav">Sign In</button>
        </Link>

      </div>
    </div>
  );
}
  */}