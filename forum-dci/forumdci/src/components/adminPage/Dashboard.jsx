import React from "react";

const Dashboard = () => {
  return (
    <>
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
    </>
  );
};

export default Dashboard;
