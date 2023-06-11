import React from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import projects from "./projectsList";
import { IoLogoGithub } from "react-icons/io";
import { MdRocketLaunch } from "react-icons/md";

export default function Projects() {
  return (
    <div className="grid grid-cols-2 gap-5 items-center px-20">
      {projects.map((project) => (
        <div className="border rounded-lg gap-2 px-5" key={project.id}>
          <h3>{project.name}</h3>
          <img src={project.image} className="max-h-52 max-w-lg" />
          <p>{project.description}</p>
          <div className="grid grid-cols-2">
            <a href={project.githubLink}>
              <Button className="shadow">
                <IoLogoGithub color="black" size="20px">
                  Github
                </IoLogoGithub>
              </Button>
            </a>
            <a href={project.deployedLink}>
              <Button>
                <MdRocketLaunch size="20px"></MdRocketLaunch>
              </Button>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

//   projects.map((project, i) => {
//     return (
//       <div className="grid grid-cols-2">
//         <Card>
//           // imgAlt="Meaningful alt text for an image that is not purely
//           decorative" // imgSrc={project.image[0]}
//           <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//             <p>Noteworthy technology acquiszitions 2021</p>
//           </h5>
//           <p className="font-normal text-gray-700 dark:text-gray-400">
//             <p>
//               Here are the biggest enterprise technology acquisitions of 2021 so
//               far, in reverse chronological order.
//             </p>
//           </p>
//         </Card>
//       </div>
//     );
//   });
// }
// <div className="grid grid-cols-2">
//   <Card
//     imgAlt="Meaningful alt text for an image that is not purely decorative"
//     imgSrc={projects.image[0]}
//   >
//     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//       <p>Noteworthy technology acquisitions 2021</p>
//     </h5>
//     <p className="font-normal text-gray-700 dark:text-gray-400">
//       <p>
//         Here are the biggest enterprise technology acquisitions of 2021 so far,
//         in reverse chronological order.
//       </p>
//     </p>
//   </Card>
//   <Card
//     imgAlt="Meaningful alt text for an image that is not purely decorative"
//     imgSrc="../IMG_E0070.JPG"
//   >
//     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//       <p>Noteworthy technology acquisitions 2021</p>
//     </h5>
//     <p className="font-normal text-gray-700 dark:text-gray-400">
//       <p>
//         Here are the biggest enterprise technology acquisitions of 2021 so far,
//         in reverse chronological order.
//       </p>
//     </p>
//   </Card>
//   <Card
//     imgAlt="Meaningful alt text for an image that is not purely decorative"
//     imgSrc="../IMG_E0070.JPG"
//   >
//     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//       <p>Noteworthy technology acquisitions 2021</p>
//     </h5>
//     <p className="font-normal text-gray-700 dark:text-gray-400">
//       <p>
//         Here are the biggest enterprise technology acquisitions of 2021 so far,
//         in reverse chronological order.
//       </p>
//     </p>
//   </Card>
//   <Card
//     imgAlt="Meaningful alt text for an image that is not purely decorative"
//     imgSrc="../IMG_E0070.JPG"
//   >
//     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//       <p>Noteworthy technology acquisitions 2021</p>
//     </h5>
//     <p className="font-normal text-gray-700 dark:text-gray-400">
//       <p>
//         Here are the biggest enterprise technology acquisitions of 2021 so far,
//         in reverse chronological order.
//       </p>
//     </p>
//   </Card>
//   <Card
//     imgAlt="Meaningful alt text for an image that is not purely decorative"
//     imgSrc="../IMG_E0070.JPG"
//   >
//     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//       <p>Noteworthy technology acquisitions 2021</p>
//     </h5>
//     <p className="font-normal text-gray-700 dark:text-gray-400">
//       <p>
//         Here are the biggest enterprise technology acquisitions of 2021 so far,
//         in reverse chronological order.
//       </p>
//     </p>
//   </Card>
// </div>;
