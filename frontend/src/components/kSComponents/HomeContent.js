// Imports:
import HomeHero from "../../images/src-assets/Home/hero.png";
import "./homeContent.css";
import Group1 from "../../images/src-assets/Home/Group 1.png";
import Group3 from "../../images/src-assets/Home/Group 3.png";
import Group4 from "../../images/src-assets/Home/Group 4.png";
import Group2 from "../../images/src-assets/Home/Group 2.png";
import HomeHelp from "./homeHelpDiv/HomeHelp.js";
import Classroom from "../../images/src-assets/Home/classroom.png";
import HomeLaptop from "./homeLaptop/HomeLaptop.js";
import { Login } from "./logIn/Login";
import { useState } from "react";

// Content for home page:
export const HomeContent = () => {
  const [openLogin, setOpenLogin] = useState(false); // Default state variable for login modal as not open

  const handleOpenLogin = () => {
    setOpenLogin(true); // update state variable to true to open the modal when handled
  };

  return (
    <div className="home">
      {/* // Banner Section: */}
      <div
        className="home-banner"
        style={{
          backgroundImage: `url(${HomeHero})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 id="home_banner_h1">
          Prepare young minds for a better <span id="home_future">future.</span>
        </h1>
        <h6 id="home_banner_h6">
          Let us help you advance students in Digital Technologies and other
          learning areas with our project-based learning programme.
        </h6>
        <div className="home-banner-btns">
          <button id="home_learn_btn">LEARN MORE</button>
          {/* // Signup button with Login modal to open upon click: */}
          <button id="home_sign_btn" onClick={handleOpenLogin}>
            SIGN UP
          </button>
          <Login open={openLogin} handleClose={() => setOpenLogin(!false)} />
        </div>
        <p id="home_banner_p">
          *Basic subscription includes the first 15 projects free of charge.
        </p>
      </div>
      {/* // Laptop Section: */}
      <div className="home-body">
        <HomeLaptop />

        {/* // Teaching Section: */}
        <div className="home-teaching-container">
          <h2 id="home_teaching_h2">
            Teaching kids programming and digital skills is MORE than just
            writing code.
          </h2>
          <div className="home-teaching-imgs-container">
            <img className="home-teaching-imgs" src={Group1} alt="Group1Img" />
            <img className="home-teaching-imgs" src={Group2} alt="Group2Img" />
            <img className="home-teaching-imgs" src={Group3} alt="Group3Img" />
            <img className="home-teaching-imgs" src={Group4} alt="Group4Img" />
          </div>
        </div>
        {/* // HomeHelp Section: */}
        <HomeHelp />

        {/* // What are you waiting for? Section: */}
        <div className="home-waiting">
          <img src={Classroom} alt="Classroom" id="home_waiting_img" />
          <div className="home-waiting-text">
            <h1 id="home_waiting_h1">What are you waiting for?</h1>
            <h3 id="home_waiting_h3">
              Start teaching Digital Technologies today.
            </h3>
            <p id="home_waiting_p">
              If you need more information, we are happy to answer any questions
              you may have.
            </p>
            <div className="home-waiting-btns">
              <button id="home_enquire_btn">ENQUIRE NOW</button>
              {/* // Signup button with Login modal to open upon click: */}
              <button
                id="home_sign_btn2"
                onClick={() => handleOpenLogin("signup")}
              >
                SIGN UP
              </button>
              <Login open={openLogin} handleClose={() => setOpenLogin(false)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
