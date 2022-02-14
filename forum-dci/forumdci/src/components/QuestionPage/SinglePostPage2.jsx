import React from "react";

function SinglePostPage2(props) {
  return (
    <div>
      <div className="bg-gradient-to-r from-[#505968] to-primary   ">
        <div className="  px-6" glass="glass">
          <div className="text-zinc-100  p-12 rounded-md tracking-wide pt-10 md:flex">
            <div
              id="header-text"
              className="leading-5 ml-6 flex-column md:flex"
            >
              <div className=" text-center  block md:inline-block">
                <img
                  alt="avatar"
                  className="w-10 rounded-full mr-10 border-2 border-gray-300 inline-block"
                  src="https://picsum.photos/seed/picsum/200"
                />
              </div>

              <div className="inline-block ml-4">
                <div id="quote" className="pb-6">
                  <q className="italic text-sm  text-zinc-200" glass="glass">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </q>
                </div>
                <div className="flex flex-col">
                  {" "}
                  <h4 id="name" className="text-lg font-semibold">
                    John Doe
                  </h4>
                  <h6 id="job" className="font-base text-sm text-secondary">
                    Designer
                  </h6>
                </div>
              </div>
            </div>

            <div className="flex mt-6 md:mt-0  md:w-50 md:grid md:grid-cols-2 md:mx-auto md:inline-block">
              <div className="mx-auto">
                <div className="sm:ml-12  w-50 flex flex-center ">
                  <img
                    alt=""
                    className="h-8  "
                    src="https://img.icons8.com/nolan/64/thumb-up.png"
                  />
                  <p className="py-2 ml-2">18</p>
                </div>
              </div>
              <img
                alt=""
                className="ml-8"
                src="https://img.icons8.com/ios-glyphs/30/000000/menu-2.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage2;
