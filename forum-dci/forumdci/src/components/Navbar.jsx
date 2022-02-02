import React, {useState} from "react";
import {Link, NavLink, BrowserRouter as Router, useNavigate} from "react-router-dom";
// import Fade from "react-reveal/Fade";
// import jwt from "jwt-decode";

import LightSpeed from "react-reveal/LightSpeed";

const Navbar = () => {
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated") === "true");

    const logoutUser = async (res)=>{
        localStorage.clear();
        setIsAuthenticated(false);
        navigate("/login");
        // res.redirect('/login')
    }

  return (
    <div className="relative  sm:mb-16 ">
      <div className="navbar bg-primary  shadow-lg text-neutral-content sm:fixed z-10  top-0 w-full left-0">
        {/* LOGO AREA */}
        <div className="px-2 mx-2 navbar-start">
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
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

                    <LightSpeed left>
                        {" "}
                        <Link
                            to="/"
                            class="text-lg btn font-bold lg:ml-5 border-none hover:bg-transparent bg-transparent text-4xl"
                        >
                            AVAZ
                        </Link>
                    </LightSpeed>
                </div>
                {/* MENU AREA */}
                <div className="hidden px-2 mx-2 lg:flex">
                    <ul className="flex">
                        <Link to="/questions" className="btn btn-ghost btn-sm mx-4 rounded-btn">
                            Questions
                        </Link>
                        <Link to="/tags" className="btn btn-ghost btn-sm mx-4 rounded-btn">
                            Tags
                        </Link>
                        <Link to="/community" className="btn btn-ghost btn-sm mx-4 rounded-btn">
                            Community
                        </Link>
                        <Link to="/about" className="btn btn-ghost btn-sm mx-4 rounded-btn">
                            About
                        </Link>{" "}
                        <button
                            className="btn bg-secondary glass mx-8 text-primary hover:bg-gray-600 hover:text-white btn-sm ">
                            <Link to="/ask">Ask Something</Link>
                        </button>
                    </ul>
                </div>
                {/* LOG IN AREA */}
                <div className="navbar-end flex items-center content-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
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
                    {
                        isAuthenticated ?
                            <>
                                <Link
                                    onClick={logoutUser}
                                    to="/login"
                                    className="btn btn-ghost btn-sm mr-2 pt-1 text-lg md:text-sm rounded-btn"

                                >
                                    LogOut

                                </Link>
                            </>
                            : <>
                                <Link
                                    to="/login"
                                    className="btn btn-ghost btn-sm mr-2 pt-1 text-lg md:text-sm rounded-btn"
                                >
                                    LogIn

                                </Link>
                            </>
                    }

                </div>
            </div>

      {isShown && (
        <div className="bg-primary h-60 px-6 sm:hidden shadow-lg">
          <ul className="flex-col text-zinc-100">
            <Link to="/questions">
              {" "}
              <li
                to="/questions"
                className="mx-2 pl-1  p-4 flex content-center items-center hover:glass rounded-btn"
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4"
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
            </Link>

            <Link to="/tags">
              {" "}
              <li className="mx-2  pl-1  p-4 flex content-center items-center hover:glass rounded-btn">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
                  />
                </svg>
                Tags{" "}
              </li>
            </Link>

            <Link to="/community">
              {" "}
              <li className="mx-2 pl-1 p-4 flex content-center items-center hover:glass rounded-btn">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Community{" "}
              </li>
            </Link>

            <Link to="/about">
              {" "}
              <li className="mx-2 pl-1 p-4 flex content-center items-center hover:glass rounded-btn">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                About{" "}
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
