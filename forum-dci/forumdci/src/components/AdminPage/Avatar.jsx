import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import EditProfForm from "./EditProfForm";
import axios from "axios";
import jwt from "jwt-decode";
import AdminBtn from "./AdminBtn";
const Avatar = () => {
  //state
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({});
  const [file, setFile] = useState(null);
  const [showUploadAvatar, setShowUploadAvatar] = useState(false);

  const onInputChange = (e) => {
    setFile(e.target.files[0]);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", file);
    const userData = JSON.parse(localStorage.getItem("user"));
    formData.append("id", userData.id);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
      withCredentials: true,
    };

    axios
      .post("http://localhost:5000/admin/upload", formData, config)
      .then((response) => {
        alert("Image uploaded successfully!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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

  const showUploadAvatarHandler = () => {
    setShowUploadAvatar(!showUploadAvatar);
  };

  return (
    <div className="min-h-screen p-10 lg:p-0 lg:grid lg:grid-cols-3 ">
      <section className="flex flex-col items-center lg:justify-center lg:col-span-1 lg:col-start-1 lg:col-end-1 lg:bg-secondary">
        <div className="card shadow-lg flex items-center w-3/4 glass p-2 lg:invisible">
          <button
            onClick={showUploadAvatarHandler}
            className="mb-4 mt-4 font-medium sm:visible  text-gray-700 font-medium rounded-lg w-32 h-8 glass"
          >
            set avatar
          </button>
          <button className="mb-2 font-medium sm:visible  glass text-gray-700 font-medium rounded-lg w-32 h-8">
            remove avatar
          </button>

          {showUploadAvatar && (
            <form
              className="sm:visible flex flex-col justify-center ml-28 mb-10 mt-8"
              onSubmit={submitHandler}
            >
              <input
                className="mb-4"
                type="file"
                name="photo"
                onChange={onInputChange}
              />
              <button
                className="bg-teal-100 glass text-gray-700 font-medium w-20 h-8 rounded-lg"
                type="submit"
              >
                save
              </button>
            </form>
          )}

          <div className="avatar placeholder bg-white rounded-full w-28 h-28 lg:w-40 lg:h-40 lg:visible lg:mt-10">
            <img
              className="rounded-full w-40 h-40 object-cover"
              src={
                user.avatar
                  ? `http://localhost:5000/${user.avatar}`
                  : file
                  ? URL.createObjectURL(file)
                  : null
              }
              alt="prof pic"
            />
          </div>

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

        {isEditing && (
          <EditProfForm onCancel={stopEditingHandler} user={user} />
        )}
      </section>

      <Dashboard />
    </div>
  );
};

export default Avatar;
