import React from 'react';

function ComponentButton(props) {
    return (
        <div>
            <button onClick={() => {props.onClick()}} className=" bg-primary text-neutral-content py-2 px-4 rounded-full inline-flex items-center">{props.value}</button>
        </div>
    );
}

export default ComponentButton;