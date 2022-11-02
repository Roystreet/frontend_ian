import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./component/navbar/navbar";
import Crosssold from "./pages/crosssold/crosssold";
import Feeling from "./pages/feeling/feeling";
import InteractiveBot from "./pages/interactivebot/interactivebot";
import { Divider } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="separetor"></div>
      <Divider></Divider>
      <div className="separetor"></div>
      <Routes>
        <Route path="/" element={<Feeling />}></Route>
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