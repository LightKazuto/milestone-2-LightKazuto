import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom"
import HomeComponent from "./Pages/Home"
import PokeNewRegister from './Pages/newRegister';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeComponent/>} />
        <Route path='/newRegister' element={<PokeNewRegister/>} />
      </Routes>
    </div>
  );
}

export default App;
