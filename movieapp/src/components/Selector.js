import { useEffect, useState} from 'react';
import '../App.css';
import React from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {useNavigate} from 'react-router-dom';
import { Home_shows } from './Home_shows';

export function Selector() {
  const navigate = useNavigate();
  let [red, setRed] = useState (false);
  let [chave, setChave] = useState ({});

  const options = [
    { value: 1, label: "Popular" }, { value: 28, label: "Action" }, { value: 12, label: "Adventure" }, { value: 16, label: "Animation" }, { value: 35, label: "Comedy" }, { value: 80, label: "Crime" }, { value: 99, label: "Docmentary" },  { value: 18, label: "Drama" }, { value: 10751, label: "Family" }, { value: 14, label: "Fantasy" }, { value: 36, label: "History" }, { value: 27, label: "Horror" }, { value: 10402, label: "Music" }, { value: 9648, label: "Mystery" }, { value: 10749, label: "Romance" }, { value: 878, label: "Science Fiction" }, { value: 10770, label: "Tv Movie" }, { value: 53, label: "Thriller" }, { value: 10752, label: "War" }, { value: 37, label: "Western" },
  ];
  const defaultOption = options[0];

  
  const onselect = (key) => {
    console.log(key.value);
    setChave(key.value);
    setRed(true);
  }

useEffect(() =>{
  if (red){
    if (chave != 1){
      if(window.location.pathname.includes('shows')){
        navigate(`/shows?id=${chave}`);
        window.location.reload();
      }else{
        navigate(`/movies?id=${chave}`);
        window.location.reload();
  
      }
    }else{
      if(window.location.pathname.includes('shows')){
        navigate(`/shows`);
        window.location.reload();
      }else{
        navigate(`/movies`);
        window.location.reload();
    }
    
      
    }
  }
}, [chave] )


    return (
      
        <div className='dropper'>
<label>Category: </label>
<Dropdown name="drop" options={options} onChange={onselect} placeholder="Popular" controlClassName='drop' placeholderClassName='droplace'  menuClassName='dropmenu'  className='drop'/>

</div>

    );
  }
  



  // import { useRef } from "react";
// import { useDraggable } from "react-use-draggable-scroll";
     // const ref = useRef();
    // const { events } = useDraggable(ref, {applyRubberBandEffect: true,});
  //       <div className="selector" {...events} ref={ref}>

// <button className={'clicked sel'}>Trending</button>
// <button className={'sel'}>Horror</button>
// <button className={'sel'}>Horror</button>
// <button className={'sel'}>Horror</button>
// <button className={'sel'}>Horror</button>
// <button className={'sel'}>Horror</button>
// <button className={'sel'}>Horror</button>
// <button className={'sel'}>Horror</button>
// <button className={'sel'}>Horror</button>
// <button className={'sel'}>Horror</button>
// <button className={'sel'}>Horror</button>

//       </div>