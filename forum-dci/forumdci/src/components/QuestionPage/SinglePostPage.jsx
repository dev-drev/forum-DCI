import React, { useState, useEffect } from "react";
import TextEditor from "./TextEditor.jsx";
import ComponentButton from "./ComponentButton";
import SinglePostPage2 from "./SinglePostPage2";
import axios from "axios";
import { useParams } from "react-router-dom";

function SinglePostPage({ id }) {
  const params = useParams();

  console.log(params.id);

  const [showAnswerArea, setShowAnswerArea] = useState(false);
  const [deleteID, setDeleteID] = useState("");
  const switchMode = () => {
    setShowAnswerArea((showMe) => !showMe);
  };

  const [singlePost, setSinglePost] = useState({});

  useEffect(async () => {
    try {
      const data = await axios.get(
        `http://localhost:5000/questions/${params.id}`
      );
      console.log(data.data);
      setSinglePost(data.data);
    } catch (e) {
      console.log(e);
    }
  }, []);

  // async function deleteQuestion() {
  //   try {
  //     const deleteQuestion = axios.delete(
  //       `http://localhost:500/questions/${id}`
  //     );
  //     console.log(deleteQuestion);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  return (
    <div className="bg-gray-500">
      <div className="container mx-auto min-h-screen bg-gray-200">
        <div className="bg-indigo-50 ">
          <h4 className="font-bold px-6 py-6 ">{singlePost.title}</h4>

          <ul className=" flex  px-6 py-4 ">
            <li className="mr-4">{singlePost.date.substring(0, 10)}</li>
            <li className="mr-4">active today</li>
            <li className="mr-4">viewed 5 times</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold px-6 py-6">Description</h4>
          <p className="px-6 py-6">
            <span>{singlePost.question}</span>
          </p>
        </div>

        <ul className=" flex  px-6 py-4 ">
          {singlePost.tags
            ? singlePost.tags.map((tag) => {
                return (
                  <li className="mr-4 px-2  bg-gray-500 rounded text-white">
                    {tag}
                  </li>
                );
              })
            : ""}
        </ul>
        <div className="text-center ">
          <ComponentButton
            onClick={switchMode}
            value={showAnswerArea ? "Hide Answer Form" : "Show Answer Form"}
          ></ComponentButton>
        </div>

        <div className="w-min mx-auto ">
          {showAnswerArea ? <TextEditor /> : ""}
        </div>
        <div className="ml-10 mr-10 mt-6 text-lg font-bold flex justify-between">
          <p>{singlePost.answers.length}</p>
          <p>Follow replies</p>
        </div>
        <div>
          <SinglePostPage2 />
          <SinglePostPage2 />
          <SinglePostPage2 />
          <SinglePostPage2 />
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;
