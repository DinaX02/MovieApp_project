import '../App.css';
import Navbar from '../components/Navbar'
import { HeroLandingPage } from '../components/HeroLandinfPage';
import { HeroLandingPageInfo } from '../components/LandingPageInfo';


export function LandingPage() {
    return (
      <div className="homepage">
      <Navbar/>
      <div className={"land"}>
          <HeroLandingPage/>
          <HeroLandingPageInfo/>
      </div>

      </div>
    );
  }
  