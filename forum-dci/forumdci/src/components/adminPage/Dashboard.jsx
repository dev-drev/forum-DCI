import React from "react";

const Dashboard = () => {
  return (
    <div className="card  shadow-lg mt-16 w-full h-36">
      <div>
        <h1 className="font-bold text-xl ml-3">DASHBOARD</h1>
      </div>

      <div className="flex flex-row lg:grow w-full">
        <div className="card-body bg-gray-400 flex flex-col text-sm w-24 h-20 p-2 m-2 rounded-2xl glass">
          <h2 className="card-title text-white">5</h2>
          <p>questions</p>
        </div>

        <div className="card-body bg-gray-400 flex flex-col text-sm w-24 h-20 p-2 m-2 rounded-2xl glass">
          <h2 className="card-title text-white">5</h2>
          <p>answers</p>
        </div>

        <div className="card-body bg-gray-400 flex flex-col text-sm w-24 h-20 p-2 m-2 rounded-2xl glass">
          <h2 className="card-title text-white">5</h2>
          <p>reactions</p>
        </div>

        <div className="card-body bg-gray-400 flex flex-col text-sm w-24 h-20 p-2 m-2 rounded-2xl glass">
          <h2 className="card-title text-white">5</h2>
          <p>reactions</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
