import React from "react";
import Navbar from "./components/Navbar.jsx";
import SubNavbar from "./components/QuestionsPage/SubNavbar";
<<<<<<< HEAD
import Avatar from "./components/adminPage/Admin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuestionsPage from "./components/QuestionsPage/QuestionsPage.jsx";
import SinglePostPage from "./components/QuestionPage/SinglePostPage.jsx";
import Footer from "./components/Footer.jsx";
import TagsBody from "./components/TagsPage/TagsBody.jsx";
=======
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
// import QuestionsPage from "./components/QuestionsPage/QuestionsPage.jsx";
import SinglePostPage from "./components/QuestionPage/SinglePostPage.jsx";
// import Footer from "./components/Footer.jsx";
import TextEditor from "./components/QuestionPage/TextEditor";
import AskSomethingPage from "./components/QuestionPage/AskSomethingPage";
>>>>>>> 4dbb7754b857cd62db0fa6da83c4eb8e84367242

function App() {
  return (
    <Router>
      <Navbar />
       <SubNavbar />
      <div>
        <Routes>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
