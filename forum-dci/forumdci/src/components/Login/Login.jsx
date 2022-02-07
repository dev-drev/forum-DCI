import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginBtn from "./LoginBtn";

// import jwt from "jwt-decode";
// import Dashboard from "../AdminPage/Dashboard.jsx";
import Navbar from "../Navbar";

export default function Login() {
  const [enteredLoginUsername, setEnteredLoginUsername] = useState("");
  const [enteredLoginPassword, setEnteredLoginPassword] = useState("");
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredSignupUsername, setEnteredSignupUsername] = useState("");
  const [enteredSignupPassword, setEnteredSignupPassword] = useState("");
  const [enteredRePassword, setEnteredRePassword] = useState("");
  const [errorMessages, setErrorMessages] = useState([]);
  const navigate = useNavigate();
  const usernameLoginChangeHandler = (e) => {
    setEnteredLoginUsername(e.target.value);
  };

  const passwordLoginChangeHandler = (e) => {
    setEnteredLoginPassword(e.target.value);
  };

  const fullNameChangeHandler = (e) => {
    setEnteredFullName(e.target.value);
  };

  const usernameSignupChangeHandler = (e) => {
    setEnteredSignupUsername(e.target.value);
  };

  const passwordSignupChangeHandler = (e) => {
    setEnteredSignupPassword(e.target.value);
  };

  const rePasswordSignupChangeHandler = (e) => {
    setEnteredRePassword(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);
  };

  // LOGIN HANDLER

  const loginSubmitHandler = async (e) => {
    e.preventDefault();

    const loginData = {
      userName: enteredLoginUsername,
      password: enteredLoginPassword,
    };

    try {
      const res = await fetch("http://localhost:5000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      if (res.status === 200) {
        setEnteredLoginUsername("");
        setEnteredLoginPassword("");
        const data = await res.json();
        console.log(data);

        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify(data));
        // console.log(jwt(data.token));

        window.location = "/admin";
        // console.log(jwt(data.token));
        // alert("hello ");
      } else {
        alert("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // SIGN UP HANDLER
  const signupSubmitHandler = async (e) => {
    e.preventDefault();

    const registeredData = {
      fullName: enteredFullName,
      email: enteredEmail,
      userName: enteredSignupUsername,
      password: enteredSignupPassword,
      rePassword: enteredRePassword,
    };

    console.log(registeredData);
    try {
      const res = await fetch("http://localhost:5000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registeredData),
        //credentials: "include",
      });

      console.log(res);

      // alert("You have been successfully added to the database!");
      const data = await res.json();
      console.log(data);

      if (res.status !== 200) {
        let errors = data.errors.map((e) => e.msg);
        setErrorMessages(errors);
        return;
      }

      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("user", JSON.stringify(data));
      window.location = "/admin";
    } catch (err) {
      console.log(err);
      alert("Try again!");
    }
  };

  return (
    <>
      <Navbar />

      <div className="lg:flex">
        {/* login form */}

        <div className="h-screen bg-tertiary flex justify-center items-center lg:w-1/2">
          <div className="lg:w-4/5 md:w-3/5 w-2/3">
            <form
              onSubmit={loginSubmitHandler}
              className="-mb-20 p-10 rounded-lg shadow-lg lg:-mt-48 w-10/12 mx-auto"
            >
              <h1 className="text-center text-3xl text-gray-800 mb-12 text-gray-600 font-bold font-sans">
                log in
              </h1>

              <div className="">
                <div>
                  <input
                    className="login-input"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                    onChange={usernameLoginChangeHandler}
                    value={enteredLoginUsername}
                  />
                </div>
                <div>
                  <input
                    className="login-input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    onChange={passwordLoginChangeHandler}
                    value={enteredLoginPassword}
                  />
                </div>
              </div>

              <LoginBtn>log in</LoginBtn>

              <div className="flex justify-center my-10 ml-2">
                <img
                  className="soc-med-icon-login"
                  src="assets/icons/linkedin.png"
                  alt="LinkedIn logo"
                />
                <img
                  className="soc-med-icon-login"
                  src="assets/icons/github.png"
                  alt="Github logo"
                />
                <img
                  className="soc-med-icon-login"
                  src="assets/icons/facebook.png"
                  alt="Facebook logo"
                />
                <img
                  className="soc-med-icon-login"
                  src="assets/icons/google.png"
                  alt="Google logo"
                />
              </div>
            </form>
          </div>
        </div>

        {/* sign up form */}

        <div className="h-screen bg-secondary flex justify-center items-center lg:w-1/2">
          <div className="lg:w-4/5 md:w-3/5 w-2/3">
            <form
              onSubmit={signupSubmitHandler}
              className="-mt-28 p-10 rounded-lg shadow-lg lg:-mt-14 w-10/12 mx-auto"
            >
              <h1 className="text-center text-3xl text-gray-800 mb-12 md:mt-2 mt-20 text-gray-600 font-bold font-sans">
                sign up
              </h1>

              {errorMessages ? (
                <ul className="list-disc mt-2 mb-2">
                  {errorMessages.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              ) : (
                ""
              )}

              <div className="w-full m-auto">
                <div>
                  <input
                    className="login-input"
                    type="text"
                    name="full name"
                    id="full name"
                    placeholder="full name"
                    required
                    onChange={fullNameChangeHandler}
                    value={enteredFullName}
                  />
                </div>
                <div>
                  <input
                    className="login-input"
                    type="text"
                    name="username"
                    id="username"
                    required
                    placeholder="username"
                    onChange={usernameSignupChangeHandler}
                    value={enteredSignupUsername}
                  />
                </div>
                <div>
                  <input
                    className="login-input"
                    type="email"
                    name="e-mail"
                    id="e-mail"
                    required
                    placeholder="e-mail"
                    onChange={emailChangeHandler}
                    value={enteredEmail}
                  />
                </div>
                <div>
                  <input
                    className="login-input"
                    type="password"
                    name="password"
                    id="password"
                    required
                    placeholder="password"
                    onChange={passwordSignupChangeHandler}
                    value={enteredSignupPassword}
                  />
                </div>
                <div>
                  <input
                    className="login-input"
                    type="password"
                    name="re-password"
                    id="re-password"
                    required
                    placeholder="repeat password"
                    onChange={rePasswordSignupChangeHandler}
                    value={enteredRePassword}
                  />
                </div>
              </div>
              <LoginBtn>sign up</LoginBtn>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
