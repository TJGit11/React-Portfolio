import React from "react";
import { Navbar } from "flowbite-react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {/* <Navbar.Link
          href="#home"
          onClick={() => handlePageChange("Home")}
          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </Navbar.Link> */}
        <Navbar.Link
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Me
        </Navbar.Link>
        <Navbar.Link
          href="#projects"
          onClick={() => handlePageChange("Projects")}
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Projects
        </Navbar.Link>
        {/* <Navbar.Link
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </Navbar.Link> */}
        <Navbar.Link
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Resume & Contact
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavTabs;
