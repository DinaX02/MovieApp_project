import "../App.css";
import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export function MovieControls({ movie, type }) {
  const { removeMovieFromWatchlist, addMovieToWatched, removeFromWatched, moveToWatchlist } =
    useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {/* put and take out of watchlist*/}
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieToWatched(movie)}>
             {/*<i className="fa-fw far fa-eye"></i>*/}
            visto
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            {/*<i className="fa-fw fa fa-times"></i>*/}
            tirar
          </button>
        </>
      )}

      {/* put and take out of watched*/}
      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() =>moveToWatchlist(movie)}>
            {/*<i className="fa-fw fa-eye-slash"></i>*/}
            back to watchlist
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            {/*<i className="fa-fw fa fa-times"></i>*/}
            tirar
          </button>
        </>
      )}
    </div>
  );
}
