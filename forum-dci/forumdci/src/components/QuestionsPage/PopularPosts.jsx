import React, { useState, useEffect } from "react";
import CardPopular from "./CardPopular";
import messagesPic from "../../assets/messages.png";
import axios from "axios";
import { Link } from "react-router-dom";
import question from "./iconQuestion.png";
import { useParams } from "react-router-dom";

function PopularPosts(props) {
  const [posts, setPosts] = useState([]);
  const [searchedPosts, setSearchedPosts] = useState([]);
  const params = useParams();
  // GET ALL QUESTIONS
  useEffect(async () => {
    if (params.question) {
      axios
        .post(`http://localhost:5000/questions/${params.question}`)
        .then((res) => {
          {
            setSearchedPosts(res.data);
          }
        });
    }
    const response = await axios({
      url: "http://localhost:5000/questions",
      method: "get",
    });
    setPosts(response.data);
  }, []);
  // console.log(props.match.params.searchQuestion);
  //************************************************************ */

  // GET SINGLE QUESTION

  const [searchQuestion, setSearchQuestion] = useState("");

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
      // console.log(data);
      setSearchedPosts(data);
    } catch (e) {
      console.log(e);
    }
  };

  console.log("SEARCHED POSTS", searchedPosts);

  // **********************************************************

  return (
    <div>
      <div className="flex w-full justify-between">
        <div className="flex-col mb-4 content-center pt-2 items-center">
          {/* **************************** SEARCHED QUESTIONS SECTION ************************** */}

          <div className="pb-8 w-[70vw]">
            <div className="flex  justify-between w-[70vw]">
              <div className="relative ">
                <h3 className="text-5xl mb-4 flex items-center text-shadow text-zinc-100 font-semibold">
                  QUESTIONS
                </h3>
                <p className="text-secondary">What are you looking for?</p>
                {/* <p className="text-secondary">Type what you're looking for </p> */}
                <input
                  type="text"
                  value={searchQuestion}
                  onChange={searchHandler}
                  placeholder="Search Questions..."
                  className="  input mb-8 rounded-r-none w-[69vw] sm:w-[50vw] md:w-[40vw] mt-4 input-info input-bordered"
                />
                <button
                  onClick={searchSubmit}
                  className="absolute mt-4  text-white rounded-l-none btn btn-info"
                >
                  go
                </button>
              </div>
              <img
                src={messagesPic}
                className="w-32 h-32 hidden md:block"
                alt=""
              />
            </div>

            <div className="w-[100vw]">
              {searchQuestion ? (
                <h2 className="text-4xl text-zinc-100 p-2 pb-10 pt-6">
                  You searched for "{searchQuestion}"
                </h2>
              ) : (
                ""
              )}

              {searchedPosts.map((post, key) => {
                return (
                  <Link to={`/question/${post._id}`} key={key}>
                    <CardPopular
                      likes={post.likes}
                      userName={post.userName}
                      date={post.date}
                      title={post.title.substring(0, 80)}
                      tags={post.tags}
                      titleCont="h-[8vh] md:h-[4vh]"
                      question={post.question.substring(0, 200)}
                      style="py-4 sm:py-6  glass sm:w-[65vw] md:w-[72vw] w-[80vw] z-0 md:mb-4 rounded-2xl duration-[0.4s] hover:scale-105 px-6 my-2 shadow-lg "
                      tagsStyle="text-zinc-100 rounded-full bg-primary mt-2  text-sm py-1 px-4  "
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
          </div>

          {/* **************************** POPULAR QUESTIONS SECTION ************************** */}

          <div className="flex content-center pb-3 items-center ">
            <h3 className="text-3xl text-shadow text-zinc-100 font-semibold">
              POPULAR QUESTIONS
            </h3>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 hidden md:block ml-2 w-7"
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
      </div>

      <div className=" flex flex-wrap justify-between  w-12/12 sm:w-[72vw]">
        {posts.map((post, key) => {
          if (post.likes > 20)
            return (
              <Link to={`/question/${post._id}`} key={key}>
                <CardPopular
                  likes={post.likes}
                  title={post.title.substring(0, 90)}
                  tags={post.tags}
                  userName={post.userName}
                  style="py-4 sm:py-8  glass sm:w-[65vw] md:w-[34vw] md:h-[32vh] lg:w-[22vw] lg:h-[32vh] w-[80vw] z-0 md:mb-4 rounded-2xl duration-[0.4s] hover:scale-105 px-6 my-2 shadow-lg "
                  tagsStyle="text-zinc-100 rounded-full bg-primary  bg-opacity-5  md:text-sm py-1 px-4  "
                  titleStyle="text-md py-2 "
                  answers={post.answers}
                  titleCont="h-[8vh]  md:h-[12vh]"
                  language={post.language}
                  date={post.date}
                  glass="glass"
                />
              </Link>
            );
        })}

        {/* <CardPopular width={width} glass="glass" />
        <CardPopular width={width} glass="glass" />
        <CardPopular width={width} glass="glass" /> */}
      </div>
      <div className="w-full justify-end pt-1 flex w-12/12 sm:w-11/12 pr-4">
        <button className="btn pr-0 text-white btn-link">See More</button>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default PopularPosts;
