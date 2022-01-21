import React from "react";

const About = () => {
  return (
    <div>
      <div className="bg-gray-500 min-h-screen flex items-center justify-center">
        <div className="grid grid-cols-2 gap-10">
          <div className="bg-white">
            <h2>what is AVAZ?</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis, ut ex architecto velit animi eum quia eligendi.
              Reiciendis iste minus magni dicta, cumque soluta deleniti
              veritatis consequuntur inventore fuga repellendus?
            </p>
          </div>

          <div className="bg-white">
            <h2>features</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Reiciendis, ut ex architecto velit animi eum quia eligendi.
              Reiciendis iste minus magni dicta, cumque soluta deleniti
              veritatis consequuntur inventore fuga repellendus?
            </p>
          </div>

          <div className="bg-white">
            <icon>1</icon>
            <icon>2</icon>
            <icon>3</icon>
            <icon>4</icon>
            <icon>5</icon>
          </div>

          <div className="bg-white">
            <h2>our team</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eos
              deleniti accusantium atque deserunt quos quaerat magni veritatis
              iure rerum.
            </p>
          </div>

          <div className="bg-white">
            <img
              className="w-40 h-46"
              src="/assets/images/alcione.jpeg"
              alt="profile Alcione"
            />
            <img
              className="w-40 h-46"
              src="/assets/images/andrea.jpeg"
              alt="profile Andrea"
            />
            <img
              className="w-40 h-46"
              src="/assets/images/zhino.jpeg"
              alt="profile Zhino"
            />
            <img
              className="w-40 h-46"
              src="/assets/images/viviana.jpeg"
              alt="profile Viviana"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
