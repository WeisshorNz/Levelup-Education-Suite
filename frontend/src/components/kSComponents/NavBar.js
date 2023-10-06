// Imports:
import {
  Nav,
  NavBtn,
  NavBtnLink,
  NavLink,
  Bars,
  NavLogin,
} from "./NavBarElements"; //Using for styled components
import "./navBar.css";
import Logo from "../../images/src-assets/NavBar/LevelUpWorks-white.png";
import Avatar from "../../images/src-assets/NavBar/Avatar-white.png";
import NZFlag from "../../images/src-assets/NavBar/NZFlag.png";
import MāoriFlag from "../../images/src-assets/NavBar/MaoriFlag.png";
import { Login } from "./logIn/Login"; //Login Modal component
import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown"; //Using for dropdown menu for under 768px
import DropdownItem from "react-bootstrap/esm/DropdownItem"; //Using for dropdown menu for under 768px

const NavBar = ({ studentName }) => {
  const [openLogin, setOpenLogin] = useState(false); //set default state of login modal as not open
  const [dropdownOpen, setDropdownOpen] = useState(false); // set default state as not open
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [userID, setUserID] = useState("");


  const handleOpenLogin = () => {
    setOpenLogin(true); // handles the change of the login modal state to open
  };

  const handleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // handles the change of the state variable to open
  };

  useEffect(() => {
    //check if the user is logged in already
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      //update the state with the user info
      setUserID(user.id); // unable to acces this fetched data
      setUserName(user.name);
      setUserAvatar(user.avatar);
      setIsLoggedIn(true);

console.log("user id is: " + userID);
console.log("user.id is:" + user.id);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserID("");
    setUserName("");
    setUserAvatar("");
  };
console.log("user id is: " + userID);
  return (
    <div>
      <Nav>
        <img src={Logo} alt="LevelUpLogo" className="logo-main" />
        {/* // Bars icon for dropdown menu - onclick handles dropdown menu */}
        <Bars onClick={handleDropdown} />
        <div className={`nav-menu ${dropdownOpen ? "active" : ""}`}>
          <NavLink to="/" activestyle="true">
            HOME
          </NavLink>
          <NavLink to="/Features" activestyle="true">
            FEATURES
          </NavLink>
          <NavLink to="/Teachers" activestyle="true">
            TEACHERS
          </NavLink>
        </div>
        {/* // Language section incl link and flag imgs*/}
        <div className="nav-right">
          <div className="nav-lang">
            LANG
            <img src={NZFlag} alt="NZFlag" />
            <img src={MāoriFlag} alt="MāoriFlag" />
          </div>
          <NavLogin>
            {/* // Avatar and Login/Register section:*/}
            {isLoggedIn ? (
              <div id="login_custom_user">
                <img
                  src={userAvatar}
                  alt="LoginAvatar"
                  className="nav-user-avatar"
                />
                <Link to={`/student-profile-viewer/5`}>
                  <span id="login-username">{userName}</span>
                </Link>
                <NavBtnLink onClick={handleLogout}>| LOGOUT |</NavBtnLink>
              </div>
            ) : (
              <div id="login_avatar_user">
                <NavBtn>
                  <img src={Avatar} alt="LoginAvatar" className="nav-avatar" />
                  <NavBtnLink onClick={handleOpenLogin}>
                    REGISTER | LOGIN
                  </NavBtnLink>
                </NavBtn>
              </div>
            )}

            <Login open={openLogin} handleClose={() => setOpenLogin(false)} />
          </NavLogin>
        </div>
      </Nav>
      {/* // Dropdown Menu section:*/}
      <Dropdown>
        <div className={`dropdown-container ${dropdownOpen ? "active" : ""}`}>
          <DropdownItem>
            <NavLink to="/" activestyle="true">
              HOME
            </NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink to="/Features" activestyle="true">
              FEATURES
            </NavLink>
          </DropdownItem>
          <DropdownItem>
            <NavLink to="/Teachers" activestyle="true">
              TEACHERS
            </NavLink>
          </DropdownItem>

          <DropdownItem>
            {/* // Register/login button that opens modal onclick*/}
            <NavBtnLink onClick={handleOpenLogin}>REGISTER | LOGIN</NavBtnLink>
          </DropdownItem>
          <Login open={openLogin} handleClose={() => setOpenLogin(false)} />

          <DropdownItem>
            <div className="nav-lang">
              LANG
              <img src={NZFlag} alt="NZFlag" />
              <img src={MāoriFlag} alt="MāoriFlag" />
            </div>
          </DropdownItem>
        </div>
      </Dropdown>
    </div>
  );
};

export default NavBar;
