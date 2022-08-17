import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';


const CoursesComponent = () => {
    const [courses, setCourses] = useState([])
    const [user, setUser] = useState(null)
    const baseUrl = process.env.REACT_APP_API;
    const getCourseData = async () => {
        try {

            axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token')
            axios.get(`${baseUrl}profile/`).then((response) => {

                const responseData = response.data;
                if (responseData.isSuccess) setUser(responseData.data.user)
                console.log(user);
            });
        } catch (error) {
            console.log(error);
        }
    }
    const getUserData = async () => {
        try {

            axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token')
            axios.get(`${baseUrl}course/all`).then((response) => {

                const responseData = response.data;
                if (responseData.isSuccess) setCourses(responseData.data.courses)
                console.log(courses);
            });
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getUserData()
        getCourseData()
    }, []);
    return (

        <div>
            {courses.length > 0 ? courses.map(course => <>
                <div class="p-6 max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <Link to={`/course/${course._id}`}>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{course.name}</h5>
                    </Link>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Course By {course.teachersId.name}</p>
                    <Link to={`/course/${course._id}`} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Join now

                    </Link>
                </div>
            </>) : <>No course found</>
            }

            {user && <div className="user">
                <p>Name: {user?.name}</p>
                <p>email: {user?.email}</p>
                <p>Type: {user?.userType}</p>
            </div>}

        </div >
    )
}
export default CoursesComponent