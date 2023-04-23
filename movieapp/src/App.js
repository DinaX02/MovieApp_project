import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import  {Homepage}  from "./pages/Homepage.js";
import { LogIn } from "./components/LogIn";
import { Register } from "./components/Register";

function App() {
  return (
    <div className="App">
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
