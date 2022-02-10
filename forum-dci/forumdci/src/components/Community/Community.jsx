import React, { useState, useEffect } from "react";
import SubNavbar from "../QuestionsPage/SubNavbar";
const randomUserUrl = "https://randomuser.me/api/?results=16";

export default function Community() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    async function fetchData() {
      fetch(randomUserUrl)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsLoaded(true);
          console.log(data);
        });
    }

    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!isLoaded) return <div>loading...</div>;
  else {
    return (
      <div className="bg-gray-100">
        <SubNavbar />

        <div className="w-10/12 md:h-auto lg:h-screen m-auto bg-white">
          <div className="flex items-center justify-center  md:justify-between md:mb-24 pt-2">
            <div className="pt-10 flex-col md:ml-20">
              <h1 className="text-primary text-3xl md:mb-7 font-bold mb-4">
                USERS
              </h1>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pr-16 input input-primary input-bordered"
                />
                <button className="absolute top-0 right-0 rounded-l-none btn btn-primary">
                  go
                </button>
              </div>
            </div>
            <img
              className="md:w-24 mt-2 md:mr-20 w-0"
              src="assets/icons/community.png"
              alt="community icon"
            />
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-y-5 mt-16 pb-10 mr-12 ml-10">
            {data.results.map((result) => (
              <div className="flex items-center lg:mb-10">
                <img
                  className="rounded-full w-26"
                  src={result.picture.medium}
                  alt="user avatar"
                />
                <div className="ml-5">
                  <h2 className="font-bold">{result.name.first}</h2>
                  <h3>12 questions</h3>
                  <h3>9 reactions</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
