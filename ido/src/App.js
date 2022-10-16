import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import { Cadastro } from "./pages/SignUp/Cadastro";
import { SignUp } from "./components/Forms/SingUp/SignUp";

import { Login } from "./pages/SignIn/Login";

import './assets/css/reset.css'

function App() {
  return (
    <>
      <Router>
        <Routes>

          {/* <Route path="/" element={<SiteInstirucioanl />}/> */}
          <Route exact path="/SignUp" element={<Cadastro/>}/>
          <Route path="/SignIn" element={<Login />}/>


        </Routes>
      </Router>
    </>
  );
}

export default App;
