import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import CoursePage from "./pages/CoursePage";

const App = () => {
  // return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course/:id" element={<CoursePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
