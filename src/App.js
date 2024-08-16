import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skill from "./Components/Skills/skill";
import Education from "./Components/Education/edu";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Education />
      <Skill />
    </div>
  );
}

export default App;
