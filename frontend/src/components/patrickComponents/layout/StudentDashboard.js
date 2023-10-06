import React, { useState } from "react";
import styles from "../../../styling/StudentDashboardSidebar.module.css";
import SidebarIcons from "../../../styling/SidebarIcons.module.css";
import { NavLink } from "react-router-dom";
import LearningObjectivesicon from "../../../images/studentDashboard/learningObjectives.png";
import Instructionsicon from "../../../images/studentDashboard/instructions.png";
import Videoicon from "../../../images/studentDashboard/video.png";
import MakeProjecticon from "../../../images/studentDashboard/makeProjectSelected.png";
import SubmitProjecticon from "../../../images/studentDashboard/submitProject.png";
import takethequizicon from "../../../images/studentDashboard/takeTheQuiz.png";
import projectsubmission from "../../../images/studentDashboard/projectSubmissions.png";
import AidenAndrewSD from "../../../images/studentDashboard/students (1)/students/AidenAndrews.png";
import RightArrowSD from "../../../images/studentDashboard/right-arrowSD.png";
import logoutSD from "../../../images/studentDashboard/logoutSD.png";
import profileSD from "../../../images/studentDashboard/profileSD.png";
import settingsSD from "../../../images/studentDashboard/settingsSD.png";
import StudentAdvertisement from "../../../images/studentDashboard/ADVERTISEMENTSD.png";

const StudentDashboard = () => {
  const [inActive, setInActive] = useState(false);
  const [expandedAndrewSD, setExpandedAndrewSD] = useState(false);
  const [RightArrowclickSD, setRightArrowclickSD] = useState(false);
  const [sidebarImagesSpace, setSidebarImagesSpace] = useState(false);
  const [showAdvertisement, setShowAdvertisement] = useState(false);
  // use to control the sidebar menu

  const toggleSidebar = () => {
    setInActive(!inActive);
    setExpandedAndrewSD(!expandedAndrewSD);
    setRightArrowclickSD(!RightArrowclickSD);
    setSidebarImagesSpace(!sidebarImagesSpace);
    setShowAdvertisement(!showAdvertisement);
  };

  const sidebarMenu = [
    {
      path: "/studentdashboard/learningobjectives",
      name: "Learning Objectives",
      img: LearningObjectivesicon,
    },
    {
      path: "/studentdashboard/instructions",
      name: "Instructions",
      img: Instructionsicon,
    },
    {
      path: "/studentdashboard/videotutorial",
      name: "Video Tutorial",
      img: Videoicon,
    },

    {
      path: "/studentdashboard/makeproject",
      name: "Make Project",
      img: MakeProjecticon,
    },
    {
      path: "/studentdashboard/submitproject",
      name: "Submit Project",
      img: SubmitProjecticon,
    },
    {
      path: "/studentdashboard/takethequiz",
      name: "Take the Quiz",
      img: takethequizicon,
    },
    {
      path: "/studentdashboard/projectsubmissions",
      name: "Project Submission",
      img: projectsubmission,
    },
  ];

  // Conditional Rendering Picture

  return (
    <>
      <div
        className={`${styles.sidebar}  ${
          inActive ? styles.inActive : ""
        }          `}
      >
        <br></br>
        <img
          src={AidenAndrewSD}
          alt="AidenAndrewsPicSD"
          className={`${styles["AidenAndrewsSD"]} ${
            expandedAndrewSD ? styles.middlePositionAndrewSD : ""
          }`}
        />
        <div>
          {sidebarMenu.map((item, index) => (
            <NavLink to={item.path} key={index}>
              <div
                className={`${SidebarIcons["SidebarWords"]} ${
                  inActive ? SidebarIcons.active : ""
                }`}
              >
                <img
                  src={item.img}
                  alt={item.img}
                  className={SidebarIcons["SidebarIcons"]}
                />
                {inActive && (
                  <span className={styles.sidebarTitle}>{item.name}</span>
                )}
              </div>
            </NavLink>
          ))}
          <button
            onClick={toggleSidebar}
            className={styles["ArrowSD"]}
            style={{
              backgroundColor: " #43c0f6",
              padding: 5,
              margin: 10,
              border: 10,
            }}
          >
            <img
              src={RightArrowSD}
              alt="makeproject"
              className={`${styles["RightArrowSD"]} ${
                RightArrowclickSD ? styles.RightArrowmiddlePositionSD : ""
              }`}
            />
          </button>
        </div>
        <img
          src={StudentAdvertisement}
          alt="profileSD"
          className={`${styles.StudentAdvertisement} ${
            RightArrowclickSD ? styles.StudentAdvertisementinActive : ""
          }`}
        />

        <img
          src={profileSD}
          alt="profileSD"
          className={`${styles.profileSD} ${
            RightArrowclickSD && sidebarImagesSpace
              ? styles.profileSDActive
              : ""
          }`}
        />
        {RightArrowclickSD && sidebarImagesSpace && (
          <p className={styles.ProfileStatement}>Profile</p>
        )}

        <img
          src={settingsSD}
          alt="settingsSD"
          className={`${styles.settingsSD} ${
            RightArrowclickSD && sidebarImagesSpace
              ? styles.settingsSDActive
              : ""
          }`}
        />
        {RightArrowclickSD && sidebarImagesSpace && (
          <p className={styles.SettingStatement}>Settings</p>
        )}
        <br></br>
        <img
          src={logoutSD}
          alt="logoutSD"
          className={`${styles.logoutSD} ${
            RightArrowclickSD && sidebarImagesSpace ? styles.logoutSDActive : ""
          }`}
        />
        {RightArrowclickSD && sidebarImagesSpace && (
          <p className={styles.LogoutStatement}>Logout</p>
        )}
      </div>
    </>
  );
};

export default StudentDashboard;
