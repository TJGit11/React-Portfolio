import React from "react";

export default function Resume() {
  const resumeUrl =
    "https://docs.google.com/document/d/1Rt9jybR8QDlO13gPpARZHHjeICpMOe892L_k8xWpXz8/edit?usp=sharing";
  return (
    <div className="flex items-center justify-center p-20 border border-black">
      <h1>Check out my resume:</h1>
      <div className="flex justify-center">
        <a href={resumeUrl}>
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <svg
              class="fill-current w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download</span>
          </button>
        </a>
        {/* <a href={resumeUrl}>
        Click here for my resume
      </a> */}
      </div>
    </div>
  );
}
