import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import StudentsApply from "./Pages/Admission/StudentsApply.jsx";
import "./index.css";
import Email from "./Email/Email.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import TimeTable from "./dashboard/TimeTable.jsx";
import FacultyApply from "./Pages/Admission/FacultyApply.jsx";
import StudentLogin from "./Pages/Login/StudentLogin.jsx";
import FacultyLogin from "./Pages/Login/FacultyLogin.jsx";
import FacultyDashBoard from "./FacultyDashBoard/FacultyDashBoard.jsx";
import AdminLogin from "./Pages/Login/AdminLogin.jsx";
import AdminDashboard from "./AdminDashboard/AdminDashboard.jsx";
import StudentPanel from './AdminDashboard/StudentPanel.jsx'
import AllStudents from "./AdminDashboard/AllStudents.jsx";
import AllBranches from "./AdminDashboard/AllBranches.jsx";
import Students from "./AdminDashboard/Students.jsx";
import OneStudents from "./AdminDashboard/OneStudents.jsx";
import FacultyPenal from "./AdminDashboard/FacultyPenal.jsx";
import AllFaculties from "./AdminDashboard/AllFaculties.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Routes>
    <Route path="/" element={<App />}>
      <Route path="/facultyLogin" element={<FacultyLogin />} />
      <Route path="/studentLogin" element={<StudentLogin />} />
      <Route path="/adminLogin" element={<AdminLogin />} />
      <Route path="/studentsApply" element={<StudentsApply />} />
      <Route path="/facultyApply" element={<FacultyApply />} />
      <Route path="/email" element={<Email />} />
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path="/dashboard/timetable" element={<TimeTable />} />
      </Route>
      <Route path="/facultyDashboard" element={<FacultyDashBoard />}>

      </Route>
      <Route path="/adminDashboard" element={<AdminDashboard />}>
         <Route  path="/adminDashboard/studentPanel" element={ <StudentPanel />}/>
         <Route  path="/adminDashboard/facultyPenal" element={ <FacultyPenal />}/>
         <Route  path="/adminDashboard/allStudents" element={ <AllStudents />}/>
         <Route  path="/adminDashboard/allFaculty" element={ <AllFaculties />}/>
         <Route  path="/adminDashboard/allStudents/:branch" element={ <AllBranches />}/>
         <Route  path="/adminDashboard/allStudents/:branch/:student" element={ <Students />}/>
         <Route  path="/adminDashboard/allStudents/:branch/:student/:OneStudents" element={ <OneStudents />}/>
      </Route>
      <Route path="/logout" element={""} />
      <Route path="/register" element={""} />
      <Route path="/courses" element={""} />
    </Route>
    // </Routes>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
