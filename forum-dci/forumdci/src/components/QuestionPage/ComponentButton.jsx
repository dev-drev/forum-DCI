import React from "react";

function ComponentButton(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.onClick();
        }}
        className=" btn bg-secondary glass mx-8 text-primary hover:bg-gray-600 mt-10 hover:text-white btn-sm "
      >
        {props.value}
      </button>
    </div>
  );
}

export default ComponentButton;
