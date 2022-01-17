import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full justify-around p-6 flex bg-primary">
      <div className="w-2/12">
        <h2>AVAZ</h2>
      </div>

      <div className="w-8/12">
        <ul className="flex">
          <li>questions</li>
          <li>tags</li>
          <li>about</li>
          <button>ask something</button>
        </ul>
      </div>

      <div>
        <span>log in</span>
      </div>
    </nav>
  );
};

export default Navbar;
