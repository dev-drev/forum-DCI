import React from "react";
import Login from "./components/Login/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import AdminPage from "./components/adminPage/AdminPage.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuestionsPage from "./components/Questions Page/QuestionsPage.jsx";
import SinglePostPage from "./components/QuestionPage/SinglePostPage.jsx";
import AboutPage from "./components/aboutPage/AboutPage.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <AdminPage />
      <AboutPage />
      <Route path="/questions" element={<QuestionsPage />} />
    </Router>
  );
}

export default App;
