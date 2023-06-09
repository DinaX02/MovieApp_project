import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import  {Homepage}  from "./pages/Homepage.js";
import { LoginPage } from "./pages/LoginPage.js";
import { RegisterPage } from "./pages/RegisterPage.js";
import { DetailPAGE } from "./pages/DetailPage";
import { Watchlist } from "./components/Watchlist";
import { WatchlistPage } from "./pages/WatchlistPage";
import { WatchedPage } from "./pages/WatchedPage";
import { GlobalProvider } from "./context/GlobalState";
import { AddToWatchlist } from "./pages/ADDPage copy";
import { Homepage_shows } from "./pages/Homepage_shows";
import { LandingPage } from "./pages/LandingPage";
function App() {
  return (
    <div className="App">
      <GlobalProvider>
  <BrowserRouter>
        <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/movies" element={<Homepage />} />
          <Route path="/shows" element={<Homepage_shows />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/details/:movieType/:movieId" element={<DetailPAGE />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
          <Route path="/addToWatchlist" element={<AddToWatchlist />} />
          <Route path="/watchedlist" element={<WatchedPage/>} />
        </Routes>
      </BrowserRouter>
      </GlobalProvider>
        
    </div>
  );
}

export default App;
