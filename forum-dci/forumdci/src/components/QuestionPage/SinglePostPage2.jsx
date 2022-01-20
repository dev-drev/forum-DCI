import React from 'react';

function SinglePostPage2(props) {
    return (
        <div>
            <div className="mt-6 ">
                <div className=" bg-gray-200 px-6">
                    <div
                        className="border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg mb-4 md:flex">

                        <div id="header-text" className="leading-5 ml-6 flex-column md:flex">
                            <div className=" text-center  block md:inline-block">
                                <img alt="avatar" className="w-20 rounded-full border-2 border-gray-300 inline-block"
                                     src="https://picsum.photos/seed/picsum/200"/>
                            </div>

                            <div className="inline-block ml-4">

                                <h4 id="name" className="text-xl font-semibold mb-2">John Doe</h4>
                                <h5 id="job" className="font-semibold text-blue-600 mb-2">Designer</h5>

                                <div id="quote">
                                    <q className="italic text-gray-600">Lorem ipsum dolor sit amet, consectetur
                                        adipiscing
                                        elit,
                                        sed
                                        do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
                                </div>
                            </div>
                        </div>

                        <div className="flex mt-6 md:mt-0  md:w-50 md:grid md:grid-cols-2 md:mx-auto md:inline-block">
                            <div className="mx-auto">
                                <div className="sm:ml-12  w-50 flex flex-center ">
                                    <img alt="" className="h-8  " src="https://img.icons8.com/nolan/64/thumb-up.png"/>
                                    <p className="py-2 ml-2">18</p>
                                </div>
                            </div>
                            <img alt="" className="ml-8" src="https://img.icons8.com/ios-glyphs/30/000000/menu-2.png"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default SinglePostPage2;