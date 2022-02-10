import React, { useState, useEffect } from "react";
import CardPopular from "./CardPopular";

import axios from "axios";
import { Link } from "react-router-dom";
const RecentPosts = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/questions").then((res) => {
      setRecentPosts(res.data);
      console.log(res.data);
    });
  }, []);

  const deleteQuestion = async (id) => {
    try {
      const data = await axios.delete(`http://localhost:5000/questions/${id}`);
      console.log(data);
    } catch (e) {
      console.log(e);
    }

    // setRecentPosts(recentPosts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <div className="flex-col mb-6 content-center items-center">
        <div className="flex content-center pb-3 items-center ">
          <h3 className="text-3xl text-white text-shadow font-semibold">
            RECENT POSTS
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 ml-2 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
        </div>
        <p className="text-secondary">
          This is a collection of the most rated posts
        </p>
      </div>

      <div className="  flex-wrap justify-between  w-12/12 sm:w-11/12">
        {recentPosts.map((post, id) => {
          return (
            <Link to={`/questions/${post._id}`}>
              <CardPopular
                likes={post.likes}
                title={post.title.substring(0, 80)}
                tags={post.tags}
                titleCont="h-[8vh] md:h-[4vh]"
                question={post.question.substring(0, 200)}
                style="py-4 sm:py-6  glass sm:w-[65vw] md:w-[72vw] w-[80vw] z-0 md:mb-4 rounded-2xl duration-[0.4s] hover:scale-105 px-6 my-2 shadow-lg "
                tagsStyle="text-zinc-100 rounded-full bg-primary  text-sm py-1 px-4  "
                titleStyle="text-lg"
                answers={post.answers}
                language={post.language}
                date={post.date}
                glass="glass"
              />
            </Link>
          );
        })}
      </div>

      <div className="w-full justify-end pt-4  flex w-12/12 sm:w-11/12 pr-4">
        <button className="btn pr-0 text-white btn-link">See More</button>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default RecentPosts;
