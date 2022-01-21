import React from "react";
import Login from "./components/Login/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import Community from "./components/Community/Community.jsx"

import Avatar from "./components/adminPage/Admin";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuestionsPage from "./components/Questions Page/QuestionsPage.jsx";

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
