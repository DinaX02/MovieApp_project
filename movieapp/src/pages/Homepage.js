import '../App.css';
import Navbar from '../components/Navbar'
import {Home} from '../components/Home'
import { Selector } from '../components/Selector';

export function Homepage() {
    return (
      <div className="homepage">
      <Navbar/>
      <div  className='heading'>
<h2>Movies</h2>
</div>
      <Selector/>
      <Home/>
      </div>
    );
  }
  