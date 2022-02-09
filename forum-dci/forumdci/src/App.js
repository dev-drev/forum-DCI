import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar.jsx";
import AdminPage from "./components/AdminPage/AdminPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionsPage from "./components/QuestionsPage/QuestionsPage.jsx";
import SinglePostPage from "./components/QuestionPage/SinglePostPage.jsx";
import AboutPage from "./components/AboutPage/AboutPage";
import TagsBody from "./components/TagsPage/TagsBody.jsx";
import Community from "./components/Community/Community.jsx";
import Ask from "./components/QuestionPage/AskSomethingPage";
import Login from "./components/Login/Login";
import Footer from "./components/Footer.jsx";
import axios from "axios";
import Home from "./components/HomePage/Home.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/tags" element={<TagsBody />} />
        <Route path="/community" element={<Community />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/login" element={<Login />} />
        <Route path={`/questions/:id`} element={<SinglePostPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
