import React, { useEffect, useState } from "react";
import axios from "axios";
const TimeTable = () => {
  const [timeTable, setTimeTable] = useState([]);
  useEffect(() => {
    const fetchTimeTable = async () => {
      const res = await axios.get(
        "http://localhost:1337/api/timetables?populate=*"
      );
      //   console.log(res.data.data);
      setTimeTable(res.data.data);
    };
    fetchTimeTable();
  }, []);
  const hours = [
    "10 AM - 11 AM",
    "11 AM - 12 AM",
    "12 AM - 1 PM",
    "1 PM - 2 PM",
    "2 PM - 3 PM",
    "3 PM - 4 PM",
    "4 PM - 5 PM",
    "5 PM - 6 PM",
  ];
  const days = [
    "Time / Day",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div
        style={{ height: "100%", width: "100%" }}
        className=" border-4 p-8  "
      >
        <h1
          style={{ borderBottom: "solid 1px gray" }}
          className="font-bold mb-4  text-3xl text-blue-950"
        >
          My Time Table
        </h1>
        <div className="flex justify-center">
          {days.map((day) => (
            <div
              key={day}
              className="w-4/5 h-20 bg-blue-500 border-2 text-lg text-white font-semibold flex justify-center items-center"
            >
              {day}
            </div>
          ))}
        </div>
        <div className="flex">
          <div className="w-full">
            {hours.map((hr) => (
              <div
                key={hr}
                className="w-full h-20 bg-blue-500 text-white border-2 text-lg font-semibold flex justify-center items-center"
              >
                {hr}
              </div>
            ))}
          </div>

          <div className="w-full">
            <div className="">
              {hours.map((hr) => (
                <div
                  key={hr}
                  className="w-full h-20 text-gray-600 border-2 text-lg font-semibold flex justify-center items-center"
                >
                  {hr}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeTable;
