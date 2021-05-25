import Nav from "./components/Nav";
import About from "./components/about/About.js";
import Skills from "./components/skills/Skills.js";
import Projects from "./components/projects/Projects.js";
import "./styles/app.css";

function App() {
  return (
    <div>
      <Nav />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
