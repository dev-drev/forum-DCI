import React from "react";
import Login from "./components/Login/Login.jsx";
import Navbar from "./components/Navbar.jsx";

import Avatar from "./components/adminPage/Admin";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuestionsPage from "./components/Questions Page/QuestionsPage.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/questions" element={<QuestionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
