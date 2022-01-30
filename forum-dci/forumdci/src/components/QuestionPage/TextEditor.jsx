import React, {useRef, useState} from 'react';
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";


export default function TextEditor() {
    const [description, setDescription] = useState(" ");

    const handleCkeditor = (event, editor) => {
        setDescription(editor.getData());
        console.log(description);
    }

    return (
        <>
            <div className="  rounded-md  py-10  mx-auto">
                <div className="space-y-4">
                    <CKEditor className=""
                              editor={ClassicEditor}
                              data={description}
                              onReady={editor => {
                                  editor.setStyle('height', '100%', editor.editing.view.document.getRoot());
                              }}
                              s
                              onChange={handleCkeditor}
                    />
                </div>
                <div className="text-right">
                    <button onClick={(e) => {
                        e.stopPropagation()
                        // Only for no here I add an alert t check if the event propagation was disabled
                    }}
                            className="mt-6 text-center w-full md:w-20  bg-primary text-neutral-content py-2 px-4 rounded-full  ">Ask
                    </button>
                </div>
            </div>

        </>
    );
}
