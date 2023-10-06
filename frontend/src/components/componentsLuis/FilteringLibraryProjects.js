import React, { useState } from "react";
import "../../styling/SPL.css";
import Project01 from "../componentsLuis/projectsImages/Project01.png";
import Project02 from "../componentsLuis/projectsImages/Project02.png";
import Project03 from "../componentsLuis/projectsImages/Project03.png";
import Project04 from "../componentsLuis/projectsImages/Project04.png";
import Project05 from "../componentsLuis/projectsImages/Project05.png";
import Project06 from "../componentsLuis/projectsImages/Project06.png";
import Project07 from "../componentsLuis/projectsImages/Project07.png";
import Project08 from "../componentsLuis/projectsImages/Project08.png";
import Project09 from "../componentsLuis/projectsImages/Project09.png";
import Project10 from "../componentsLuis/projectsImages/Project10.png";
import Project11 from "../componentsLuis/projectsImages/Project11.png";
import Project12 from "../componentsLuis/projectsImages/Project12.png";
import Project13 from "../componentsLuis/projectsImages/Project13.png";
import Project14 from "../componentsLuis/projectsImages/Project14.png";
import Project15 from "../componentsLuis/projectsImages/Project15.png";

export default function FilteringLibraryProjects() {
  const pictureData = [
    {
      id: 1,
      type: "Project",
      name: "Introduction",
      image: <img src={Project01} alt="Introduction" />,
      category: "Animation",
      level: "Beginner",
      subscription: "Free",
    },
    {
      id: 2,
      type: "Project",
      name: "My Birthday",
      image: <img src={Project02} alt="My Birthday" />,
      category: "Game",
      level: "Beginner",
      subscription: "Free",
    },
    {
      id: 3,
      type: "Project",
      name: "10 Block Challenge",
      image: <img src={Project03} alt="10 Block Challenge" />,
      category: "Animation",
      level: "Intermediate",
      subscription: "Premium",
    },
    {
      id: 4,
      type: "Project",
      name: "Build a band",
      image: <img src={Project04} alt="Build a band" />,
      category: "Game",
      level: "Intermediate",
      subscription: "Premium",
    },
    {
      id: 5,
      type: "Project",
      name: "The bear and the monkey",
      image: <img src={Project05} alt="The bear and the monkey" />,
      category: "Game",
      level: "Advanced",
      subscription: "Premium",
    },
    {
      id: 6,
      type: "Project",
      name: "Debugging",
      image: <img src={Project06} alt="Debugging" />,
      category: "Augmented Reality",
      level: "Advanced",
      subscription: "Premium",
    },
    {
      id: 7,
      type: "Project",
      name: "About me",
      image: <img src={Project07} alt="About me" />,
      category: "Animation",
      level: "Begginer",
      subscription: "Free",
    },
    {
      id: 8,
      type: "Project",
      name: "I am here!",
      image: <img src={Project08} alt="I am here!" />,
      category: "Animation",
      level: "Intermediate",
      subscription: "Premium",
    },
    {
      id: 9,
      type: "Project",
      name: "Funny faces",
      image: <img src={Project09} alt="Funny Faces" />,
      category: "Game",
      level: "Beginner",
      subscription: "Premium",
    },
    {
      id: 10,
      type: "Project",
      name: "It tickles!",
      image: <img src={Project10} alt="It tickles!" />,
      category: "Animation",
      level: "Intermediate",
      subscription: "Premium",
    },
    {
      id: 11,
      type: "Project",
      name: "Penguin in a Desert",
      image: <img src={Project11} alt="Penguin in a Desert" />,
      category: "Chatbot",
      level: "Beginner",
      subscription: "Free",
    },
    {
      id: 12,
      type: "Project",
      name: "Time Travel",
      image: <img src={Project12} alt="Time Travel" />,
      category: "Animation",
      level: "Beginner",
      subscription: "Free",
    },
    {
      id: 13,
      type: "Project",
      name: "Birthday Card",
      image: <img src={Project13} alt="Birthday Card" />,
      category: "Chatbot",
      level: "Beginner",
      subscription: "Premium",
    },
    {
      id: 14,
      type: "Project",
      name: "The Lion and the Mouse Part 1",
      image: <img src={Project14} alt="The Lion and the Mouse Part 1" />,
      category: "Animation",
      level: "Beginner",
      subscription: "Premium",
    },
    {
      id: 15,
      type: "Project",
      name: "The Lion and the Mouse Part 2",
      image: <img src={Project15} alt="The Lion and the Mouse Part 2" />,
      category: "Animation",
      level: "Intermediate",
      subscription: "Premium",
    },
  ];

  const [displayedProjects, setDisplayedProjects] = useState(pictureData);
  const [valueSelected, setValueSelected] = useState("");
  const [quantityDisplayed, setQuantityDisplayed] = useState();

  const handleSelection = (value) => {
    setValueSelected(value);
    if (value === "Beginner") {
      const beginnerProjects = pictureData.filter(
        (project) => project.level === "Beginner"
      );
      setDisplayedProjects(beginnerProjects);
    } else if (value === "Intermediate") {
      const intermediateProjects = pictureData.filter(
        (project) => project.level === "Intermediate"
      );
      setDisplayedProjects(intermediateProjects);
    } else if (value === "Advanced") {
      const advancedProjects = pictureData.filter(
        (project) => project.level === "Advanced"
      );
      setDisplayedProjects(advancedProjects);
    } else {
      setDisplayedProjects(valueSelected);
    }
  };
  const handleQuantity = (total) => {
    setQuantityDisplayed(total);
  };

  const filteredQuantity = displayedProjects.slice(0, quantityDisplayed);
  console.log(filteredQuantity);

  return (
    <>
      <div className="button-container">
        <div className="buttons left">
          <button
            id="beginner"
            onClick={() => handleSelection("Beginner")}
            style={{
              backgroundColor:
                valueSelected === "Beginner" ? "rgb(15, 150, 241)" : "",
              color: valueSelected === "Beginner" ? "white" : "",
            }}
          >
            BEGINNER
          </button>

          <button
            id="intermediate"
            onClick={() => handleSelection("Intermediate")}
            style={{
              backgroundColor:
                valueSelected === "Intermediate" ? "rgb(15, 150, 241)" : "",
              color: valueSelected === "Intermediate" ? "white" : "",
            }}
          >
            INTERMEDIATE
          </button>

          <button
            id="advanced"
            onClick={() => handleSelection("Advanced")}
            style={{
              backgroundColor:
                valueSelected === "Advanced" ? "rgb(15, 150, 241)" : "",
              color: valueSelected === "Advanced" ? "white" : "",
            }}
          >
            ADVANCED
          </button>
        </div>
        <div className="buttons right">
          <h3>SHOW</h3>
          <button
            id="five"
            onClick={() => handleQuantity(5)}
            style={{
              backgroundColor:
                quantityDisplayed === 5 ? "rgb(15, 150, 241)" : "",
              color: quantityDisplayed === 5 ? "white" : "",
            }}
          >
            5
          </button>
          <button
            id="ten"
            onClick={() => handleQuantity(10)}
            style={{
              backgroundColor:
                quantityDisplayed === 10 ? "rgb(15, 150, 241)" : "",
              color: quantityDisplayed === 10 ? "white" : "",
            }}
          >
            10
          </button>
          <button
            id="all"
            onClick={() => handleQuantity(pictureData.length)}
            style={{
              backgroundColor:
                quantityDisplayed === pictureData.length
                  ? "rgb(15, 150, 241)"
                  : "",
              color: quantityDisplayed === pictureData.length ? "white" : "",
            }}
          >
            All
          </button>
        </div>
      </div>

      <div className="image-container">
        {filteredQuantity.map((project) => (
          <div class="image" key={project.id}>
            {project.image}
            <h2>{project.name}</h2>
            <p>
              {project.level} | {project.category}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
