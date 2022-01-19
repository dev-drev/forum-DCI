import React from "react";
import Login from "./components/Login/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import AdminPage from "./components/adminPage/AdminPage";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuestionsPage from "./components/Questions Page/QuestionsPage.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <AdminPage />
      <Route path="/questions" element={<QuestionsPage />} />
    </Router>
  );
}

export default App;
