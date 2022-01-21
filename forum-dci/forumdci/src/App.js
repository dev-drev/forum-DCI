import React from "react";
import Navbar from "./components/Navbar.jsx";
import SubNavbar from "./components/QuestionsPage/SubNavbar";

import Avatar from "./components/adminPage/Admin";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuestionsPage from "./components/QuestionsPage/QuestionsPage.jsx";
import SinglePostPage from "./components/QuestionPage/SinglePostPage.jsx";
import Footer from "./components/Footer.jsx";
import TagsBody from "./components/TagsPage/TagsBody.jsx";
import Community from "./components/Community/Community.jsx";

import TextEditor from "./components/QuestionPage/TextEditor";
import AskSomethingPage from "./components/QuestionPage/AskSomethingPage";
import Login from "./components/Login/Login.jsx";

function App() {
  console.log("hello");
  return (

    <div>
      <Router>
        <Navbar />

        <div>
          <Routes>
            <Route path="/" exact>
              {/* <SubNavbar />
              <Home /> */}
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/questions" element={<QuestionsPage />}></Route>
            <Route path="/tags" element={<TagsBody />} />
            <Route path="/answer" element={<SinglePostPage />} />
            <Route path="/ask" element={<AskSomethingPage />} />
            <Route path="/answer" element={<TextEditor />} />
            <Route path="/post" element={<SinglePostPage />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </Router>

      <Footer />
    </div>

  );
}

export default App;
