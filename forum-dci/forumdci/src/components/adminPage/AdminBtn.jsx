import React from 'react';

export default function AdminBtn(props) {
  return (
  
      <button onClick={props.onClick} className="btn w-40 bg-white text-black m-3 rounded-full shadow-lg shadow-gray-500/50 border-0 hover:bg-white lg:hover:bg-primary lg:hover:text-white lowercase lg:visible lg:w-full lg:uppercase lg:bg-primary lg:text-white">
            {props.children}
          </button>
 
  );
}
