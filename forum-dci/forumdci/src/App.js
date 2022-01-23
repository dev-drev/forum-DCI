import React from "react";
import Navbar from "./components/Navbar.jsx";
import AdminPage from "./components/adminPage/AdminPage.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuestionsPage from "./components/QuestionsPage/QuestionsPage.jsx";
import SinglePostPage from "./components/QuestionPage/SinglePostPage.jsx";
import AboutPage from "./components/aboutPage/AboutPage.jsx";

function App() {
  console.log("hello");
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/answer" element={<SinglePostPage />} />
      </Routes>
    </Router>
  );
}

export default App;
