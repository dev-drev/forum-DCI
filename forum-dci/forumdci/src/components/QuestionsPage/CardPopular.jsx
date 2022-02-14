import React, { useState, useEffect } from "react";

function CardPopular({
  style,
  title,
  question,
  likes,
  titleStyle,
  titleCont,
  tagsStyle,
  id,
  date,
  tags,
  deleteQuestion,
}) {
  const [isChecked, setIsChecked] = useState(false);
  console.log(tags);
  return (
    <div>
      <section className={style}>
        {/* FIRST BAR - DATE+ICON */}
        <div className="flex items-center justify-between">
          <span className="text-secondary pb-2 text-sm">
            {date.substring(0, 10)}
          </span>
          <div className=" flex items-center content-center text-secondary">
            <span className="text-sm italic">drevil dev</span>
            <div className="bg-gray-100 w-5 h-5 ml-2 rounded-full"></div>
          </div>
        </div>
        {/* HEADING */}
        <div className={`${titleCont}`}>
          <h5 className={`${titleStyle} text-zinc-100  font-semibold`}>
            {title}
            {/* Display an inherited Field in Django 4.0 with ModelAdmin */}
          </h5>
        </div>

        {/* ACTIVE */}
        <p className="text-white hidden leading-relaxed sm:pr-16 text-sm sm:block font-base mt-4 md:mt-2">
          {question ? question.substring(0, 200) : question}
          <strong className="md:hidden text-secondary">...MORE</strong>
          {id}
        </p>

        {/* <button
          onClick={() => {
            isChecked ? deleteQuestion(id) : deleteQuestion("");
          }}
          className="text-secondary hidden text-sm sm:block font-semibold mt-2.5"
        >
          Delete
        </button> */}
        {/*         
        <input
          type="checkbox"
          value={isChecked}
          onChange={(e) => setIsChecked(!isChecked)}
        />

        {isChecked ? <div> selected </div> : <div>not selected</div>} */}

        {/* ICONS LIKES+ ANSWERS */}

        <div className="flex pt-6  sm:pt-4 items-center justify-between">
          {" "}
          <div className="flex items-center content-center text-white text-sm">
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

            <span className="pl-1 text-sm text-white  font-semibold">
              {likes}
            </span>
          </div>
          <div className={`${tagsStyle} `}>{tags}</div>
        </div>
      </section>
    </div>
  );
}

export default CardPopular;
