import React, {useState} from 'react';
import LoginBtn from './LoginBtn';


export default function Login() {

    const [formData, setFormData] = useState({ 
        user: {
          username: "", 
          password: "" 
        },
      });
    
      const handleChange = (e) => {
        setFormData({
          user: {
            ...formData.user,
            [e.target.name]: e.target.value,
          },
        });
      };
  return (
    <div className="lg:flex">

      {/* login form */}

      <div class="h-screen bg-tertiary flex justify-center items-center lg:w-1/2">
        <div class="lg:w-4/5 md:w-3/5 w-2/3">
          <form class="-mb-20 p-10 rounded-lg shadow-lg lg:-mt-48 w-10/12 mx-auto">
            <h1 class="text-center text-3xl text-gray-800 mb-12 text-gray-600 font-bold font-sans">
              log in
            </h1>

            <div className="">
                <div>
                  <input
                    class="login-input"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                    value={formData.user.username}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    className="login-input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    value={formData.user.password}
                    onChange={handleChange}
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

      <div class="h-screen bg-secondary flex justify-center items-center lg:w-1/2">
        <div class="lg:w-4/5 md:w-3/5 w-2/3">
          <form class="-mt-28 p-10 rounded-lg shadow-lg lg:-mt-14 w-10/12 mx-auto">
            <h1 class="text-center text-3xl text-gray-800 mb-12 text-gray-600 font-bold font-sans">
              sign up
            </h1>

            <div className="w-full m-auto">
                <div>
                  <input
                    class="login-input"
                    type="text"
                    name="full name"
                    id="full name"
                    placeholder="full name"
                    value={formData.user.fullname}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    class="login-input"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="username"
                    value={formData.user.username}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    class="login-input"
                    type="email"
                    name="e-mail"
                    id="e-mail"
                    placeholder="e-mail"
                    value={formData.user.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    class="login-input"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="password"
                    value={formData.user.password}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    class="login-input"
                    type="password"
                    name="re-password"
                    id="re-password"
                    placeholder="repeat password"
                    value={formData.user.repassword}
                    onChange={handleChange}
                  />
                </div>
            </div>

          <LoginBtn>sign up</LoginBtn>
          </form>
        </div>
      </div>
    </div>
  );
}
