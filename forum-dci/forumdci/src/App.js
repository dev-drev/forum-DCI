import React from "react";
import Login from "./components/Login/Login.jsx";
import Navbar from "./components/Navbar.jsx";
<<<<<<< HEAD
import Avatar from "./components/adminPage/Admin";

=======
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuestionsPage from "./components/Questions Page/QuestionsPage.jsx";
>>>>>>> ff9ca2ab9cc4d44a345aba5e92412bc12ddebb9c
function App() {
  return (
<<<<<<< HEAD
    <div>
    <Navbar/>
    </div>
=======
    <Router>
      <Navbar />
<<<<<<< HEAD
      <Avatar />
    </div>
=======

      <Routes>
        <Route path="/questions" element={<QuestionsPage />} />
      </Routes>
    </Router>
>>>>>>> ff9ca2ab9cc4d44a345aba5e92412bc12ddebb9c
  );
}

export default App;
