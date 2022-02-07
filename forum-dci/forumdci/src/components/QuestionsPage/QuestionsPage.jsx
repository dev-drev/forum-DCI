import React from "react";
import SubNavbar from "./SubNavbar";
import PopularPosts from "./PopularPosts";
import BodyPosts from "./BodyPosts";
import Navbar from "../Navbar";

export default function QuestionsPage() {
  return (
    <div>
        <Navbar/>
        <BodyPosts />
    </div>
  );
}
