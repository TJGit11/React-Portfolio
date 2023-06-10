import { DiGithubBadge } from "react-icons/di";
import { ImLinkedin } from "react-icons/im";
import { MdEmail } from "react-icons/md";
export default function Footer() {
  return (
    <div className="columns-3 ">
      <footer className="">
        <div>
          <DiGithubBadge></DiGithubBadge>
        </div>
        <div>
          <ImLinkedin></ImLinkedin>
        </div>
        <div>
          <MdEmail></MdEmail>
        </div>
      </footer>
    </div>
  );
}
