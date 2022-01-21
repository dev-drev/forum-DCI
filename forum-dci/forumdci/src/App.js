import React from "react";
import Login from "./components/Login/Login.jsx";
import Navbar from "./components/Navbar.jsx";
import SubNavbar from "./components/QuestionsPage/SubNavbar";
import Avatar from "./components/adminPage/Admin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuestionsPage from "./components/QuestionsPage/QuestionsPage.jsx";
import SinglePostPage from "./components/QuestionPage/SinglePostPage.jsx";
import Footer from "./components/Footer.jsx";
import TagsBody from "./components/TagsPage/TagsBody.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      {/* <SubNavbar /> */}
      <div>
        <Routes>
          <Route path="/questions" element={<QuestionsPage />} />
          <Route path="/answer" element={<SinglePostPage />} />
          <Route path="/tags" element={<TagsBody />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
