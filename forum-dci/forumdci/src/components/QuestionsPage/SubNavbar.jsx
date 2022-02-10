import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const SubNavbar = () => {
  let navigate = useNavigate();

  //************************************************************ */

  // GET SINGLE QUESTION

  const [searchQuestion, setSearchQuestion] = useState("");
  const [searchedPosts, setSearchedPosts] = useState([]);

  const searchHandler = (e) => {
    setSearchQuestion(e.target.value);
  };
  console.log(searchQuestion);

  const searchSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        `http://localhost:5000/questions/${searchQuestion}`
      );
      console.log(data);
      setSearchedPosts(data);
      navigate("/questions");
    } catch (e) {
      console.log(e);
    }
  };

  console.log("SEARCHED POSTS", searchedPosts);

  // **********************************************************
  return (
    <nav className=" bg-secondary  bg-opacity-90 shadow-xl z-50 flex justify-center px-2 sm:px-4 py-2  ">
      <div className=" hidden sm:block"></div>
      <div className="mt-1 form-control">
        <div className="flex content-center items-center">
          <input
            type="text"
            value={searchQuestion}
            placeholder="Search"
            onChange={searchHandler}
            className=" pr-56 input border-1 border-primary bg-zinc-200 md:w-[35vw] h-[6.5vh] rounded-r-none h-12"
          />
          <Link to="/questions">
            <button
              onClick={searchSubmit}
              className="rounded-l-none border-none btn h-[5vh] bg-primary"
            >
              go
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;
