import React from "react";
import { Navbar } from "flowbite-react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        {/* <img
          alt="Flowbite React Logo"
          className="mr-3 h-6 sm:h-9"
          src="/favicon.svg"
        /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black">
          Thomas Johnson
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link active href="#">
          <p>Home</p>
        </Navbar.Link>
        <Navbar.Link
          href="#about"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          <p>About</p>
        </Navbar.Link>
        <Navbar.Link href="#projects">Projects</Navbar.Link>
        <Navbar.Link href="#resume">Resume</Navbar.Link>
        <Navbar.Link href="#contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>

    // <ul className="nav nav-tabs bg-[#ecfdf5]">
    //   {/* <li className="nav-item">
    //     <a
    //       href="#home"
    //       onClick={() => handlePageChange("Home")}
    //       className={currentPage === "Home" ? "nav-link active" : "nav-link"}
    //     >
    //       Home
    //     </a>
    //   </li> */}
    //   <li className="nav-item">
    //     <a
    //       href="#about"
    //       onClick={() => handlePageChange("About")}
    //       className={currentPage === "About" ? "nav-link active" : "nav-link"}
    //     >
    //       About
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#projects"
    //       onClick={() => handlePageChange("Projects")}
    //       className={
    //         currentPage === "Projects" ? "nav-link active" : "nav-link"
    //       }
    //     >
    //       Projects
    //     </a>
    //   </li>
    //   {/* <li className="nav-item">
    //     <a
    //       href="#about"
    //       onClick={() => handlePageChange("About")}
    //       className={currentPage === "About" ? "nav-link active" : "nav-link"}
    //     >
    //       About
    //     </a>
    //   </li> */}
    //   <li className="nav-item">
    //     <a
    //       href="#blog"
    //       onClick={() => handlePageChange("Blog")}
    //       className={currentPage === "Blog" ? "nav-link active" : "nav-link"}
    //     >
    //       Resume
    //     </a>
    //   </li>
    //   <li className="nav-item">
    //     <a
    //       href="#contact"
    //       onClick={() => handlePageChange("Contact")}
    //       className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
    //     >
    //       Contact
    //     </a>
    //   </li>
    // </ul>
  );
}

export default NavTabs;
