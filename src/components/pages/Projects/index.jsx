import React from "react";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";
import { SeeSourceCodeForSVG } from "flowbite-react";
import projects from "./projectsList";

export default function Projects() {
  console.log(projects.imageUrl);
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <img src={project.image} />
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
