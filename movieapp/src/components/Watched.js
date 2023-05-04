import "../App.css";
import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import { Link } from "react-router-dom";
import {MovieControls} from "./MovieControls";

export function Watched({movie, type}) {

const {watched} =useContext(GlobalContext);

  return (
    <div>
        <Link to={"/watchlist"}><button className={'sele'}>Whatlist</button></Link>
      <Link to={"/watchedlist"} ><button className={'clicked sele'}>Watched</button></Link>
      <Link to={"/addToWatchlist"}><button className={'sele'}>+ Add</button></Link>

<div className="header_watchlist">
        <h1 className="space_title">Watched List</h1>
        <h4 className="space_end">All your favorite Movies in one place</h4>
      </div>
      <hr className="line" />

      {watched.length > 0 ?(

<div className="movie-grid">
  {watched.map((movie) => (
      <div>
    <MovieCard movie={movie} type="watched"/>
      <MovieControls movie={movie} type="watched"/>
      </div>

  ))}
</div>
) : (
  <h2 className="no-movies">No Movies in your List, add some :)</h2>
)} 

</div>

  );
}