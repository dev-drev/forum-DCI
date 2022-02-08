import React from "react";
import Footer from "../Footer";
import SubNavbar from "../QuestionsPage/SubNavbar";
import About from "./About";
import Navbar from "../Navbar";

const AboutPage = () => {
    return (
        <div>
            <Navbar/>
            <SubNavbar/>
            <About/>
            {/* <Footer/> */}
        </div>
    );
};
export default AboutPage;
