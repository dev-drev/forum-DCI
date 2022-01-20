import React from "react";
import Dashboard from "./Dashboard";

const Avatar = () => {
  return (
    <div class="min-h-screen bg-gray-500 p-16 mt-16">
      <section class="flex flex-col items-center">
        <div class="card shadow-lg flex items-center w-3/4 h-96 glass p-2">
          <div class="avatar placeholder bg-white rounded-full  w-40 h-40">
            <div class=" text-neutral-content ">
              <span class="text-3xl">K</span>
            </div>
          </div>

          <div class="flex  flex-col items-center m-5 font-bold">
            <h1 class="m-3 text-white">JohnDoe</h1>
            <h2 class="m-3 text-white">johndoe@mail.com</h2>
            <h2 class="m-3 text-white">Berlin, Germany</h2>
          </div>
        </div>

        <button class="btn w-40 bg-primary text-black mt-8 rounded-full shadow-lg shadow-gray-500/50 border-0  hover:bg-white lg:hover:bg-primary  lg:hover:text-white lowercase">
          edit profile
        </button>
        <button class="btn w-40 bg-primary text-black m-3 rounded-full shadow-lg shadow-gray-500/50 border-0 hover:bg-white lg:hover:bg-primary lg:hover:text-white lowercase">
          delete profile
        </button>
      </section>
      <Dashboard />
    </div>
  );
};

export default Avatar;
