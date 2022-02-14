import React, { useEffect, useState } from "react";

function TagsCard({ data, tags, likes }) {
  const [user, setUser] = useState({});
  // const [tag, setTag] = useState("all");
  // const [questions, setQuestions] = useState([]);

  //fetch user from database
  useEffect(() => {
    const fetchData = async () => {
      const currentUser = JSON.parse(localStorage.getItem("user"));
      const res = await fetch(`http://localhost:5000/users/${currentUser.id}`);
      const userData = await res.json();
      setUser(userData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <section
        // className={`lg:w-56 w-3xl glass z-0 rounded-2xl px-6 py-1 my-2 sm:py-6 shadow-lg`}
        className="py-4 sm:py-8  glass sm:w-[65vw] md:w-[34vw] md:h-[32vh] lg:w-[22vw] lg:h-[32vh] w-[80vw] z-0 md:mb-4 rounded-2xl duration-[0.4s] hover:scale-105 px-6 my-2 shadow-lg "
      >
        {/* FIRST BAR - DATE+ICON */}
        <div className="flex items-center pb-4  justify-between">
          <span className="text-gray-400 text-sm">2d ago</span>
          <div className=" flex items-center content-center text-secondary">
            <span className="text-sm italic">Username</span>
            <div className="bg-gray-100 w-5 h-5 ml-2 rounded-full"> </div>
          </div>
        </div>

        {/* HEADING */}
        <h5 className="text-sm text-zinc-100 font-semibold">{data.title}</h5>
        {/* ACTIVE */}
        <p className="text-secondary hidden text-sm sm:block font-semibold mt-2.5">
          Active
        </p>

        {/* ICONS LIKES+ ANSWERS */}

        <div className="flex w-10 justify-between">
          {" "}
          <div className="mt-3 flex items-center content-center text-white text-sm">
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
              {likes}
            </span>
          </div>
          <div className="px-6 mt-3 flex items-center content-center text-white text-sm">
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
                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
              />
            </svg>

            <span className="pl-1 text-white text-sm font-semibold">39</span>
          </div>
          <div className="text-zinc-100 rounded-full bg-primary  bg-opacity-5  md:text-sm py-1 px-4 ">
            {tags}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TagsCard;
