import '../App.css';
import Navbar from '../components/Navbar'
import {Home} from '../components/Home'
export function Homepage() {
    return (
      <div className="homepage">
      <Navbar/>
      <Home/>
      </div>
    );
  }
  