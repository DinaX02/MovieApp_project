import '../App.css';
import React, { useState } from 'react';

let page=1;
export function Home() {

  const [rest, setRest] = useState("unknown");



  function handleChange(){
    page++;

  fetch("https://api.themoviedb.org/3/movie/popular?api_key=723206ae2e0c5c92763af7ff78b43766&language=en-US&page=" + page)
  .then((res) => res.json())
  .then((json) => {
    setRest(json);
  });

  for (rest["id"] in rest){
return(
    <div className='card'><p  className={'cate'}>{rest["vote_average"]}</p><h4 className={'header'}>{rest["original_title"]}</h4></div>

)
  }

}

    return (
      <div className="home">
        <br></br>
        <button className={'showmore'} onClick={handleChange}>Show More</button>

      </div>
    );

    }