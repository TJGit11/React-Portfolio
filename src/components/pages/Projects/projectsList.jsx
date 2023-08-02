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
    technologies:
      "React, JavaScript, Tailwind, DaisyUI, GraphQL, MongoDB, Express, Node, Heroku",
    deployedLink: "https://fade-brigade.herokuapp.com/",
    githubLink: "https://github.com/TJGit11/Fade-Brigade",
  },

  {
    id: 2,
    name: "Password Generator",
    image: ssPasswordGenerator,
    description:
      "Application takes input from user to generate a random password",
    technologies: "HTML, CSS, JavaScript",
    deployedLink: "https://tjgit11.github.io/password-generator/",
    githubLink: "https://github.com/TJGit11/password-generator",
  },

  {
    id: 3,
    name: "Employee Tracker",
    image: ssEmployee,
    description:
      "CLI application to make modifications to an employee database",
    technologies: "JavaScript, mySQL, Sequelize",
    deployedLink:
      "https://drive.google.com/file/d/1KZw9hucJmRN3WLR6r0gkxCITTOE65fig/view",
    githubLink: "https://github.com/TJGit11/cli-employee-tracker",
  },
  {
    id: 4,
    name: "README Generator",
    image: ssRMGenerator,
    description:
      "CLI application which takes input from the user to create a README file",
    technologies: "JavaScript",
    deployedLink: "",
    githubLink: "https://github.com/TJGit11/potential-readme-generator",
  },
  {
    id: 5,
    name: "NoteTaker App",
    image: ssNoteTaker,
    description:
      "Application that allows the user to create, read, update, and delete notes",
    technologies: "HTML, CSS, JavaScript, Express",
    deployedLink: "",
    githubLink: "https://boiling-thicket-44253-e1207d94879f.herokuapp.com/",
  },
  {
    id: 6,
    name: "Just Another Text Editor",
    image: ssJATE,
    description: "A downloadable PWA text editor",
    technologies: "HTML, CSS, JavaScript, Heroku ",
    deployedLink: "https://shrouded-escarpment-51121.herokuapp.com/",
    githubLink: "https://github.com/TJGit11/PWA-text-editor",
  },
];
// };

export default projects;
