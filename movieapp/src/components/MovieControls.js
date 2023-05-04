import "../App.css";
import React, { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark,faEyeSlash,faEye} from '@fortawesome/free-solid-svg-icons'
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
          <FontAwesomeIcon icon={faEye} size="lg" style={{color: "#ffffff"}} />
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
           <FontAwesomeIcon icon={faXmark} size="lg" beatFade style={{color: "#ffffff"}}/>  
          </button>

        </>
      )}

      {/* put and take out of watched*/}
      {type === "watched" && (
        <>
          <button className="ctrl-btn" onClick={() =>moveToWatchlist(movie)}>
          <FontAwesomeIcon icon={faEyeSlash} size="lg" style={{color: "#ffffff"}} />
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
         <FontAwesomeIcon icon={faXmark} size="lg" beatFade style={{color: "#ffffff"}}/>  
          </button>
        </>
      )}
    </div>
  );
}
