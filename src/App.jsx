// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import background from "./assets/image/bg1.jpg";

const App = () => (
  <BrowserRouter>
    {/* GLOBAL BACKGROUND */}
    <div
      className="min-h-screen w-full bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* White overlay for readability */}
      <div className="min-h-screen w-full bg-white/85">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* add other pages here */}
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
