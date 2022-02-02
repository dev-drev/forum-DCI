import React, {useState, useEffect} from 'react';

import axios from 'axios';

export default function EditProfForm(props) {
   
const [editedUser, setEditedUser] = useState({});


const onSaveUpdatesHandler = (e) => {
    e.preventDefault();
    // setIsEditing(false); to implement later
    console.log("cookie", document.cookie);
    axios('http://localhost:5000/admin/edit', {method: 'PATCH', data: {editedUser, id: JSON.parse(localStorage.getItem('user')).userId}, })
    
    .then((res) => {
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    })
  }  

const changeHandler = (e) => {
setEditedUser({...editedUser, [e.target.name]: e.target.value})
}

useEffect(() => {
        
        //fetching user's data
        console.log('fetch user data');
        axios(`http://localhost:5000/admin/getuser/${JSON.parse(localStorage.getItem('user')).userId}`)
        .then((res) => {
            setEditedUser({...res.data})
        })
        .catch((err) => {
            console.log(err);
        })
    
  }, []);



  return (
  <div  className="w-72 flex justify-center">
   <form  onChange={changeHandler} onSubmit={props.onSave}>
       <div className="flex-col justify-between mb-4 mt-6">
           <label htmlFor="fullName" className="text-gray-700 font-bold">full name</label>
           <input type="text" name="fullName" id="fullName" placeholder="update full name"className="login-input" value={editedUser.fullName} />
       </div>

       <div className="flex-col justify-between mb-4">
           <label htmlFor="username" className="text-gray-700 font-bold">username</label>
           <input type="text" name="userName" id="username" placeholder="enter new username" className="login-input" value={editedUser.userName} />
       </div>

       <div className="flex-col justify-between mb-4 ">
           <label htmlFor="email" className="text-gray-700 font-bold">email</label>
           <input type="email" name="email" id="email" placeholder="enter new email" className="login-input" value={editedUser.email} />
       </div>

       <div className="flex-col justify-between mb-4">
           <label htmlFor="password" className="text-gray-700 font-bold">password</label>
           <input type="password" name="password" id="password" placeholder="enter new password" className="login-input"/>
       </div>

       <div className="flex-row p-10">
           <button onClick={onSaveUpdatesHandler} className="bg-green text-white h-10 px-5 m-2 rounded-lg" type="submit">Save</button>
           <button onClick={props.onCancel} className="bg-gray-200 text-gray-700 h-10 px-5 m-2 rounded-lg" type="button">Cancel</button>
       </div>
   </form>
  </div>
  );
}


