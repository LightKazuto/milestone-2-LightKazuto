import React from "react";
import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginComponent from "./Pages/Login";
import PokeNewRegister from "./Pages/newRegister";
import PrivateRoute from "./Component/PrivateRouteComponent";
import DahsboardComponent from "./Pages/Dashboard";
import PokedexComponent from "./Pages/PokeDex";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginComponent />} />
        <Route path="/newRegister" element={<PokeNewRegister />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="Dashboard" element={<DahsboardComponent />} />
          <Route path="PokeDex" element={<PokedexComponent />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
