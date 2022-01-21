import React from "react";
import Navbar from "./components/Navbar.jsx";
import SubNavbar from "./components/QuestionsPage/SubNavbar";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
// import QuestionsPage from "./components/QuestionsPage/QuestionsPage.jsx";
import SinglePostPage from "./components/QuestionPage/SinglePostPage.jsx";
// import Footer from "./components/Footer.jsx";
import TextEditor from "./components/QuestionPage/TextEditor";
import AskSomethingPage from "./components/QuestionPage/AskSomethingPage";

function App() {
  return (
    <Router>
      <Navbar />
       <SubNavbar />
      <div>
        <Routes>
          {/*<Route path="/questions" element={<QuestionsPage />} />*/}
          {/*<Route path="/answer" element={<SinglePostPage />} />*/}
          <Route path="/ask" element={<AskSomethingPage />} />
          <Route path="/answer" element={<TextEditor />} />
          <Route path="/post" element={<SinglePostPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
