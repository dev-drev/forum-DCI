import React from "react";
import Dashboard from "./Dashboard";

const Avatar = () => {
  return (
    <div className="min-h-screen p-10 lg:p-0 lg:grid lg:grid-cols-3 ">
      <section className="flex flex-col items-center lg:justify-center lg:col-span-1 lg:col-start-1 lg:col-end-1 lg:bg-secondary">
        <div className="card shadow-lg flex items-center w-3/4 glass p-2 lg:invisible">
          <div className="avatar placeholder bg-white rounded-full w-40 h-40 lg:visible"></div>

          <div className="flex  flex-col items-center m-5 font-bold lg:visible">
            <h1 cla ssName="m-3 text-black uppercase">
              John Doe
            </h1>
            <h2 className="m-3 text-black">johndoe@mail.com</h2>
            <h2 className="m-3 text-black">Berlin, Germany</h2>
          </div>

          <button className="btn w-40 bg-white text-black mt-8 rounded-full shadow-lg shadow-gray-500/50 border-0  hover:bg-white lg:hover:bg-primary  lg:hover:text-white lowercase lg:visible lg:w-full lg:uppercase lg:bg-primary lg:text-white">
            edit profile
          </button>
          <button className="btn w-40 bg-white text-black m-3 rounded-full shadow-lg shadow-gray-500/50 border-0 hover:bg-white lg:hover:bg-primary lg:hover:text-white lowercase lg:visible lg:w-full lg:uppercase lg:bg-primary lg:text-white">
            delete profile
          </button>
        </div>
      </section>
      <Dashboard />
    </div>
  );
};

export default Avatar;
