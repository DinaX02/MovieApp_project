import '../App.css';
import Navbar from '../components/Navbar'
import {Home_shows} from '../components/Home_shows'
import { Selector } from '../components/Selector';

export function Homepage_shows() {
    return (
      <div className="homepage">
      <Navbar/>
      <Selector/>
      <Home_shows/>
      </div>
    );
  }
  