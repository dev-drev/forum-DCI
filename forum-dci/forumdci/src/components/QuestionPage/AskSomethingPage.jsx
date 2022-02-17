import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextEditor from "./TextEditor";
function AskSomethingPage() {
  const userName = localStorage.getItem("userName");
  const [isSent, setIsSent] = useState(false);
  const navigate = useNavigate();

  const [question, setQuestion] = useState({
    title: "",
    language: "",
    tags: "",
    question: "",
    userName: userName,
    user_id: JSON.parse(localStorage.getItem("user")).id,
  });

  const handleChange = (event) => {
    setQuestion({ ...question, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    // prevents the submit button from refreshing the page
    event.preventDefault();
    console.log(question);
    try {
      const res = await fetch("http://localhost:5000/questions/ask", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(question),
      });

      if (res.status === 200) {
        setQuestion({
          title: "",
          language: "",
          tags: "",
          question: "",
        });
        setIsSent(true);
        setTimeout(() => {
          navigate("/questions");
        }, 3000);
      }
      console.log(question);
    } catch (e) {
      alert("Try again!");
    }
  };
  return (
    <div className="bg-blueReact">
      <div className="container mx-auto min-h-screen ">
        <form onSubmit={handleSubmit}>
          <div className=" ">
            <div className=" rounded-md px-8 py-8  mx-auto">
              <h1 className="text-white border-b-2 pb-2 border-secondary px-2 text-3xl md:text-4xl font-bold md:mb-4 mb-10">
                Ask Your Question
              </h1>
              {isSent ? (
                <p className="text-sm text-secondary leading-tight">
                  Your questions has been successfully sent!
                </p>
              ) : (
                ""
              )}

              <div className="p-8  bg-primary rounded-xl space-y-4">
                <div>
                  <div className="pb-2">
                    <label
                      className="text-2xl font-bold text-white"
                      htmlFor="title"
                    >
                      Title
                    </label>{" "}
                    <br />
                    <p className="text-sm text-secondary leading-tight">
                      Be specific and imagine you’re asking a question to
                      another person
                    </p>
                  </div>

                  <input
                    type="text"
                    placeholder="e.g. How to evaluate per-class metrics with output...?"
                    id="title"
                    name="title"
                    value={question.title}
                    onChange={handleChange}
                    className=" outline-none shadow-xl py-1 mt-2 px-2 text-sm border-2 rounded-md  w-full"
                  />
                </div>
                <div className="md:flex  md:space-x-16">
                  <div className="mb-4">
                    <div className="pb-2">
                      <label
                        className="text-md font-bold text-white"
                        htmlFor="title"
                      >
                        Programming Language
                      </label>{" "}
                      <br />
                      <p className="text-sm text-secondary leading-tight">
                        What is the programming language?
                      </p>
                    </div>

                    <input
                      type="text"
                      placeholder="e.g. Javascript"
                      id="language"
                      name="language"
                      value={question.language}
                      onChange={handleChange}
                      className="shadow-xl outline-none py-1 mt-1  px-2 text-sm text-md border-2 rounded-md  w-full"
                    />
                  </div>
                  <div>
                    <div className="pb-2">
                      <label
                        className="text-md font-bold text-white"
                        htmlFor="title"
                      >
                        Tags{" "}
                      </label>{" "}
                      <br />
                      <p className=" shadow-xl  text-sm text-secondary leading-tight">
                        Please choose 1-2 tags divided by a comma
                      </p>
                    </div>

                    <input
                      type="text"
                      placeholder="e.g. Promise "
                      name="tags"
                      id="tags"
                      value={question.tags}
                      onChange={handleChange}
                      className=" shadow-xl outline-none py-1 mt-1  px-2 text-sm text-md border-2 rounded-md  md:w-[18vw] w-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="pb-2">
                    <label
                      className="text-md font-bold text-white"
                      htmlFor="title"
                    >
                      Description{" "}
                    </label>{" "}
                    <br />
                    <p className="text-sm text-secondary leading-tight">
                      Include all the information someone would need to answer
                      your question
                    </p>
                  </div>
                  <textarea
                    name="question"
                    rows={7}
                    className=" shadow-xl outline-none py-1 mt-1  px-2 text-sm text-md border-2 rounded-md  w-full"
                    onChange={handleChange}
                  ></textarea>
                  {/*<TextEditor/>*/}
                </div>
                <div className="">
                  <button
                    className="btn bg-secondary  glass mt-6 p-8 pt-5 w-full text-primary hover:bg-gray-600 hover:text-white btn-sm "
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
                {isSent ? (
                  <p className="text-2xl text-secondary mt-10  leading-tight">
                    Your questions has been successfully sent!
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AskSomethingPage;
