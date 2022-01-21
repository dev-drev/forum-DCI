import React from 'react';
import TextEditor from "./TextEditor";

function AskSomethingPage(props) {
    return (
        <div className="bg-gray-500">
            <div className="container mx-auto min-h-screen bg-gray-200">
                <form>
                    <div class=" min-h-screen md:px-20 pt-6">
                        <div class=" rounded-md px-6 py-10 max-w-2xl mx-auto">
                            <h1 class="text-center text-4xl md:text-2xl font-bold text-gray-800 mb-10">Ask Your Question</h1>
                            <div class="space-y-4">
                                <div>
                                    {/*<label for="title" class="text-lx font-serif">Title:</label>*/}
                                    <input type="text" placeholder="Title" id="title"
                                           class=" outline-none py-1 px-2 text-md border-2 rounded-md  w-full"/>
                                </div>

                                <div className="md:flex">
                                    <div className="mb-4">
                                        <input type="text" placeholder="Programing Language:" id="name"
                                               className=" outline-none py-1 px-2 text-md border-2 rounded-md"/>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Choose some tags" id="tags"
                                               className=" md:ml-10 outline-none py-1 px-2 text-md border-2 rounded-md"/>
                                    </div>
                                </div>
                                <div>
                                    <TextEditor/>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AskSomethingPage;