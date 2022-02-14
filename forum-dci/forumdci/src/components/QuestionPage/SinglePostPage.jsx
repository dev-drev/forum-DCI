import React, { useState, useEffect } from "react";
import TextEditor from "./TextEditor.jsx";
import ComponentButton from "./ComponentButton";
import SinglePostPage2 from "./SinglePostPage2";
import axios from "axios";

import { useNavigate, useParams } from "react-router-dom";

function SinglePostPage({ id }) {
  const params = useParams();
  const navigate = useNavigate();

  console.log(params.id);

  const [showAnswerArea, setShowAnswerArea] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showDeleted, setShowDeleted] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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

  useEffect(() => {
    setIsAuthenticated(localStorage.getItem("isAuthenticated"));
  }, []);

  async function deleteQuestion() {
    try {
      const deleteQuestion = await axios.delete(
        `http://localhost:5000/questions/${params.id}`
      );
      setShowDeleted(true);
      setTimeout(() => navigate("/"), 3000);
    } catch (error) {
      console.log(deleteQuestion);
      console.log(error);
    }
  }

  return (
    <div className=" bg-[#3d4451]">
      <div className="container mx-auto min-h-screen  bg-[#3d4451]">
        <div className="bg-primary   text-zinc-100 shadow-sm bg-opacity-15  border-zinc-600  pb-12 ">
          <h4 className="font-bold text-3xl pb-6 pr-32 pt-10 pl-10 ">
            {singlePost.title}
          </h4>

          <ul className=" flex  px-10">
            <li className="mr-4">
              Asked on{" "}
              {singlePost.date ? singlePost.date.substring(0, 10) : Date.now()}
            </li>
            <li className="mr-4">viewed 5 times</li>
            <div className=" flex items-center content-center text-secondary">
              <span className="text-sm italic">drevil dev</span>
              <div className="bg-gray-100 w-5 h-5 ml-2 rounded-full"></div>
            </div>
          </ul>
        </div>
        <div className="px-10  bg-[#505968] rounded text-zinc-100 py-6">
          <h4 className="font-bold text-secondary">Description</h4>
          <p className="py-6 pr-32  font-semibold">
            <span>{singlePost.question}</span>
          </p>
          <ul className=" flex pt-4 ">
            {singlePost.tags
              ? singlePost.tags.map((tag) => {
                  return (
                    <li className="mr-4 px-6 py-1 bg-secondary glass rounded-full text-primary  ">
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
          <div className="flex items-center content-center text-white text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>

            <span className="pl-1 text-sm text-white  font-semibold">
              {singlePost.likes}
            </span>
            <span className="pl-1 text-sm text-white  font-semibold">
              <input type="checkbox" checked={isLiked} onChange={setIsLiked} />{" "}
            </span>
          </div>
          <div className=" mr-10 mt-6 text-lg font-bold flex justify-between">
            <p>Answers: {singlePost.answers ? singlePost.answers.length : 0}</p>
            <p>Follow replies</p>
          </div>
        </div>

        {/* <div className="text-center ">
          <ComponentButton
            onClick={switchMode}
            value={showAnswerArea ? "Hide Answer Form" : "Show Answer Form"}
          ></ComponentButton>
        </div> */}

        <div>
          <SinglePostPage2 />
          <SinglePostPage2 />
          <SinglePostPage2 />
          <SinglePostPage2 />
        </div>
      </div>

      {isAuthenticated ? (
        <button className="btn m-8 ml-20 bg-primary" onClick={deleteQuestion}>
          Delete this question
        </button>
      ) : (
        ""
      )}

      {showDeleted ? (
        <p className="mb-8 ml-20 text-red-600">
          You deleted your question correctly!
        </p>
      ) : (
        ""
      )}
    </div>
  );
}

export default SinglePostPage;
