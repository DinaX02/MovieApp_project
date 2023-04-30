import "../App.css";
import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { Add } from "./Add";
import { MovieCard } from "./MovieCard";
import { Watched } from "./Watched";

export function Watchlist() {
  const {watchlist} = useContext(GlobalContext);

  return (
    <div>
      <div className="header_watchlist">
        <h1 className="space_title">Watchlist</h1>
        <h4 className="space_end">Need to Watch ASAP</h4>
      </div>
      <hr className="line" />
      
<div className="total">
      <span className="total_films">
       {watchlist.length} {Watched.length === 1 ? "Movie" : "Movies"}
      </span></div>

{watchlist.length > 0 ?(

<div className="movie-grid">
  {watchlist.map((movie) => (
    <MovieCard movie={movie} type="watchlist"/>

  ))}
</div>
) : (
  <h2 className="no-movies">No Movies in your List, add some :)</h2>
)} 

    </div>
  );
}






    {/*  <div className="card_movie">
      <img className="img_card"
            src={require("../assets/landscape_test_st.jpg")}/>
            <div className="year_title_director">
        <h4>Film Title</h4>
        <div className="flex-row">
          <div className="director-name">
            <h4>Director Name</h4>
          </div>
          <div className="year_film">
            <p>Year</p>
          </div>
          </div>
          </div>
      </div>*/} 