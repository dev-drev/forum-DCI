import React from "react";
import Navbar from "./components/Navbar.jsx";
import Avatar from "./components/adminPage/Avatar.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuestionsPage from "./components/Questions Page/QuestionsPage.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Avatar />

      <Route path="/questions" element={<QuestionsPage />} />
    </Router>
  );
}

export default App;
