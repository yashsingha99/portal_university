import { useEffect } from "react";
import "./App.css";
import Header from "./Header/Header";
import Navbar from "./components/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Slider from "./components/Slider";
import axios from "axios";
import Footer from "./components/Footer";
function App() {
  const location = useLocation().pathname.split("/");
  useEffect(() => {
    const fetchTimetable = async () => {
      const res = await axios.get(
        "http://localhost:1337/api/timetables?populate=*"
      );
    };
    fetchTimetable();
  }, []);
  return (
    <div className=" students w-full">
      {location[1] === "dashboard" ||
      location[1] === "facultyDashboard" ||
      location[1] === "adminDashboard" ? (
        ""
      ) : (
        <>
          <Navbar />
        </>
      )}

      <>
        {(useLocation().pathname === "/") && <Slider />}
        <Outlet />
        {(location[1] !== "dashboard" ||
          location[1] !== "facultyDashboard" ||
          location[1] !== "adminDashboard" ||
          useLocation().pathname === "/") && <Footer />}
      </>
    </div>
  );
}

export default App;
