import '../App.css';
import Navbar from '../components/Navbar'
import {Home} from '../components/Home'
import { Selector } from '../components/Selector';

export function Homepage() {
    return (
      <div className="homepage">
      <Navbar/>
      <Selector/>
      <Home/>
      </div>
    );
  }
  