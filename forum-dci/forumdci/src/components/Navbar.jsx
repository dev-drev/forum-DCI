import React, { useState } from "react";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <div class="navbar bg-primary  shadow-lg  text-neutral-content md:rounded-box">
        {/* LOGO AREA */}

        <div class="px-2 mx-2 navbar-start">
          <button
            onClick={() => {
              setIsShown(!isShown);
            }}
            // onClick={(e) => {
            //   setIsShown(false);
            // }}
            className="lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <a
            to="/"
            class="text-lg btn font-bold lg:ml-5 border-none hover:bg-transparent bg-transparent text-4xl"
          >
            AVAZ
          </a>
        </div>

        {/* MENU AREA */}
        <div class="hidden px-2 mx-2 lg:flex">
          <ul class="flex">
            <a class="btn btn-ghost btn-sm mx-4 rounded-btn">Questions</a>
            <a class="btn btn-ghost btn-sm mx-4 rounded-btn">Tags</a>
            <a class="btn btn-ghost btn-sm mx-4 rounded-btn">Community</a>
            <a class="btn btn-ghost btn-sm mx-4 rounded-btn">About</a>

            <button class="btn bg-secondary glass mx-8 text-primary hover:bg-gray-600 hover:text-white btn-sm ">
              ASK SOMETHING
            </button>
          </ul>
        </div>

        {/* LOG IN AREA */}
        <div class="navbar-end flex items-center content-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <a class="btn btn-ghost btn-sm mr-2 pt-1 text-lg md:text-sm rounded-btn">
            Log In
          </a>
        </div>
      </div>

      {isShown && (
        <div className="bg-primary h-60 px-6 mb-2 sm:hidden shadow-lg">
          <ul className="flex-col">
            <a href="">
              {" "}
              <li class="mx-2 pl-1  p-4 flex content-center items-center hover:glass rounded-btn">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>{" "}
                Questions{" "}
              </li>
            </a>

            <a href="">
              {" "}
              <li class="mx-2  pl-1  p-4 flex content-center items-center hover:glass rounded-btn">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                  />
                </svg>
                Tags{" "}
              </li>
            </a>

            <a href="">
              {" "}
              <li class="mx-2 pl-1 p-4 flex content-center items-center hover:glass rounded-btn">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Community{" "}
              </li>
            </a>

            <a href="">
              {" "}
              <li class="mx-2 pl-1 p-4 flex content-center items-center hover:glass rounded-btn">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                About{" "}
              </li>
            </a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
