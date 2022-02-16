import React, {useState, useEffect} from "react";
// import Question from "../models/Question";

function TagsSearch({questions, setQuestions}) {
    const [tag, setTag] = useState("all");
    const [orderBy, setOrderBy] = useState("newest");

    useEffect(async () => {
        await fetchQuestions();
    }, []);

    const fetchQuestions = async () => {

        const response = await fetch(`http://localhost:5000/questions/search/${tag}?orderBy=${orderBy}`);
        setQuestions(await response.json());
    }

    // async function getLatestQuestionsByTag(req, res, next) {
    //     const {tag} = req.params;
    //     const tag_elements = decodeURIComponent(tag).split(',').map((e) => e.trim());
    //     let query = {tags: {$in: tag_elements}};
    //
    //     if (tag === "latest") {
    //         try {
    //             const questions = await Question.find({}).sort({date: 'desc'}).limit(50);
    //             console.log(questions);
    //             res.status(200).send(questions);
    //         } catch (e) {
    //             next(e);
    //         }
    //     } else {
    //         try {
    //             const questions = await Question.find(query);
    //             console.log(questions);
    //             res.status(200).send(questions);
    //         } catch (e) {
    //             next(e);
    //         }
    //     }
    // }

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
                    <select className="select select-bordered text-gray-400 select-info pr-24 " onChange={(e) => {
                        setOrderBy(e.target.value);
                    }}>
                        <option disabled="disabled" selected="selected" value="newest">
                            Select by
                        </option>
                        <option value="most_popular">Most Popular</option>
                        <option value="newest">Newest</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default TagsSearch;
