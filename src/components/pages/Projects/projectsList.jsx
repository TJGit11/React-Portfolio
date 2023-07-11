import React from "react";
import ssEmployee from "../../../images/ssEmployee.png";
import ssJATE from "../../../images/ssJATE.png";
import ssNoteTaker from "../../../images/ssNoteTaker.png";
import ssRMGenerator from "../../../images/ssRMGenerator.png";
import ssFadeBrigade from "../../../images/fadebrigade.png";
import ssPasswordGenerator from "../../../images/ssPasswordGenerator.png";

// const projectsComponent = () => {
const projects = [
  {
    id: 1,
    name: "Fade Brigade",
    image: ssFadeBrigade,
    description:
      "Application allows customers to schedule appointments with barbers",
    deployedLink: "",
    githubLink: "https://github.com/TJGit11/wumbo-employee-tracker",
  },

  {
    id: 2,
    name: "Password Generator",
    image: ssPasswordGenerator,
    description:
      "Application takes input from user to generate a random password",
    deployedLink: "",
    githubLink: "https://github.com/TJGit11/wumbo-employee-tracker",
  },

  {
    id: 3,
    name: "Employee Tracker",
    image: ssEmployee,
    description:
      "CLI application to make modifications to an employee database",
    deployedLink: "",
    githubLink: "https://github.com/TJGit11/wumbo-employee-tracker",
  },
  {
    id: 4,
    name: "README Generator",
    image: ssRMGenerator,
    description:
      "CLI application which takes input from the user to create a README file",
    deployedLink: "",
    githubLink: "https://github.com/TJGit11/wumbo-employee-tracker",
  },
  {
    id: 5,
    name: "NoteTaker App",
    image: ssNoteTaker,
    description:
      "Application that allows the user to create, read, update, and delete notes",
    deployedLink: "",
    githubLink: "https://github.com/TJGit11/wumbo-employee-tracker",
  },
  {
    id: 6,
    name: "Just Another Text Editor",
    image: ssJATE,
    description: "A downloadable PWA text editor",
    deployedLink: "https://shrouded-escarpment-51121.herokuapp.com/",
    githubLink: "https://github.com/TJGit11/PWA-text-editor",
  },
];
// };

export default projects;
