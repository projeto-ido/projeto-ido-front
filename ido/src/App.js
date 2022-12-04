import React from "react";
import SiteInstitucional from "./pages/SiteInstitucional/SiteInstitucional";
import Perfil from '../src/pages/Perfil/Perfil';
import Home from "./pages/Home/Home";
import { Cadastro } from "./pages/SignUp/Cadastro";
import { Login } from "./pages/SignIn/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SiteInstitucional />}/>
          <Route exact path="/cadastro" element={<Cadastro/>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/perfil" element={<Perfil />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
