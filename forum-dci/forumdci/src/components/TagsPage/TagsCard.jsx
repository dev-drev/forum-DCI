import React from "react";

function TagsCard() {
  return (
    <div>
      <section
        className={`sm:w-56 w-full glass z-0 rounded-2xl px-6 py-2 my-2 sm:py-6 shadow-lg`}
      >
        {/* FIRST BAR - DATE+ICON */}
        <div className="flex items-center pb-4  justify-between">
          <span className="text-gray-400 text-sm">2d ago</span>
          <div className=" flex items-center content-center text-secondary">
            <span className="text-sm italic">drevil dev</span>
            <div className="bg-gray-100 w-5 h-5 ml-2 rounded-full"></div>
          </div>
        </div>
        {/* HEADING */}
        <h5 className="text-sm text-zinc-100 font-semibold">
          Display an inherited Field in Django 4.0 with ModelAdmin
        </h5>
        {/* ACTIVE */}
        <p className="text-secondary hidden text-sm sm:block font-semibold mt-2.5">
          Active
        </p>

        {/* ICONS LIKES+ ANSWERS */}

        <div className="flex w-10 justify-between">
          {" "}
          <div className="mt-3 flex items-center content-center text-white text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
              />
            </svg>

            <span className="pl-1 text-sm text-white  font-semibold">145</span>
          </div>
          <div className="px-6 mt-3 flex items-center content-center text-white text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
              />
            </svg>

            <span className="pl-1 text-white text-sm font-semibold">39</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TagsCard;
