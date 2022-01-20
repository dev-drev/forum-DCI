import React from "react";

const SubNavbar = () => {
  return (
    <nav class="bg-gradient-to-r from-gray-800 to-primary  border-gray-200 shadow-xl flex justify-center px-2 sm:px-4 py-2.5 rounded ">
      <div className=" hidden sm:block"></div>
      <div class="mt-1 form-control">
        <div>
          <input
            type="text"
            placeholder="Search"
            class=" pr-56 input bg-gray-100 rounded-r-none border-primary h-11"
          />
          <button class="rounded-l border-none btn bg-primary">go</button>
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;
