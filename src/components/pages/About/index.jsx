import React from "react";
import { Card } from "flowbite-react";
import profilePic from "../../../images/IMG_0693.jpg";

export default function About() {
  return (
    <div>
      <div className="items-center">
        {/* <h1>About Page</h1> */}
        <Card>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <div className="w-80 mx-auto rounded-lg overflow-hidden">
              <img src={profilePic} alt="Profile picture of Thomas Johnson" />
            </div>
            <p>Noteworthy technology acquisitions 2021</p>
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            <p>
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </p>
        </Card>
      </div>
    </div>
  );
}
