import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { Login } from "../routes";

const LoginComponent = () => {
  const navigate = useNavigate();
  const [emailOrId, setemailOrId] = useState("");
  const [password, setPassowrd] = useState("");
  const [error, setError] = useState(null);

  const loginUser = async (e) => {
    e.preventDefault();
    console.log(emailOrId, password);

    try {
      const responseData = await Login({ email: emailOrId, password });
      console.log(responseData);
      if (responseData.isSuccess) {
        localStorage.setItem("token", responseData.data.token);
        setError(null);
        navigate("/dashboard");
      } else {
        setError(responseData);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={loginUser}>
              {/* email  */}
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="email"
                    type="text"
                    placeholder="john@something.com"
                    value={emailOrId}
                    onChange={(e) => setemailOrId(e.target.value)}
                  />
                </div>
              </div>

              {/* password */}
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="grid-password"
                  >
                    Password
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-password"
                    type="password"
                    placeholder="******************"
                    value={password}
                    onChange={(e) => setPassowrd(e.target.value)}
                  />
                  {error && (
                    <p class="text-red-500 text-xs italic">{error.message}</p>
                  )}
                </div>
              </div>

              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <button
                    type="input"
                    value="Login"
                    className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-2">
                    <Link
                      to="/signup"
                      className="mr-2 font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;
