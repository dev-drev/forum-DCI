import React from "react";

function TagsSearch() {
  return (
    <div>
      <div className="flex flex-nowrap pt-3 sm:w-5/12 justify-start">
        <div className="pb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Tags..."
              className="w-full pr-12 input text-white input-info input-bordered"
            />
            <button className="absolute top-0 right-0 text-white rounded-l-none btn btn-info">
              go
            </button>
          </div>
        </div>

        <div className="ml-11">
          {" "}
          <select className="select select-bordered text-gray-400 select-info pr-12 ">
            <option disabled="disabled" selected="selected">
              Select by
            </option>
            <option>Most Popular</option>
            <option>Newest</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default TagsSearch;
