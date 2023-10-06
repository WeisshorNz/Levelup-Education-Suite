import React, { useEffect, useState } from "react";
import "../../styling/SPL.css";
import { Link } from "react-router-dom";


export default function TestBackendLibraryProjects() {

  // api that fetches all data on projects table from remote server
  const fetchProject = () => {
    fetch(`http://localhost:4000/api/project-library/`)
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("pictureData", JSON.stringify(data)); // Store the fetched data in local storage
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Check if the data exists in local storage
  const storedData = localStorage.getItem("pictureData");
  const pictureData = storedData ? JSON.parse(storedData) : [];

  useEffect(() => {
    if (!storedData) {
      fetchProject();
    }
  }, []);

  console.log("pictureData:", pictureData);

  const [displayedProjects, setDisplayedProjects] = useState(pictureData); //displays all data in pictureData array, by default.
  const [valueSelected, setValueSelected] = useState("");
  const [quantityDisplayed, setQuantityDisplayed] = useState(pictureData.length);
  const [selectedSubscriptions, setSelectedSubscriptions] = useState([]);

  const handleSelection = (value) => {
  setValueSelected(value);
  if (value === "Beginner") {
    const beginnerProjects = pictureData.filter(
      (project) => project.course === "Beginner"
    );
    setDisplayedProjects(beginnerProjects);
  } else if (value === "Intermediate") {
    const intermediateProjects = pictureData.filter(
      (project) => project.course === "Intermediate"
    );
    setDisplayedProjects(intermediateProjects);
  } else if (value === "Advanced") {
    const advancedProjects = pictureData.filter(
      (project) => project.course === "Advanced"
    );
    setDisplayedProjects(advancedProjects);
  } else {
    filterProjects(selectedSubscriptions);
  }
};

const handleQuantity = (total) => {
  setQuantityDisplayed(total);
};

const handleSubscriptionChange = (subscription) => {
  let updatedSubscriptions = [...selectedSubscriptions];
  if (updatedSubscriptions.includes(subscription)) {
    updatedSubscriptions = updatedSubscriptions.filter(
      (item) => item !== subscription
    );
  } else {
    updatedSubscriptions.push(subscription);
  }
  setSelectedSubscriptions(updatedSubscriptions);
  filterProjects(updatedSubscriptions);
};

const filterProjects = (subscriptions) => {
  let filteredProjects = pictureData;
  if (subscriptions.length > 0) {
    filteredProjects = filteredProjects.filter((project) =>
      subscriptions.includes(project.subscription)
    );
  }
  setDisplayedProjects(filteredProjects);
};

const filteredQuantity = displayedProjects.slice(0, quantityDisplayed);

return (
  <>
    <div className="myCheckbox">
      <h1 style={{ fontSize: "16px" }}>SUBSCRIPTION</h1>
      <hr />
      <div>
        <input
          type="checkbox"
          checked={selectedSubscriptions.includes("Free")}
          onChange={() => handleSubscriptionChange("Free")}
        />
        <label> Free</label>
      </div>
      <div>
        <input
          type="checkbox"
          checked={selectedSubscriptions.includes("Premium")}
          onChange={() => handleSubscriptionChange("Premium")}
        />
        <label> Premium</label>
      </div>
      <br />

      <h1 style={{ fontSize: "16px" }}>ACTIVITY TYPE</h1>
      <hr />
      <div>
        <input type="checkbox" />
        <label> Animation</label>
      </div>
      <div>
        <input type="checkbox" />
        <label> Game</label>
      </div>
      <div>
        <input type="checkbox" />
        <label> Chatbot</label>
      </div>
      <div>
        <input type="checkbox" />
        <label> Augmented Reality</label>
      </div>
      <br />
      <h1 style={{ fontSize: "16px" }}> YEAR LEVEL</h1>
      <hr />
      <div>
        <input type="checkbox" />
        <label> 1 - 4</label>
      </div>
      <div>
        <input type="checkbox" />
        <label> 5 - 6</label>
      </div>
      <div>
        <input type="checkbox" />
        <label> 7 - 8 </label>
      </div>
      <div>
        <input type="checkbox" />
        <label> 9 - 13</label>
      </div>
      <br />
      <h1 style={{ fontSize: "16px" }}> SUBJECT MATTER</h1>
      <hr />
      <div>
        <input type="checkbox" />
        <label> Computer Science</label>
      </div>
      <div>
        <input type="checkbox" />
        <label> Maths</label>
      </div>
      <div>
        <input type="checkbox" />
        <label> Science</label>
      </div>
      <div>
        <input type="checkbox" />
        <label> Language</label>
      </div>
      <div>
        <input type="checkbox" />
        <label> Art</label>
      </div>
      <div>
        <input type="checkbox" />
        <label> Music</label>
      </div>
      <br />
    </div>

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
            backgroundColor: quantityDisplayed === 5 ? "rgb(15, 150, 241)" : "",
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
    
{/* This conditional statement links to studentdashboard, only when Introduction project renders */}

    <div className="image-container">
      {filteredQuantity.map((project) => {
        if (project.name === "Introduction") {
          return (
            <div className="image" key={project.project_id}>
              <Link to="/studentdashboard">
                <img src={project.project_pic} alt="Project" />
                <h2>{project.name}</h2>
                <p>
                  {project.course} | {project.activity_type}
                </p>
              </Link>
            </div>
          );
        } else {
          return (
            <div className="image" key={project.project_id}>
              <img src={project.project_pic} alt="Project" />
              <h2>{project.name}</h2>
              <p>
                {project.course} | {project.activity_type}
              </p>
            </div>
          );
        }
      })}
    </div>
  </>
);
}
