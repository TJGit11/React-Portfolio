import React from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import projects from "./projectsList";
import { IoLogoGithub } from "react-icons/io";
import { MdRocketLaunch } from "react-icons/md";
import Footer from "../../Footer";

export default function Projects() {
  return (
    <div className="grid-cols-1 shadow-lg gap-5 items-center px-20">
      {projects.map((project) => (
        <div
          className="border shadow-lg rounded-lg gap-2 px-5"
          key={project.id}
        >
          <h3 className="flex justify-center">{project.name}</h3>
          <div className="flex justify-center">
            <img
              src={project.image}
              className="flex justify-center max-h-52 max-w-lg rounded-lg"
            />
          </div>

          <p className="flex flex-wrap justify-center">{project.description}</p>

          <div className="flex justify-around">
            <a href={project.githubLink}>
              <Button className="shadow-lg bg-green-500/50 shadow-yellow-500/70">
                <IoLogoGithub color="black" size="20px"></IoLogoGithub>
              </Button>
              <p className="flex justify-center ">Github</p>
            </a>
            <a href={project.deployedLink}>
              <Button>
                <MdRocketLaunch color="black" size="20px"></MdRocketLaunch>
              </Button>
              <p>Deployed</p>
            </a>
          </div>
        </div>
      ))}
      {/* <Footer /> */}
    </div>
  );
}
