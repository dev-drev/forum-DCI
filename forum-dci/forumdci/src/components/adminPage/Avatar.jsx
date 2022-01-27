import React, {useState} from "react";
import Dashboard from "./Dashboard";
import EditProfForm from "./EditProfForm";
import AdminBtn from "./AdminBtn"

const Avatar = (props) => {

const [isEditing, setIsEditing] = useState(false);

const onSaveUpdatesHandler = (e) => {
  e.preventDefault();
  setIsEditing(false);
  
}  


const startEditingHandler = () => {
  setIsEditing(true)
}

const stopEditingHandler = () => {
  setIsEditing(false)
}

  return (
    <div className="min-h-screen p-10 lg:p-0 lg:grid lg:grid-cols-3 ">
      <section className="flex flex-col items-center lg:justify-center lg:col-span-1 lg:col-start-1 lg:col-end-1 lg:bg-secondary">
        <div className="card shadow-lg flex items-center w-3/4 glass p-2 lg:invisible">
          <div className="avatar placeholder bg-white rounded-full w-40 h-40 lg:visible"></div>

          <div className="flex  flex-col items-center m-5 font-bold lg:visible">
            <h1 cla ssName="m-3 text-black uppercase">
              John Doe
            </h1>
            <h2 className="m-3 text-black">johndoe@mail.com</h2>
            <h2 className="m-3 text-black">Berlin, Germany</h2>
          </div>

          {!isEditing && <AdminBtn onClick={startEditingHandler}>edit profile</AdminBtn>}

          {!isEditing && <AdminBtn >delete profile</AdminBtn>}
          
        </div>
        
          {isEditing && <EditProfForm onSave={onSaveUpdatesHandler} onCancel={stopEditingHandler}/>}
        
        
      </section>
      
      <Dashboard />
    </div>
  );
};

export default Avatar;
