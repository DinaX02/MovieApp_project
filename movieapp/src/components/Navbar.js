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
                <h6>TV Shows</h6>
            </div>

        </div>

      <div className="navRight">
          {/*<div className="container">
          <input className="input_search" type="text" placeholder="Search..." />
          <div className="search"></div>
        </div>*/}
        <Link to={"/login"}>
          <button className="btn_register_nav">Sign In</button>
        </Link>
      </div>
    </div>
  );
}
