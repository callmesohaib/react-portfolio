import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Skill from "./Components/Skills/skill";
import Education from "./Components/Education/edu";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import Project from "./Components/Project/projects";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Education />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
