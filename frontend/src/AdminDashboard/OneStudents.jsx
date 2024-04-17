import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function OneStudents() {
    const StudentId = useLocation().pathname.split('/')[useLocation().pathname.split('/').length-1]
    const [student, setStudent] = useState()
  useEffect(() => {
    const fetch = async () => {

     const res = await axios.get(`http://localhost:1337/api/students/${StudentId}?populate=*`);
     console.log(res.data.data);
     setStudent(res.data.data)
    };
    fetch()
  }, []);

  return(
    <>
      
     {/* <div>{student.attributes}</div> */}
     </>
)
}

export default OneStudents;
