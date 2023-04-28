import '../App.css';
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

import React, { useState } from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";


export function Selector() {

    const ref = useRef();
    const { events } = useDraggable(ref, {applyRubberBandEffect: true,});

    return (
      <div className="selector" {...events} ref={ref}>

<button className={'clicked sel'}>Trending</button>
<button className={'sel'}>Horror</button>
<button className={'sel'}>Horror</button>
<button className={'sel'}>Horror</button>
<button className={'sel'}>Horror</button>
<button className={'sel'}>Horror</button>
<button className={'sel'}>Horror</button>
<button className={'sel'}>Horror</button>
<button className={'sel'}>Horror</button>
<button className={'sel'}>Horror</button>
<button className={'sel'}>Horror</button>


      </div>
    );
  }