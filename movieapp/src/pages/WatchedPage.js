import "../App.css";
import React from "react";
import { Watched } from "../components/Watched";
import Navbar from "../components/Navbar";


export function WatchedPage(){
    return(
        <div>
        <Navbar/>
        <Watched/>
        </div>
    )
}
