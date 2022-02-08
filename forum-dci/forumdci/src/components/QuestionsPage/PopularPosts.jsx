import React, { useState, useEffect } from "react";
import CardPopular from "./CardPopular";
import messagesPic from "../../assets/messages.png";
import axios from "axios";

function PopularPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/questions").then((res) => {
      if (res.data.likes > 20) {
        setPosts(res.data);
      }
      console.log(res.data);
    });
  }, []);

  const [searchQuestion, setSearchQuestion] = useState("");

  const searchHandler = (e) => {
    setSearchQuestion(e.target.value);
  };
  console.log(searchQuestion);

  const searchSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await axios.post(
        `http://localhost:5000/questions/${searchQuestion}`
      );
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const width = "sm:w-56";
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex-col mb-4 content-center pt-4 items-center">
          <div className="flex content-center pb-3 items-center ">
            <h3 className="text-3xl text-shadow text-zinc-100 font-semibold">
              POPULAR QUESTIONS
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

        <img src={messagesPic} className="w-20 h-20" alt="" />
      </div>
      <div className="pb-8">
        <div className="relative ">
          <input
            type="text"
            value={searchQuestion}
            onChange={searchHandler}
            placeholder="Search Questions..."
            className=" pr-32 input rounded-r-none mt-4 input-info input-bordered"
          />
          <button
            onClick={searchSubmit}
            className="absolute mt-4  text-white rounded-l-none btn btn-info"
          >
            go
          </button>
        </div>
      </div>
      <div className=" flex flex-wrap justify-between  w-12/12 sm:w-11/12">
        <CardPopular width={width} glass="glass" />
        <CardPopular width={width} glass="glass" />
        <CardPopular width={width} glass="glass" />
        <CardPopular width={width} glass="glass" />
      </div>
      <div className="w-full justify-end pt-1 flex w-12/12 sm:w-11/12 pr-4">
        <button className="btn pr-0 text-white btn-link">See More</button>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default PopularPosts;
