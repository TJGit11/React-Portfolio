import { DiGithubBadge } from "react-icons/di";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <h1>
      {" "}
      <DiGithubBadge></DiGithubBadge> <ImLinkedin></ImLinkedin>{" "}
      <MdEmail></MdEmail>
    </h1>
  );
}
