import '../App.css'
import React from 'react';
import { ReactComponent as Logo } from '../assets/logo.svg';

export function Nav () {
    return(
        <div className='navbar'>
            <Logo className={'logo'}/>
            <h6 className={'selected'}>Movies</h6>
            <h6>TV Shows</h6>
        </div>
    );
}