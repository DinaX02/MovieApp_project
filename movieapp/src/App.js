import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import  {Homepage}  from "./pages/Homepage.js";


function App() {
  return (
    <div className="App">
  <BrowserRouter basename={window.location.pathname || ''}>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
