import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home"

import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/Home.scss";
import "./styles/Footer.scss";

function App() {
  return (
   <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    <Footer />
   </Router>
  );
}

export default App;
