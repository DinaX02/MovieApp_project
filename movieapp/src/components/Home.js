import '../App.css';
import React, { useEffect, useState } from 'react';
import defaultImage from "../assets/default_cast.jpg";


let page=0;
export function Home() {
  const [results,setResults] = useState({});
  const [count, setCount] = useState(1);
  const [previous, setPrevious] = useState("none");

  useEffect(() => {
    console.log(`aqui vai ${count}`);
      fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=723206ae2e0c5c92763af7ff78b43766&language=en-US&page=${count}`
      )
          .then((res) => res.json())
          .then((data) => {
              if (!data.errors) {
                  setResults(data);
                  console.log(data);

              } else {
                  setResults({});
              }
          });

if( count > 1){
  setPrevious("block");
}else{
  setPrevious("none");

}

  }, [count]);



    return (
      <div className="home">
      <div className="home">

        {results.results &&
              results.results.slice(0,16).map((results) => (
                <div key={results.id} className="home">

                      {results.poster_path ? (
                        <img
                          className="card"
                          src={`https://image.tmdb.org/t/p/w200${results.poster_path}`}
                          alt={`${results.original_title} Poster`}
                        />
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
              <button onClick={() => {setCount(count - 1);   console.log(count);}} className={"showmore"} style={{display: previous}}>Previous Page</button>
              
              <button onClick={() => {setCount(count + 1);   console.log(count);}} className={"showmore"}>Next Page</button>
      
      </div>
    );

    }