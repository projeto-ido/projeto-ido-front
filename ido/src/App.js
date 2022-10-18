import SiteInstitucional from "./pages/SiteInstitucional";
import './assets/css/index.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Cadastro } from "./pages/SignUp/Cadastro";
import { Login } from "./pages/SignIn/Login";
import './assets/css/reset.css'

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<SiteInstitucional />}/>
          <Route exact path="/SignUp" element={<Cadastro/>}/>
          <Route path="/SignIn" element={<Login />}/>


        </Routes>
      </Router>
    </>
  );
}

export default App;
