import SiteInstitucional from "./pages/SiteInstitucional";
import './assets/css/index.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cadastro } from "./pages/SignUp/Cadastro";
import { Login } from "./pages/SignIn/Login";
import './assets/css/reset.css'
import React from 'react';
import Perfil from '../src/pages/Perfil';
import '../src/assets/css/perfil.css'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SiteInstitucional />}/>
          <Route exact path="/signup" element={<Cadastro/>}/>
          <Route path="/signin" element={<Login />}/>
          <Route path="/perfil" element={<Perfil />}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
