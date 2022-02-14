import React, { useState } from "react";
import hashtag from "../../assets/hashtag.png";
import TagsCard from "./TagsCard";
import TagsSearch from "./TagsSearch";
import { Link } from "react-router-dom";
import { data } from "autoprefixer";

function TagsPosts() {
  const [questions, setQuestions] = useState([]);

  return (
    <div>
      {" "}
      <div className="flex justify-between">
        <div className="flex-col mb-4 content-center items-center">
          <div className="flex content-center items-center ">
            <h3 className="text-5xl text-shadow text-white font-semibold">
              TAGS
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 ml-2 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
          <p className="pt-2 text-secondary">
            Please select 2-3 tags in order to find your answer faster
          </p>
        </div>
        <img src={hashtag} className="w-24 mr-16  h-24" alt="" />
      </div>
      <TagsSearch questions={questions} setQuestions={setQuestions} />
      <div className=" flex flex-wrap justify-between pt-4  w-12/12 sm:w-11/12">
        {questions.map((question, key) => (
          <Link to={`/question/${question._id}`}>
            <TagsCard
              data={question}
              key={key}
              tags={question.tags}
              likes={question.likes}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TagsPosts;
