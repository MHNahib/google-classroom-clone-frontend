import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import CoursePage from "./pages/CoursePage";
import SignupPage from "./pages/SignupPage";
import CreateNewCoursePage from "./pages/CreateNewCoursePage";
import MyCourses from "./pages/MyCourses";

const App = () => {
  // return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course/create" element={<CreateNewCoursePage />} />
          <Route path="/course/:id" element={<CoursePage />} />
          <Route path="/course/my" element={<MyCourses />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
