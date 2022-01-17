import React, { useState } from "react";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div>
      <div class="navbar bg-primary  shadow-lg  text-neutral-content md:rounded-box">
        {/* LOGO AREA */}

        <div class="px-2 mx-2 navbar-start">
          <button
            onMouseEnter={(e) => {
              setIsShown(true);
            }}
            onClick={(e) => {
              setIsShown(false);
            }}
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
            class="h-7 w-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            />
          </svg>
          <a class="btn btn-ghost btn-sm mr-2 pt-1 text-lg md:text-sm rounded-btn">
            Log In
          </a>
        </div>
      </div>

      {isShown && (
        <div className="bg-primary px-6 mb-2 md:hidden shadow-lg">
          <ul className="flex-col">
            <a class="btn btn-ghost btn-sm mx-4 rounded-btn">Questions</a>
            <a class="btn btn-ghost btn-sm mx-4 rounded-btn">Tags</a>
            <a class="btn btn-ghost btn-sm mx-4 rounded-btn">Community</a>
            <a class="btn btn-ghost btn-sm mx-4 rounded-btn">About</a>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
