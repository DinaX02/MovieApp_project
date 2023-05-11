import "../App.css";
import React, { useContext } from "react";
//import { GlobalContext } from "../context/GlobalState";
import { MovieControls } from "./MovieControls";

export function MovieCard({ movie, type }) {
  return (
    <div className="movie-card">
        {movie.poster_path ? (
      <img
        className="card_watchlist_poster"
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />) : (
            <div style={{width: "200px", height: "300px", marginBottom: "1.2em",marginRight: "1em",borderRadius: "10px"}} className="filler-poster" />
        )}

      {/*<MovieControls type={type} movie={movie} /> */}

    </div>
  );
}
