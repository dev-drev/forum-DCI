import React from "react";
import SubNavbar from "./SubNavbar";
import PopularPosts from "./PopularPosts";
import BodyPosts from "./BodyPosts";

export default function QuestionsPage(props) {
  console.log("PARAMS", props);

  return (
    <div>
      <BodyPosts />
    </div>
  );
}
