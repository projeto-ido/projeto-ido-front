import React, { useState, useEffect } from "react";
import api from "../api";
import MenuLateral from "../components/MenuLateral";

function Home({ children }) {

  return (
    <div className="funcional">
      {children}
    </div>
  );

}

export default Home;
