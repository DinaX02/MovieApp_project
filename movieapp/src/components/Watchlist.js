import "../App.css";
import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";
import { Watched } from "./Watched";
import { Link } from "react-router-dom";
import { MovieControls } from "./MovieControls";

export function Watchlist() {
  const {watchlist} = useContext(GlobalContext);
  console.log(watchlist)

  return (
    <div>
      <div className="btn_3_header">
      <Link to={"/watchlist"}><button className={'sele'}>Watchlist</button></Link>
      <Link to={"/watchedlist"} ><button className={'clicked sele'}>Watched</button></Link>
      <Link to={"/addToWatchlist"}><button className={'clicked sele'}>+ Add</button></Link>
      </div>
      <div className="header_watchlist">
        <h1 className="space_title">Watchlist</h1>
        <h4 className="space_end">Need to Watch ASAP</h4>
      </div>
      <hr className="line" />
      


{watchlist.length > 0 ?(
<div>
<div className="total">
      <span className="total_films">
       {watchlist.length} {watchlist.length === 1 ? "Movie" : "Movies"}
      </span></div>

<div className="movie-grid">
  {watchlist.map((movie) => (
      <div>
          <Link to={`/details/${movie.media_type}/${movie.id}`}>
              <MovieCard movie={movie} type="watchlist"/>
          </Link>
          <MovieControls movie={movie} type="watchlist"/>
      </div>

  ))}
</div>
</div>
) : (
  <h2 className="no-movies">No Movies in your List, add some :)</h2>
)} 

    </div>
  );
}






