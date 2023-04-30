import "../App.css";
import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export function Watched({movie, type}) {

const {watched} =useContext(GlobalContext);

  return (
    <div>

<div className="header_watchlist">
        <h1 className="space_title">Watched List</h1>
        <h4 className="space_end">All your favorite Movies in one place</h4>
      </div>
      <hr className="line" />

      {watched.length > 0 ?(

<div className="movie-grid">
  {watched.map((movie) => (
    <MovieCard movie={movie} type="watched"/>

  ))}
</div>
) : (
  <h2 className="no-movies">No Movies in your List, add some :)</h2>
)} 

</div>

  );
}