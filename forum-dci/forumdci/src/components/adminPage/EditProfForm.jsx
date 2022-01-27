import React from 'react';

export default function EditProfForm(props) {
  return (
  <div  className="w-72 flex justify-center">
   <form onSubmit={props.onSave}>
       <div className="flex-col justify-between mb-4 mt-6">
           <label htmlFor="fullName" className="text-gray-700 font-bold">full name</label>
           <input type="text" name="fullName" id="fullName" placeholder="update full name"className="login-input" />
       </div>

       <div className="flex-col justify-between mb-4">
           <label htmlFor="username" className="text-gray-700 font-bold">username</label>
           <input type="text" name="username" id="username" placeholder="update username" className="login-input" />
       </div>

       <div className="flex-col justify-between mb-4 ">
           <label htmlFor="email" className="text-gray-700 font-bold">email</label>
           <input type="email" name="email" id="email" placeholder="update email" className="login-input" />
       </div>

       <div className="flex-col justify-between mb-4">
           <label htmlFor="password" className="text-gray-700 font-bold">password</label>
           <input type="password" name="password" id="password" placeholder="update password" className="login-input"/>
       </div>

       <div className="flex-row p-10">
           <button onClick={props.onSave} className="bg-green text-white h-10 px-5 m-2 rounded-lg" type="submit">Save</button>
           <button onClick={props.onCancel} className="bg-gray-200 text-gray-700 h-10 px-5 m-2 rounded-lg" type="button">Cancel</button>
       </div>
   </form>
  </div>
  );
}


