import "../App.css";
import React from "react";
import { Watchlist } from "../components/Watchlist";
import Navbar from "../components/Navbar";
import { Add } from "../components/Add";

export function AddToWatchlist(){
    return(
        <div>
        <Navbar/>
        <Add/>
        </div>
    )
}
