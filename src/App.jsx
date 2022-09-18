import "./App.css";
import axios from "axios";
import { Profile } from "./components/perfil";
import { Links } from "./components/links";
import { Techs } from "./components/technologies";
import { Projects } from "./components/my-projects";
import { Project } from "./components/project";
import { Post } from "./components/post";

const App = () => {
  return (
    <div>
      <div className="coluna">
        <Profile />
        <Links />
        <Techs />
      </div>
      <div className="my-projects">
        <Projects />
        <div className="major">
          <Project />
          <Project />
        </div>
        <div className="boxProjects">
          <h2>Recent Posts</h2>
        </div>
        <Post />
      </div>
    </div>
  );
};

export default App;
