import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./component/navbar/navbar";
import Crosssold from "./pages/crosssold/crosssold";
import Questions from "./pages/Questions/questions";
import InteractiveBot from "./pages/interactivebot/interactivebot";
import { Divider } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="separetor"></div>
      <Divider></Divider>
      <Routes>
        <Route path="/" element={<Questions />}></Route>
        <Route
          path="/botinteractivo"
          element={<InteractiveBot Feeling />}
        ></Route>
        <Route path="/ventacruzada" element={<Crosssold />}></Route>
      </Routes>
    </div>
  );
}

export default App;
