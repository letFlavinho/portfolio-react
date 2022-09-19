import "./App.css";
import axios from "axios";
import { Profile } from "./components/perfil";
import { Links } from "./components/links";
import { Techs } from "./components/technologies";
import { Box } from "./components/Box";
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
        <Box
          title="My Projects"
          link="https://github.com/letFlavinho?tab=repositories"
        />
        <div className="major">
          <Project />
          <Project />
        </div>
        <Box
          title="Recent Posts"
          link="https://www.linkedin.com/in/flávio-bulhões-b4ab761b7/recent-activity/shares/"
        />
        <Post />
      </div>
    </div>
  );
};

export default App;
