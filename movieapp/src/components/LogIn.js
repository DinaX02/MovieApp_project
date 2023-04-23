import "../App.css";
import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";

export function LogIn() {
  return (
    <div className="div_center_login background_Login">
       <Link to={"/"}> <Logo className={"logo"} /></Link>
          <div className="input_username">
            <input id="user" type="text" className="input_login" placeholder="Username"/>
          </div>
          <div>

            <input
              id="pass"
              type="password"
              className="input_login"
              data-type="password"
              placeholder="Password"
            />

          </div>

          <div>
            <button className="btn_login">Log In</button>
          </div>
<div className="p_log_in">
 <Link to={"/register"}> <u>I don't have an account</u></Link>  
</div>
    </div>
  );
}
