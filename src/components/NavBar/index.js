import React, { useState } from "react";
import { useTheme } from 'styled-components';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { ButtonContainer, GitHubButton, MobileIcon, MobileLink, MobileMenu, Nav, NavbarContainer, NavItems, NavLink, NavLogo, Span } from './NavbarStyledComponent'
import { Bio } from '../../data/constants';
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const location = useLocation(); // Get current URL path

  // Function to handle navigation and scrolling
  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      // Navigate to home first
      window.location.href = `/#${sectionId}`;
    } else {
      // Scroll to section directly
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <Link to="/" style={{ display: "flex", alignItems: "center", color: "white", cursor: "pointer" }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </Link>
        </NavLogo>

        <MobileIcon>
          <FaBars onClick={() => setOpen(!open)} />
        </MobileIcon>

        <NavItems>
          <NavLink as="button" onClick={() => handleNavClick("about")}>About</NavLink>
          <NavLink as="button" onClick={() => handleNavClick("skills")}>Skills</NavLink>
          <NavLink as="button" onClick={() => handleNavClick("experience")}>Experience</NavLink>
          <NavLink as="button" onClick={() => handleNavClick("projects")}>Projects</NavLink>
          <NavLink as="button" onClick={() => handleNavClick("education")}>Education</NavLink>
        </NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
          <GitHubButton as={Link} to="/practice" style={{ marginLeft: "10px" }}>Practice</GitHubButton>
        </ButtonContainer>
      </NavbarContainer>

      {open && (
        <MobileMenu open={open}>
          <MobileLink as="button" onClick={() => handleNavClick("about")}>About</MobileLink>
          <MobileLink as="button" onClick={() => handleNavClick("skills")}>Skills</MobileLink>
          <MobileLink as="button" onClick={() => handleNavClick("experience")}>Experience</MobileLink>
          <MobileLink as="button" onClick={() => handleNavClick("projects")}>Projects</MobileLink>
          <MobileLink as="button" onClick={() => handleNavClick("education")}>Education</MobileLink>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default NavBar;