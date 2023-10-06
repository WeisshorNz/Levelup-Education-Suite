// Imports:
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Modal } from "@mui/material";
import axios from "axios";
import "./logIn.css";
import ModalCloseBtn from "../../../images/src-assets/LoginSignup/esc.png";
import Teacher from "../../../images/src-assets/LoginSignup/teachers.png";
import Students from "../../../images/src-assets/LoginSignup/students.png";

// Variables for student/teacher form & database info:
export const Login = ({ open, handleClose }) => {
  const [studentName, setStudentName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword, setStudentPassword] = useState("");
  const [studentConfirmPassword, setStudentConfirmPassword] = useState("");
  const [signupStudentResult, setSignupStudentResult] = useState("");
  const [teacherName, setTeacherName] = useState("");
  const [teacherEmail, setTeacherEmail] = useState("");
  const [teacherPassword, setTeacherPassword] = useState("");
  const [teacherConfirmPassword, setTeacherConfirmPassword] = useState("");
  const [signupTeacherResult, setSignupTeacherResult] = useState("");
  const [loginStudentResult, setLoginStudentResult] = useState("");
  const [loginTeacherResult, setLoginTeacherResult] = useState("");
  const [studentFormType, setStudentFormType] = useState("signup"); // Set initial form to signup upon open
  const [teacherFormType, setTeacherFormType] = useState("signup");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [userID, setUserID] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");

  // event handler functions to update the variables when form input fields are updated by teacher/students:
  const handleStudentEmailChange = (e) => {
    setStudentEmail(e.target.value);
  };

  const handleStudentPasswordChange = (e) => {
    setStudentPassword(e.target.value);
  };

  const handleStudentConfirmPasswordChange = (e) => {
    setStudentConfirmPassword(e.target.value);
  };

  const handleTeacherEmailChange = (e) => {
    setTeacherEmail(e.target.value);
  };

  const handleTeacherPasswordChange = (e) => {
    setTeacherPassword(e.target.value);
  };

  const handleTeacherConfirmPasswordChange = (e) => {
    setTeacherConfirmPassword(e.target.value);
  };

  // Navigation hook to send user to the right page upon login:
  const goTo = useNavigate();

  // Handles Student Login form upon submission, including success/failure validation & message and navigate upon login.
  const handleStudentLogin = (e) => {
    e.preventDefault(); // Prevent refresh default on submission to ensure execution of below validations etc

    // send a post request to api/loginStudent including email & pw
    axios
      .post("http://localhost:4000/api/loginStudent", {
        email: studentEmail,
        password: studentPassword,
      })
      .then((response) => {
        setLoginStudentResult(
          <span className="login-successful">Login Successful!</span>
        );
        //TEST LINE: checks for profile_pic validity.
        console.log(response.data.profile_pic);

        //extract name, avatar & id from res data object. (object destructuring)
        const { name, avatar, id } = response.data;

        //store the info in localstorage
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: response.data.id,
            name: response.data.name,
            avatar: response.data.profile_pic,
          })
        );

        //update the state variables with the user info:
        setUserID(id);
        setUserName(name);
        setUserAvatar(avatar);
        setIsLoggedIn(true);

        //navigate to project library
        goTo(`/student-project-library`);
      })

      //error catching
      .catch((error) => {
        setLoginStudentResult(
          <span className="login-failed">Login Failed. Please Try Again.</span>
        );
        console.log(error);
      });
  };

  // Handles Student Signup form upon submission, including success/failure validation & message and navigate upon login.
  const handleStudentSignup = (e) => {
    e.preventDefault(); // prevent default refresh - allows execution of rest of the code including API signup

    if (studentPassword !== studentConfirmPassword) {
      setSignupStudentResult(
        <span className="passwords-failed">
          Passwords do not match, please try again.
        </span>
      );
      return;
    }
    axios
      .post("http://localhost:4000/api/signupStudent", {
        name: studentName,
        email: studentEmail,
        password: studentPassword,
        confirmPassword: studentConfirmPassword,
      })
      .then((response) => {
        setSignupStudentResult(
          <span className="signup-successful">Sign Up Successful</span>
        );
        console.log(response);
      })
      .catch((error) => {
        setSignupStudentResult(
          <span className="signup-failed">
            Sign Up Failed. Please Try Again.
          </span>
        );
        console.log(error);
      });
  };
  // Handles Teacher Login form upon submission, including success/failure validation & message and navigate upon login.
  const handleTeacherLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/api/loginTeacher", {
        email: teacherEmail,
        password: teacherPassword,
      })
      .then((response) => {
        setLoginTeacherResult(
          <span className="login-successful">Login Successful!</span>
        );
        console.log(response);
        goTo(`/studentdashboard/projectsubmissions`);
      })
      .catch((error) => {
        setLoginTeacherResult(
          <span className="login-failed">Login Failed. Please Try Again</span>
        );
        console.log(error);
      });
  };
  // Handles Teacher Signup form upon submission, including success/failure validation & message and navigate upon login.
  const handleTeacherSignup = (e) => {
    e.preventDefault();

    if (teacherPassword !== teacherConfirmPassword) {
      setSignupTeacherResult(
        <span className="passwords-failed">
          Passwords do not match, please try again.
        </span>
      );
      return;
    }
    axios
      .post("http://localhost:4000/api/signupTeacher", {
        teacher_name: teacherName,
        email: teacherEmail,
        password: teacherPassword,
        confirmPassword: teacherConfirmPassword,
      })
      .then((response) => {
        setSignupTeacherResult(
          <span className="signup-successful">Sign Up Successful</span>
        );
      })
      .catch((error) => {
        setSignupTeacherResult(
          <span className="signup-failed">
            Sign Up Failed. Please Try Again.
          </span>
        );
        console.log(error);
      });
  };

  // Modal section:
  return (
    // open/close params for modal
    <Modal open={open} onClose={handleClose}>
      <div className="signup-modal">
        <img // Close X img top right of modal
          src={ModalCloseBtn}
          id="login_close_btn"
          alt="Close Pop Up Symbol"
          onClick={handleClose}
        />
        <div className="signup-modal-content">
          <div className="student-teacher-split">
            {/* // Student section: */}
            <div className="signup-students">
              <img
                src={Students}
                className="login-signup-imgs"
                alt="Students"
              />
              <h1 className="login-signup-header">Students</h1>

              <div className="login-signup-sub-headings">
                {/* Buttons to toggle between forms: */}
                <button
                  className={`home-login-btns ${
                    studentFormType === "login" && "active" // if formtype = login, add active class
                  }`}
                  onClick={() => setStudentFormType("login")} //on click change formtype to login
                >
                  LOG IN
                </button>
                <button
                  className={`home-signup-btns ${
                    studentFormType === "signup" && "active" // if formtype = signup, add active class
                  }`}
                  onClick={() => setStudentFormType("signup")} //on click change formtype to signup
                >
                  SIGN UP
                </button>
              </div>
              {/* // Login section: */}
              {studentFormType === "login" ? (
                <div>
                  <form onSubmit={handleStudentLogin}>
                    <div className="login-signup-input-container">
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={studentEmail}
                        onChange={handleStudentEmailChange}
                        className="login-signup-input-field"
                      />
                      <input
                        type="password"
                        required
                        placeholder="Password"
                        value={studentPassword}
                        onChange={handleStudentPasswordChange}
                        className="login-signup-input-field"
                      />
                      <p className="result_p">{loginStudentResult}</p>
                      <button type="submit" className="login-signup-button">
                        LOG IN
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div>
                  {/* // Signup section: */}
                  <form onSubmit={handleStudentSignup}>
                    <div className="login-signup-input-container">
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        className="login-signup-input-field"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={studentEmail}
                        onChange={handleStudentEmailChange}
                        className="login-signup-input-field"
                      />
                      <input
                        type="password"
                        required
                        placeholder="Password"
                        value={studentPassword}
                        onChange={handleStudentPasswordChange}
                        className="login-signup-input-field"
                      />
                      <input
                        type="password"
                        required
                        placeholder="Confirm Password"
                        value={studentConfirmPassword}
                        onChange={handleStudentConfirmPasswordChange}
                        className="login-signup-input-field"
                      />
                      <p id="result_p">{signupStudentResult}</p>
                      <button type="submit" className="login-signup-button">
                        SIGN UP
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
          <div className="signup-students">
            {/* //Teachers section: */}
            <div className="signup-teachers">
              <img src={Teacher} className="login-signup-imgs" alt="Teacher" />
              <h1 className="login-signup-header">Teachers</h1>

              <div className="login-signup-sub-headings">
                {/* Buttons to toggle between forms: */}
                <button
                  className={`home-login-btns ${
                    teacherFormType === "login" && "active" // if formtype = login, add active class
                  }`}
                  onClick={() => setTeacherFormType("login")} // when clicked change form type to login
                >
                  LOG IN
                </button>
                <button
                  className={`home-signup-btns ${
                    teacherFormType === "signup" && "active" // if formtype = signup, add active class
                  }`}
                  onClick={() => {
                    setTeacherFormType("signup"); // when clicked change form type to signup
                  }}
                >
                  SIGN UP
                </button>
              </div>
              {/* // Login section: */}
              {teacherFormType === "login" ? (
                <div>
                  <form onSubmit={handleTeacherLogin}>
                    <div className="login-signup-input-container">
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={teacherEmail}
                        onChange={handleTeacherEmailChange}
                        className="login-signup-input-field"
                      />
                      <input
                        type="password"
                        required
                        placeholder="Password"
                        value={teacherPassword}
                        onChange={handleTeacherPasswordChange}
                        className="login-signup-input-field"
                      />
                      <p id="result_p">{loginTeacherResult}</p>
                      <button type="submit" className="login-signup-button">
                        LOG IN
                      </button>
                    </div>{" "}
                  </form>
                </div>
              ) : (
                <div>
                  {/* // Signup section: */}
                  <form onSubmit={handleTeacherSignup}>
                    <div className="login-signup-input-container">
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        value={teacherName}
                        onChange={(e) => setTeacherName(e.target.value)}
                        className="login-signup-input-field"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email Address"
                        value={teacherEmail}
                        onChange={handleTeacherEmailChange}
                        className="login-signup-input-field"
                      />
                      <input
                        type="password"
                        required
                        placeholder="Password"
                        value={teacherPassword}
                        onChange={handleTeacherPasswordChange}
                        className="login-signup-input-field"
                      />
                      <input
                        type="password"
                        required
                        placeholder="Confirm Password"
                        value={teacherConfirmPassword}
                        onChange={handleTeacherConfirmPasswordChange}
                        className="login-signup-input-field"
                      />
                      <p id="result_p">{signupTeacherResult}</p>
                      <button type="submit" className="login-signup-button">
                        SIGN UP
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};
