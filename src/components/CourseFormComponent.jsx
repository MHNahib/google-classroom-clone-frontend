import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { CreateCourses } from "../routes";

const CourseFormComponent = ({ title, data, buttonText }) => {
  const navigate = useNavigate();
  const [courseName, setcourseName] = useState(data ? data : "");
  const [error, setError] = useState(null);
  const submitForm = async (e) => {
    e.preventDefault();
    console.log(courseName);

    try {
      const responseData = await CreateCourses({ name: courseName });
      console.log(responseData);
      if (responseData.isSuccess) {
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
              {title}
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={submitForm}>
              {/* email  */}
              <div class="flex flex-wrap -mx-3 mb-6">
                <div class="w-full px-3">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    for="name"
                  >
                    Course name
                  </label>
                  <input
                    class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="name"
                    type="text"
                    placeholder="john@something.com"
                    value={courseName}
                    onChange={(e) => setcourseName(e.target.value)}
                  />
                  {error && (
                    <p class="text-red-500 text-xs italic">{error.message}</p>
                  )}
                  <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                      <button
                        type="input"
                        value="Login"
                        className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        {buttonText}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseFormComponent;
