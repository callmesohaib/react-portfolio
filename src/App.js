import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skill from "./Components/Skills/skill";
import Education from "./Components/Education/edu";
import Project from "./Components/Projects/projects";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Education />
      <Skill />
      <Project />
    </div>
  );
}

export default App;
