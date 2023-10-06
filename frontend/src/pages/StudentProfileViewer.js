import NavBar from "../components/kSComponents/NavBar.js";
import Footer from "../components/componentsLuis/Footer.jsx";
import "../styling/SPV.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function StudentProfileViewer() {
  const [student, setStudent] = useState("");
  const  { id } = useParams();

  useEffect(() => {
    fetchStudent();
  }, [] );

  const fetchStudent = () => {
    fetch(`http://localhost:4000/api/student_teacher/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setStudent(data[0]);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  // Function to format fetched date as "dd MMM yyyy"
  function formatDate(date) {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-NZ", options);
  }

  // Convert the backend date to the desired format
  const formattedDate = formatDate(student.date_of_birth);

  return (
    <>
      <header className="navbar">
        <NavBar />
      </header>

      <div className="main-Container">
        <div className="profile-Pic-Container">
          <img
            id="Profile-Pic"
            src={process.env.PUBLIC_URL + "/" + student.profile_pic} // renders studend profile picture on page
            alt="Student Profile Pic"
          />
          <div id="Profile-Buttons-Container">
            <button className="Profile-Button">EDIT PROFILE </button> <br></br>
            <button className="Profile-Button">CHANGE PHOTO</button>
          </div>
        </div>

        <div className="student-Info-Container"> 
          <h1>{student.name}</h1> 

          <div className="Displayed-info">
            <ul className="static-info">
              <li>School</li>
              <li>Teacher</li>
              <li>Course</li>
              <li>Date of Birth</li>
              <li>Contact Number</li>
              <li>Email Address</li>
            </ul>

            <ul className="server-info">
              <li>{student.school}</li>
              <li>{student.teacher_name}</li>
              <li>{student.course}</li>
              <li>{formattedDate}</li>
              <li>{student.contact_number}</li>
              <li>{student.email} </li>
            </ul>
          </div>
        </div>

        <div id="button">
          <Link to="/student-project-library">
            <button id="back-To-Projects"> BACK TO PROJECTS</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
