import React, {useState} from 'react';
import TextEditor from "./TextEditor";

function AskSomethingPage() {

    const [question, setQuestion] = useState({
        title: "",
        language: "",
        tags: "",
    });

    const handleChange = (event) => {
        setQuestion({...question, [event.target.name]: event.target.value});
    };


    const handleSubmit = (event) => {
        // prevents the submit button from refreshing the page
        event.preventDefault();
        console.log(question);
    };


    return (
        <div className="bg-gray-500">
            <div className="container mx-auto min-h-screen bg-gray-200">
                <form>
                    <div className=" ">
                        <div className=" rounded-md px-6 py-10 max-w-2xl mx-auto">
                            <h1 className="text-center text-4xl md:text-2xl font-bold text-gray-800 mb-10">Ask Your
                                Question</h1>
                            <div className="space-y-4">
                                <div>
                                    <input type="text" placeholder="Title" id="title" name="title"
                                           value={question.title}
                                           onChange={handleChange}
                                           className=" outline-none py-1 px-2 text-md border-2 rounded-md  w-full"/>
                                </div>

                                <div className="md:flex">
                                    <div className="mb-4">
                                        <input type="text" placeholder="Programing Language:" id="language"
                                               name="language"
                                               value={question.language}
                                               onChange={handleChange}
                                               className=" outline-none py-1 px-2 text-md border-2 rounded-md"/>
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Choose some tags" name="tags" id="tags"
                                               value={question.tags}
                                               onChange={handleChange}
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