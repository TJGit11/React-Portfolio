import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { MdMail } from "react-icons/md";
export default function Contact() {
  return (
    <div className="flex flex-wrap items-center justify-center p-20">
      <div className="border border-black p-20 m-5">
        <span className="flex justify-center">LinkedIn</span>
        <a
          href="https://www.linkedin.com/in/thomas-johnson-678383276/"
          alt="A link to Thomas Johnson's LinkedIn page"
          target="_blank"
        >
          <BsLinkedin size="4em"></BsLinkedin>
        </a>
      </div>
      <div className="border border-black p-20 m-5">
        <span className="flex justify-center">Github</span>
        <a
          href="https://www.github.com/TJGit11"
          alt="A link to Thomas Johnson's github page"
          target="_blank"
        >
          <BsGithub size="4em"></BsGithub>
        </a>
      </div>
      <div className="border border-black p-20 m-5">
        <span className="flex justify-center">Email</span>
        <a
          href="mailto: thomasjjohnson9311@gmail.com"
          alt="A link to send Thomas Johnson an email"
          target="_blank"
        >
          <MdMail size="4em"></MdMail>
        </a>
      </div>
    </div>
  );
}
