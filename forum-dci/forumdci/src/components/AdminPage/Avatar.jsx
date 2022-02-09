
import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import EditProfForm from "./EditProfForm";
import axios from "axios";
import jwt from "jwt-decode";
import AdminBtn from "./AdminBtn";
const Avatar = () => {
  //const [userId, setUserId] = useState("");

  // useEffect(() => {
  //   const token = localStorage.getItem("token")
  //     ? jwt(localStorage.getItem("token")).id
  //     : "";
  //   setUserId(token);
  // }, []);

  //state
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({});
  const [file, setFile] = useState(null);

  const onInputChange = (e) => {
    setFile(e.target.files[0])
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('photo', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      }
    }
    
    axios.post('http://localhost:5000/admin/upload', formData, config)
    .then((response) => {
      alert('Image uploaded successfully!')
    })
    .catch((err) => {
      console.log(err);
    })

  }

  async function deleteUser() {
    try {
      await axios
        .delete(`http://localhost:5000/admin/delete`)
        .then((data) => console.log(data));
      alert("user has been successfully deleted");
      console.log("deleted");
    } catch (error) {
      console.log(error);
    }
  }


  //fetch user from database
  useEffect(() => {
    const fetchData = async () => {
      const currentUser = JSON.parse(localStorage.getItem("user"));
      const res = await fetch(`http://localhost:5000/users/${currentUser.id}`);
      const userData = await res.json();
      setUser(userData);
    };
    fetchData();
  }, []);
 

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };



  return (
    <div className="min-h-screen p-10 lg:p-0 lg:grid lg:grid-cols-3 ">
      <section className="flex flex-col items-center lg:justify-center lg:col-span-1 lg:col-start-1 lg:col-end-1 lg:bg-secondary">
        <div className="card shadow-lg flex items-center w-3/4 glass p-2 lg:invisible">
          <div className="avatar placeholder bg-white rounded-full w-40 h-40 lg:visible">
            <img src={file ? URL.createObjectURL(file) : null} alt="prof pic" />
          </div>
          
          <form onSubmit={submitHandler}>
            <input type="file" name="photo" onChange={onInputChange}/>
            <button type="submit">Upload</button>
          </form>
         
          {user ? (
            <div className="flex  flex-col items-center m-5 font-bold lg:visible">
              <h1 className="m-3 text-black uppercase">{user.fullName}</h1>
              <h2 className="m-3 text-black">{user.email}</h2>
              <h2 className="m-3 text-black">{user.userName}</h2>
            </div>
          ) : (
            ""
          )}
          {!isEditing && (
            <AdminBtn onClick={startEditingHandler}>edit profile</AdminBtn>
          )}

          {!isEditing && (
            <AdminBtn onClick={deleteUser}>delete profile</AdminBtn>
          )}
        </div>

        {isEditing && <EditProfForm onCancel={stopEditingHandler} />}
      </section>

      <Dashboard />
    </div>
  );
};

export default Avatar;
