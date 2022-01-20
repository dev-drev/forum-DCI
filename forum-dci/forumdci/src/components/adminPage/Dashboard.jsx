import React from "react";

const Dashboard = () => {
  return (
    <div class="card  shadow-lg mt-16 w-full h-36">
      <div>
        <h1 class="font-bold text-xl ml-3">DASHBOARD</h1>
      </div>

      <div class="flex flex-row lg:grow w-full">
        <div class="card-body bg-gray-400 flex flex-col text-sm w-24 h-20 p-2 m-2 rounded-2xl glass">
          <h2 class="card-title text-white">5</h2>
          <p>questions</p>
        </div>

        <div class="card-body bg-gray-400 flex flex-col text-sm w-24 h-20 p-2 m-2 rounded-2xl glass">
          <h2 class="card-title text-white">5</h2>
          <p>answers</p>
        </div>

        <div class="card-body bg-gray-400 flex flex-col text-sm w-24 h-20 p-2 m-2 rounded-2xl glass">
          <h2 class="card-title text-white">5</h2>
          <p>reactions</p>
        </div>

        <div class="card-body bg-gray-400 flex flex-col text-sm w-24 h-20 p-2 m-2 rounded-2xl glass">
          <h2 class="card-title text-white">5</h2>
          <p>reactions</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
