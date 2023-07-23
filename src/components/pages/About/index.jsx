import React from "react";
import { Card } from "flowbite-react";
import profilePic from "../../../images/profilePic.jpg";

export default function About() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        {/* <h1>About Page</h1> */}
        {/* <Card> */}
        <div className="flex items-center justify-between border rounded-lg">
          {/* <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> */}
          <img
            src={profilePic}
            alt="Profile picture of Thomas Johnson"
            className="w-80 shadow-lg mx-auto content-end rounded-lg overflow-hidden"
          />
          <div class="flex flex-col px-20">
            <h3>Hello, I'm Thomas Johnson</h3>
            <p>Full-Stack Web Developer</p>
            <p>
              I'm having a lot of fun learning, growing through, and surpassing
              the constant challenges in web development.
              <br /> When I'm not at the computer I like to cook & bake, travel,
              skateboard, and check out live music.
              <br /> I hope to one day be able to work on projects that add
              value in these areas and more!
              <br />
            </p>
          </div>
        </div>
        {/* </h5> */}
        <p className="font-normal text-gray-700 dark:text-gray-400"></p>
        {/* </Card> */}
      </div>
    </div>
  );
}
