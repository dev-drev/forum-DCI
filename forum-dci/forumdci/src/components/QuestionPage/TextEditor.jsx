import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useParams } from "react-router-dom";

export default function TextEditor() {
  const navigate = useNavigate();
  const params = useParams();
  const [description, setDescription] = useState(" ");
  const [isSent, setIsSent] = useState(false);

  const handleCkeditor = (event, editor) => {
    setDescription(editor.getData());
    console.log(description);
  };

  const submitAnswer = async () => {
    try {
      const res = await fetch(
        `http://localhost:5000/questions/answer/${params.id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description,
            user_id: JSON.parse(localStorage.getItem("user")).id,
          }),
        }
      );

      if (res.status === 200) {
        setDescription(" ");
        setIsSent(true);
        setTimeout(() => {
          navigate("/questions");
        }, 3000);
      }
    } catch (e) {
      alert("Try again!");
    }
  };

  return (
    <>
      <div className=" text-gray-800 w-[80vw] rounded-md rounded  py-10  mx-auto">
        <div className="space-y-4">
          <CKEditor
            editor={ClassicEditor}
            data={description}
            onChange={handleCkeditor}
          />
        </div>
        <div className="text-right">
          <button
            onClick={(e) => {
              e.stopPropagation();
              submitAnswer();
              // Only for no here I add an alert t check if the event propagation was disabled
            }}
            className="mt-6 btn text-center w-full md:w-32  bg-secondary text-primary py-2 px-4 glass  "
          >
            Submit
          </button>
        </div>
        {isSent ? (
          <p className="text-2xl text-secondary mt-10  leading-tight">
            Your answer has been successfully submitted!
          </p>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
