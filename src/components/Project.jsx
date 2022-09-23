import { FiFolder } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { FiGitBranch } from "react-icons/fi";
import style from "../components/Project.css";
export function Project() {
  return (
    <div className="Project">
      <div className="title">
        <FiFolder size={20} className="svg" />
        <h4>project batata</h4>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="interactions">
        <FiStar size={18} className="svg" />
        <span>100</span>
      </div>
      <div className="interactions">
        <FiGitBranch size={18} className="svg" />
        <span>100</span>
      </div>
    </div>
  );
}
