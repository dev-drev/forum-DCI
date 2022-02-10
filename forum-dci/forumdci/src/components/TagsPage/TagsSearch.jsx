import React, {useState, useEffect} from "react";

function TagsSearch({questions, setQuestions}) {
    const [tag, setTag] = useState("all");

    useEffect(async () => {
        await fetchQuestions();
    }, []);

    const fetchQuestions = async () => {

        const response = await fetch(`http://localhost:5000/questions/search/${tag}`);
        setQuestions(await response.json());
    }

    return (
        <div>
            <div
                className="flex content-start items-start lg:flex-row flex-col  flex-nowrap pt-3 w-12/12 sm:w-8/12 justify-start">
                <div className="pb-6">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search Tags..."
                            onChange={(e) => {
                                if (e.target.value === "") {
                                    setTag("all")
                                } else {
                                    setTag(e.target.value);
                                }
                            }}
                            className="w-full  pr-12 input text-black input-info input-bordered"
                        />
                        <button onClick={async () => {
                            await fetchQuestions();
                        }} className="absolute top-0 right-0 text-white rounded-l-none btn btn-info">
                            go
                        </button>
                    </div>
                </div>

                <div className="lg:ml-11">
                    {" "}
                    <select className="select select-bordered text-gray-400 select-info pr-24 ">
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
