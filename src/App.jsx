import "./App.css";
import { Profile } from "./components/Profile";
import { Links } from "./components/Links";
import { Techs } from "./components/Techs";
import { Box } from "./components/Box";
import { Project } from "./components/Project";
import { Post } from "./components/Post";

function App() {
  return (
    <div className="App">
      <div className="coluna">
        <Profile className="component" />
        <Links className="component" />
        <Techs className="component" />
      </div>
      <div className="my-projects">
        <Box
          className="component"
          title="My Projects"
          link="https://github.com/letFlavinho?tab=repositories"
        />

        <Project className="component" />

        <Box
          className="component"
          title="Recent Posts"
          link="https://www.linkedin.com/in/flávio-bulhões-b4ab761b7/recent-activity/shares/"
        />
        <Post className="component" />
      </div>
    </div>
  );
}

export default App;
