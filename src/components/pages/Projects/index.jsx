import React from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import projects from "./projectsList";
import { IoLogoGithub } from "react-icons/io";
import { MdRocketLaunch } from "react-icons/md";
import Footer from "../../Footer";

export default function Projects() {
  return (
    <div className="grid-cols-1 shadow-lg gap-5 items-center px-20 bg-gray-200">
      {projects.map((project) => (
        <div
          className="border shadow-lg rounded-lg gap-2 px-5"
          key={project.id}
        >
          <h3 className="flex justify-center">{project.name}</h3>
          <div className="flex justify-center">
            <img
              src={project.image}
              className="flex justify-center lg:max-w-lg md:max-w-md rounded-lg "
            />
          </div>

          <p className="flex flex-wrap justify-center">{project.description}</p>
          <p className="flex flex-wrap justify-center">
            Technologies: {project.technologies}
          </p>

          <div className="flex justify-around">
            <a
              href={project.githubLink}
              alt="This is a link to this project's github repository"
            >
              <Button className="shadow-lg bg-navy-500/50 shadow-yellow-500/70">
                <IoLogoGithub color="black" size="20px"></IoLogoGithub>
              </Button>
              <p className="flex justify-center ">Github</p>
            </a>
            <a
              href={project.deployedLink}
              alt="This is a link to the demo of this project"
            >
              <Button className="shadow-lg bg-navy-500/50 shadow-yellow-500/70">
                <MdRocketLaunch color="black" size="20px"></MdRocketLaunch>
              </Button>
              <p className="flex justify-center items-center">Demo</p>
            </a>
          </div>
        </div>
      ))}
      {/* <Footer /> */}
    </div>
  );
}
