import "../App.css";
import React from "react";
import { Watchlist } from "../components/Watchlist";
import Navbar from "../components/Navbar";

export function WatchlistPage(){
    return(
        <div>
        <Navbar/>
        <Watchlist/>
        </div>
    )
}
