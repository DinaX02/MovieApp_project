import '../App.css';
import React, { useEffect, useState } from 'react';
import defaultImage from "../assets/default_cast.jpg";
import { Link } from "react-router-dom";


let page=0;
export function Home() {
  const [results,setResults] = useState({});
  const [count, setCount] = useState(1);
  const [previous, setPrevious] = useState({class:"showless", click:() => {setCount(count - 1)}});

  useEffect(() => {
    if(window.location.href.includes('id')){
      fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=723206ae2e0c5c92763af7ff78b43766&language=en-US&page=${count}&with_genres=${window.location.href.split('id=')[1]}`
      )
          .then((res) => res.json())
          .then((data) => {
              if (!data.errors) {
                  setResults(data);

              } else {
                  setResults({});
              }
          });
        }else{
          fetch(
            `https://api.themoviedb.org/3/movie/popular?api_key=723206ae2e0c5c92763af7ff78b43766&language=en-US&page=${count}`
        )
            .then((res) => res.json())
            .then((data) => {
                if (!data.errors) {
                    setResults(data);
  
                } else {
                    setResults({});
                }
            });
        }

if( count > 1){
  setPrevious({class:"showmore", click:() => {setCount(count - 1);}});
}else{
  setPrevious({class:"showless", click:undefined});

}

  }, [count]);


    return (
      <div className="home">
      <div className="home">

        {results.results &&
              results.results.slice(0,16).map((results) => (
                <div key={results.id} className="home">

                      {results.poster_path ? (
                        <Link to={`/details/movie/${results.id}`}>
                        <img
                          className="card"
                          src={`https://image.tmdb.org/t/p/w200${results.poster_path}`}
                          alt={`${results.original_title} Poster`}
                        />
                        </Link>
                      ) : (
                        <img
                        className="card"
                        src={defaultImage}
                        alt={`Poster`}
                      />                      )}
                      </div>
              ))}
              <br/>

              </div>
              <button onClick={previous.click} className={previous.class}>Previous Page</button>
              
              <button onClick={() => {setCount(count + 1);}} className={"showmore"}>Next Page</button>
      
      </div>
    );

    }