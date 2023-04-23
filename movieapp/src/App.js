import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import  {Homepage}  from "./pages/Homepage.js";
import { LoginPage } from "./pages/LoginPage.js";
import { RegisterPage } from "./pages/RegisterPage.js";

function App() {
  return (
    <div className="App">
  <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
