import React from "react";
import CardPopular from "../QuestionsPage/CardPopular";

const Dashboard = () => {
  return (
    <div className="card shadow-lg mt-16 w-full lg:bg-white lg:invisible lg:col-span-2 lg:col-start-2">
      <div>
        <h1 className="font-bold text-xl ml-3 lg:visible">DASHBOARD</h1>
      </div>

      <div className="flex flex-col lg:flex-row w-full lg:visible">
        <div className="card-body bg-yellow flex flex-col grow text-sm items-center p-2 m-2 rounded-2xl glass">
          <h2 className="card-title">5</h2>
          <p>questions</p>
        </div>

        <div className="card-body bg-coral flex flex-col grow text-sm items-center p-2 m-2 rounded-2xl glass">
          <h2 className="card-title">5</h2>
          <p>answers</p>
        </div>

        <div className="card-body bg-green flex flex-col grow text-sm items-center p-2 m-2 rounded-2xl glass">
          <h2 className="card-title">5</h2>
          <p>reactions</p>
        </div>

        <div className="card-body bg-blue flex flex-col grow text-sm items-center p-2 m-2 rounded-2xl glass">
          <h2 className="card-title">5</h2>
          <p>reactions</p>
        </div>
      </div>

      <div className="lg:col-span-2 lg:col-start-2 mt-10 lg:visible">
        <h2 className="font-bold text-xl ml-3"> POSTS</h2>
        <div className="bg-gray-200">
          <CardPopular />
        </div>
        <div className="bg-gray-200">
          <CardPopular />
        </div>
        <div className="bg-gray-200">
          <CardPopular />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
