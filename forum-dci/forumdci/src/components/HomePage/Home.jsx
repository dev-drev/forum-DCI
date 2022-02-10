import React from "react";
import SubNavbar from "../QuestionsPage/SubNavbar";
import womanImage from "../../assets/woman.png";
import coding from "../../assets/coding_1.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-screen h-[125vh] md:h-screen relative">
      <SubNavbar />

      <div class=" mt-24 lg:mt-22 px-24">
        <div class="hero-overlay bg-opacity-60"></div>

        <div class="text-center flex   text-neutral-content">
          <div className=" hidden lg:block">
            <img
              src={womanImage}
              className="md:max-w-[25vw] max-w-[40vw] "
              alt=""
            />
          </div>
          <div className=" flex flex-col items-center justify-center md:w-[37vw] ">
            {" "}
            <h1 class="mb-5 leading-[55px] w-full text-5xl font-bold ">
              Looking for <br />
              &#60;something/&#62;?
            </h1>{" "}
            <p class="mb-10 px-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. error.
              There's A Bit Of Software In All Of Us.
            </p>
            <Link to="/questions">
              <button class="btn md::w-[10vw] hover:bg-secondary hover:text-primary hover:scale-105 bg-primary">
                Get Started
              </button>{" "}
            </Link>
          </div>
        </div>
      </div>

      <div>
        <img
          src={coding}
          className="absolute bottom-[30vh] z-40 max-w-[9rem] right-[21vw] md:right-[16vw] lg:right-[14vw]"
          alt=""
        />{" "}
      </div>

      <svg
        width="250"
        height="250"
        className="bg-secondary bg-opacity-80 shadow-xl z-30 rounded-full absolute bottom-[22vh] right-[10vw] "
        viewBox="0 0 317 321"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_124_13)">
          <circle
            cx="154.5"
            cy="154.5"
            r="154.5"
            // fill="#c2f8ff"
            fill-opacity="0.60"
            shape-rendering="crispEdges"
          />
        </g>

        <defs>
          <filter
            id="filter0_d_124_13"
            x="0"
            y="0"
            width="317"
            height="321"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="4" dy="8" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_124_13"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_124_13"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <svg
        className="absolute   bottom-0 right-0"
        width="490"
        height="335"
        viewBox="0 0 490 335"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_124_12)">
          <circle
            cx="269.5"
            cy="265.5"
            r="265.5"
            fill="#7700BB"
            fill-opacity="0.9"
            shape-rendering="crispEdges"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_124_12"
            x="0"
            y="0"
            width="539"
            height="539"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_124_12"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_124_12"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Home;
