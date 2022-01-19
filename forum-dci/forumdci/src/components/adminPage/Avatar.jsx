import React from "react";
import Navbar from "../Navbar";
import SubNavbar from "../Questions Page/SubNavbar";

<Navbar />;

<SubNavbar />;
const Avatar = () => {
  return (
    <div class="min-h-screen bg-cyan-100 p-16">
      <section class="flex flex-col items-center">
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

        <button class="btn btn-wide bg-white text-black mt-8 rounded-full shadow-lg shadow-gray-500/50 border-0  hover:bg-white lg:hover:bg-primary  lg:hover:text-white ">
          edit profile
        </button>
        <button class="btn btn-wide bg-white text-black m-3 rounded-full shadow-lg shadow-gray-500/50 border-0 hover:bg-white">
          delete profile
        </button>
      </section>

      <div>
        <h1 class="font-bold m-4">dashboard</h1>
      </div>

      <div class="flex flex-row lg:grow w-full">
        <div class="card-body bg-yellow flex flex-col text-sm w-24 h-20 p-2 m-2">
          <h2 class="card-title">5</h2>
          <p>questions</p>
        </div>

        <div class="card-body bg-coral flex flex-col text-sm w-24 h-20 p-2 m-2">
          <h2 class="card-title">5</h2>
          <p>answers</p>
        </div>

        <div class="card-body bg-green flex flex-col text-sm w-24 h-20 p-2 m-2">
          <h2 class="card-title">5</h2>
          <p>reactions</p>
        </div>

        <div class="card-body bg-blue flex flex-col text-sm w-24 h-20 p-2 m-2">
          <h2 class="card-title">5</h2>
          <p>reactions</p>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
