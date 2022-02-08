import React from "react";

const SubNavbar = () => {
  return (
    <nav className=" bg-secondary  bg-opacity-90 shadow-xl z-50 flex justify-center px-2 sm:px-4 py-2  ">
      <div className=" hidden sm:block"></div>
      <div className="mt-1 form-control">
        <div className="flex content-center items-center">
          <input
            type="text"
            placeholder="Search"
            className=" pr-56 input border-1 border-primary bg-zinc-200 md:w-[35vw] h-[6.5vh] rounded-r-none h-12"
          />
          <button className="rounded-l-none border-none btn h-[5vh] bg-primary">
            go
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;
