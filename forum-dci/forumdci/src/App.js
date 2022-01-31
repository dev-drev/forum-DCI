import React from "react";
import Navbar from "./components/Navbar.jsx";
import AdminPage from "./components/adminPage/AdminPage.jsx";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import QuestionsPage from "./components/QuestionsPage/QuestionsPage.jsx";
import SinglePostPage from "./components/QuestionPage/SinglePostPage.jsx";
import AboutPage from "./components/aboutPage/AboutPage.jsx";
import TagsBody from "./components/TagsPage/TagsBody.jsx";
import Community from "./components/Community/Community.jsx";
import Ask from "./components/QuestionPage/AskSomethingPage";
import Login from "./components/Login/Login";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/answer" element={<SinglePostPage />} />
        <Route path="/tags" element={<TagsBody />} />
        <Route path="/community" element={<Community />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
