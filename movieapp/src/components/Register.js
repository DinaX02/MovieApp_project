import "../App.css";
import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <div className="div_center_login background_Login">
      <div className="div_center_login">
        <Link to={"/"}><Logo className={"logo"} /></Link>

        <div className="input_email">
            <input id="user" type="email" className="input_login" placeholder="E-mail"/>
          </div>
          <div className="input_username_register">
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
            <button className="btn_login">Register</button>
          </div>
<div className="p_log_in">
    <Link to={"/login"}><u>I have an account</u></Link>
</div>
      </div>
    </div>
  );
}
