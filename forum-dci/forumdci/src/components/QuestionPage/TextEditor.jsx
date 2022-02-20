import React, { useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useParams } from "react-router-dom";

export default function TextEditor() {
  const params = useParams();
  const [description, setDescription] = useState(" ");

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
        alert("Your question has been successfully sent to the database!");
        setDescription(" ");
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
            className="mt-6 text-center w-full md:w-20  bg-primary text-neutral-content py-2 px-4 rounded-full  "
          >
            Submit Answer
          </button>
        </div>
      </div>
    </>
  );
}
