import { Link } from "react-router-dom";
//import defaultImage from "../assets/default_cast.jpg";
import newDefaultImage from "../assets/no_img_available.png"
import { useParams, useNavigate } from "react-router-dom";
import "../App.css";
import Navbar from "./Navbar";
import React, {useContext, useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { GlobalContext } from "../context/GlobalState";

export function Details() {
    const [results, setResults] = useState({});
    const [actors, setActors] = useState({});
    const { movieId } = useParams();
    const { movieType } = useParams();
    const {
        addMovieToWatchlist,
        addMovieToWatched,
        watchlist,
        watched,
    } = useContext(GlobalContext);

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        Promise.all([
            fetch(`https://api.themoviedb.org/3/${movieType}/${movieId}?api_key=723206ae2e0c5c92763af7ff78b43766&language=en-US`),
            fetch(`https://api.themoviedb.org/3/${movieType}/${movieId}/credits?api_key=723206ae2e0c5c92763af7ff78b43766&language=en-US`)
        ])
            .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
            .then(([data1, data2]) => {
                if (!data1.errors) {
                    setResults({...data1, media_type: movieType});
                    console.log(data1);
                } else {
                    setResults({});
                }
                if (!data2.errors) {
                    setActors(data2);
                    console.log(data2);
                } else {
                    setActors({});
                }
            });
    }, []);

    let storedMovie = watchlist.find((o) => o.id === movieId);
    let storedMovieWatched = watched.find((o) => o.id === movieId);

    const watchlistDisabled = storedMovie
        ? true
        : storedMovieWatched
            ? true
            : false;

    const watchedDisabled = storedMovieWatched ? true : false;


    return (
        <div className="homepage">
            <Navbar />
            <div className="div_btn_back">
            <button onClick={goBack} className="btn_back_space"><FontAwesomeIcon icon={faArrowLeft} size="2xl" style={{color: "#ffffff",}} /></button>
            </div>
            <div className="geral_content_detail">
                
                <div className="poster_filme">
                    <div className="img_poster">
                        <img
                            className="poster"
                            src={`https://image.tmdb.org/t/p/w500////${results.poster_path}`}
                        />
                        <div className="btn_add">
                            <div className="btn_add_geral_div">
                                <button
                                    className="input_add_to_wth"
                                    disabled={watchlistDisabled}
                                    onClick={() => addMovieToWatchlist(results)}
                                >
                                    Add to Watchlist
                                </button>

                                <button
                                    className="input_add_to_wth"
                                    disabled={watchedDisabled}
                                    onClick={() => addMovieToWatched(results)}
                                >
                                    Add to Watched
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="info_about">
                        <h1>{results.name}{results.title}</h1>
          <div className="genres_filmes">
              {results.genres &&
              results.genres.map((genre) => (
                  <button key={genre.id} className="btn_genres">{genre.name}</button>
              ))}

          </div>
                        {movieType !== "movie" ? (
                            <div>
                                <h3 className="space_top">Number of Seasons:  <span>{results.number_of_seasons}</span></h3>
                            <h3 className="space_top">Total episodes:  <span>{results.number_of_episodes}</span></h3>
                            </div>
                        ) : ""}

          <h3 className="space_top">Overview</h3>
          <p className="overview_text">
          {results.overview}
          </p>

          <h3 className="space_top">Cast</h3>

          <div className="div_general_cast">
              {actors.cast &&
              actors.cast.map((cast) => (
                  <div key={cast.id} className="name_and_photo_cast">
                      {cast.profile_path ? (
                          <img className="cast_img" src={`https://image.tmdb.org/t/p/w500////${cast.profile_path}`}/>
                      ) : (
                          <img className="cast_img" src={newDefaultImage}/>
                      )}
                      <p className="name_cast">{cast.name}</p>
                  </div>
              ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
