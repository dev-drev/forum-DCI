import React from "react";

const Avatar = () => {
  return (
    <div class="min-h-screen bg-gray-500 p-16">
      <section class="flex flex-col items-center">
        <div class="card shadow-lg flex items-center w-3/4">
          <div class="avatar placeholder bg-white rounded-full  w-40 h-40">
            <div class=" text-neutral-content ">
              <span class="text-3xl">K</span>
            </div>
          </div>

          <div class="flex  flex-col items-center m-5 font-bold">
            <h1 class="m-4">JohnDoe</h1>
            <h2 class="m-4">johndoe@mail.com</h2>
            <h2 class="m-4">Berlin, Germany</h2>
          </div>
        </div>

        <button class="btn btn-wide bg-white text-black mt-8 rounded-full shadow-lg shadow-gray-500/50 border-0  hover:bg-white lg:hover:bg-primary  lg:hover:text-white ">
          edit profile
        </button>
        <button class="btn btn-wide bg-white text-black m-3 rounded-full shadow-lg shadow-gray-500/50 border-0 hover:bg-white">
          delete profile
        </button>
      </section>
    </div>
  );
};

export default Avatar;
