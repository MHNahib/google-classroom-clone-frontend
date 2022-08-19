import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div class="p-6 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/course/${course._id}`}>
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {course.name}
        </h5>
      </Link>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Course By {course.teachersId.name}
      </p>
      <Link
        to={`/course/${course._id}`}
        class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Join now
      </Link>
    </div>
  );
};

export default CourseCard;
