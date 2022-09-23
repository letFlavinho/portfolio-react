import { FiLinkedin } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import style from "../components/Links.css";
export function Links() {
  return (
    <div className="links">
      <dl>
        <dd>
          <FiLinkedin size={22} className="svg" />
          <a
            target="_blank"
            href="https://www.linkedin.com/in/fl%C3%A1vio-bulh%C3%B5es-b4ab761b7"
          >
            Flávio Bulhões
          </a>
        </dd>
        <dd>
          <FiGithub size={22} className="svg" />
          <a target="_blank" href="https://github.com/letFlavinho/">
            LetFlavinho
          </a>
        </dd>
        <dd>
          <FiMail size={22} className="svg" />
          <span>flavio.profissional1@gmail.com</span>
        </dd>
        <dd>
          <FiMapPin size={22} className="svg" />
          <span>Natal/RN, Brasil</span>
        </dd>
      </dl>
    </div>
  );
}
