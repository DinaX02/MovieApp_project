import '../App.css';
import {Nav} from '../components/Navbar'
import {Home} from '../components/Home'
export function Homepage() {
    return (
      <div className="homepage">
      <Nav/>
      <Home/>
      </div>
    );
  }
  