import React from "react";

function TagsSearch() {
  return (
    <div>
      <div className="flex flex-nowrap pt-3 sm:w-5/12 justify-start">
        <div class="pb-6">
          <div class="relative">
            <input
              type="text"
              placeholder="Search Tags..."
              class="w-full pr-12 input text-white input-info input-bordered"
            />
            <button class="absolute top-0 right-0 text-white rounded-l-none btn btn-info">
              go
            </button>
          </div>
        </div>

        <div className="ml-11">
          {" "}
          <select class="select select-bordered text-gray-400 select-info pr-12 ">
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
