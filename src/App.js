import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skill from "./Components/Skills/skill";
import Education from "./Components/Education/edu";
import Project from "./Components/Projects/projects";
import Contact from "./Components/Contact/contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Education />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
