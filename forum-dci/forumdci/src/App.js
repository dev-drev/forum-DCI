import React from "react";
import Navbar from "./components/Navbar.jsx";


import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import QuestionsPage from "./components/Questions Page/QuestionsPage.jsx";
import SinglePostPage from "./components/QuestionPage/SinglePostPage.jsx";

function App() {
    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/questions" element={<QuestionsPage/>}/>
                <Route path="/question" element={<SinglePostPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
