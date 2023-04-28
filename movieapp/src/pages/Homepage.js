import '../App.css';
import Nav from '../components/Navbar'
import {Home} from '../components/Home'
import { Selector } from '../components/Selector';

export function Homepage() {
    return (
      <div className="homepage">
      <Nav/>
      <Selector/>
      <Home/>
      </div>
    );
  }
  