import "../App.css";
import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";
export function Nav() {
  return (
    <div className="navbar">
      <Logo className={"logo"} />
      <h6 className={"selected"}>Movies</h6>
      <h6>TV Shows</h6>
      <div className="login_register">
        <div className="container">
          <input className="input_search" type="text" placeholder="Search..." />
          <div className="search"></div>
        </div>
        <Link to={"/login"}>
          <h6>Log In</h6>
        </Link>
        <Link to={"/register"}>
          <button className="btn_register_nav">Register</button>
        </Link>
      </div>
    </div>
  );
}
