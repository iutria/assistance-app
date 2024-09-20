import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../views/Login/Login";
import Admin from "../views/Admin/Admin";
import Student from "../views/Student/Student";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/student" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
