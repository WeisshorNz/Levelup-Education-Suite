// Imports:
import LearningPathways from "./LearningPathways";
import DigitalTechnologies from "./DigitalTechnologies";
import KeyCompetencies from "./KeyCompetencies";
import IR4 from "./IR4";
import { useState } from "react";
import "../../kSComponents/homeContent.css";

// Home help section of home page:
export default function HomeHelp() {
  const [displayedContent, setDisplayedContent] = useState({
    component: <KeyCompetencies />, // default state showing on page is this section
    name: "key-competencies",
  });
  //onclick function that changes the displayed content to update the show the different components
  function handleContentClick(event) {
    console.log(event.target.id);
    switch (event.target.id) {
      case "learning-pathways":
        setDisplayedContent({
          component: <LearningPathways />,
          name: "learning-pathways",
        });
        break;
      case "digital-technologies":
        setDisplayedContent({
          component: <DigitalTechnologies />,
          name: "digital-technologies",
        });
        break;
      case "key-competencies":
        setDisplayedContent({
          component: <KeyCompetencies />,
          name: "key-competencies",
        });
        break;
      case "ir4":
        setDisplayedContent({
          component: <IR4 />,
          name: "ir4",
        });
        break;

      default:
        break;
    }
  }

  return (
    // How our programme helps text section:
    <div className="home-help-container">
      <h1 className="home-help-h1">
        How our programme helps teachers and schools
      </h1>
      <div className="home-btns">
        {/* // Handle onclick for the corresponding blue square images to laptop image by using a dynamic class */}
        <div
          id="learning-pathways"
          className={`home-btn ${
            displayedContent.name === "learning-pathways" && "home-help-active"
          } `}
          onClick={handleContentClick}
        >
          LEARNING PATHWAYS
        </div>
        <div
          id="digital-technologies"
          className={`home-btn ${
            displayedContent.name === "digital-technologies" &&
            "home-help-active"
          } `}
          onClick={handleContentClick}
        >
          DIGITAL TECHNOLOGIES
        </div>
        <div
          id="key-competencies"
          className={`home-btn ${
            displayedContent.name === "key-competencies" && "home-help-active"
          } `}
          onClick={handleContentClick}
        >
          KEY COMPETENCIES
        </div>
        <div
          id="ir4"
          className={`home-btn ${
            displayedContent.name === "ir4" && "home-help-active"
          } `}
          onClick={handleContentClick}
        >
          IR4.0
        </div>
      </div>
      {displayedContent.component}
    </div>
  );
}
