import "../App.css";
import React, { useState } from "react";
import { ResultCard } from "./ResultCard";
import { Link } from "react-router-dom";
export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=723206ae2e0c5c92763af7ff78b43766&language=en-US&page=1&include_adult=false&query=${e.target.value}&fuzzy=1)`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
          console.log(data);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="add-page">
      <div className="sm-dv">
    <Link to={"/watchlist"}><button className={'sele'}>Whatlist</button></Link>
      <Link to={"/watchedlist"} ><button className={'sele'}>Watched</button></Link>
      <Link to={"/addToWatchlist"}><button className={'clicked sele'}>+ Add</button></Link></div>
  <div className="header_watchlist">
        <h1 className="space_title">Add to Watchlist</h1>
        <h4 className="space_end">Add all your favorite Movies</h4>
      </div>
      <hr className="line" />
      <div className="search_spacee">
        <div className="add-content">
          <div className="input-searchWlist">
            <input
              className="search_in_Watchlist"
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results" id="style-13">
              {results.map((movie) => (
                <li key={movie.id}>
                    <ResultCard movie={movie}/>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
