import "../App.css";
import React, { useContext } from "react";
//import { GlobalContext } from "../context/GlobalState";
import { MovieControls } from "./MovieControls";

export function MovieCard({ movie, type }) {
  return (
    <div className="movie-card">
      
      <img
        className="card_watchlist_poster"
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      {/*<MovieControls type={type} movie={movie} /> */}

    </div>
  );
}
