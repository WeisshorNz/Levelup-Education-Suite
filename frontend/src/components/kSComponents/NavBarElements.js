import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

//nav bar:
export const Nav = styled.nav`
  background: #52bff3;
  color: #fff;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  padding: 1rem 0 0.25rem 0;
  margin: 0;
  border: #41baef solid 1px;
  font-family: "Open Sans", sans-serif, bold;

  @media screen and (max-width: 768px) {
  }
`;

// Home-features/teachers links:
export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  padding: 2rem 3rem 0.625rem 3rem;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    text-decoration: underline;
    font-size: 1rem;
    padding: 0.5rem;
  }
`;

// Hamburger:
export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 2.5rem;
    cursor: pointer;
  }
`;

// Avatar/login and register:
export const NavLogin = styled.nav`
  display: flex;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  background: #52bff3;
  color: #fff;
  font-size: 1rem;
  border: none;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  padding-bottom: 0.625rem;
  margin: 0;
  @media screen and (max-width: 768px) {
    text-decoration: underline;
    font-size: 1rem;
    top: 0.5rem;
  }
`;
