import React from "react";
import { Card } from "flowbite-react";
import profilePic from "../../../images/IMG_0693.jpg";

export default function About() {
  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        {/* <h1>About Page</h1> */}
        <Card>
          <div className="flex items-center justify-between">
            {/* <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> */}
            <div class="flex flex-col px-20">
              <h3>Hello, I'm Thomas Johnson</h3>
              <p>Full-Stack Web Developer</p>
            </div>
            <img
              src={profilePic}
              alt="Profile picture of Thomas Johnson"
              className="w-80 shadow-lg mx-auto content-end rounded-lg overflow-hidden"
            />
          </div>
          {/* </h5> */}
          <p className="font-normal text-gray-700 dark:text-gray-400"></p>
        </Card>
      </div>
    </div>
  );
}
