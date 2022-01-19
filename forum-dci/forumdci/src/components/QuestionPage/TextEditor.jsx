import React, {useRef} from 'react';
import {Editor} from '@tinymce/tinymce-react';


export default function TextEditor() {
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };
    return (
        <>
            <form>
                    <div className="  rounded-md px-6 py-10 max-w-2xl mx-auto">
                        <div className="space-y-4">

                                <Editor
                                    className="bg-indigo-50 w-full"
                                    onInit={(evt, editor) => editorRef.current = editor}
                                    initialValue="<p>This is the initial content of the editor.</p>"
                                    init={{
                                        height: 300,
                                        menubar: false,
                                        plugins: [
                                            'advlist autolink lists link image charmap print preview anchor',
                                            'searchreplace visualblocks code fullscreen',
                                            'insertdatetime media table paste code help wordcount'
                                        ],
                                        toolbar: 'undo redo | formatselect | ' +
                                            'bold italic backcolor | alignleft aligncenter ' +
                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                            'removeformat | help',
                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                    }}
                                />
                            <div className="text-right">
                            <button onClick={(e)=>{
                                e.stopPropagation()
                                alert('hello')
                                // Only for no here I add an alert t check if the event propagation was disabled
                            }} className=" bg-primary text-neutral-content py-2 px-4 rounded-full inline-flex items-center">Answer</button>
                            </div>
                        </div>
                    </div>
            </form>

        </>
    );
}
