import { FaPython } from "react-icons/fa";
import "../styles/skills.css";
import ProgrammingIcon from "./ProgrammingIcon.js";

function Skills() {
  return (
    <div id="skills">
      <div className="content-container">
        <h1 id="skills-header">MY SKILLS</h1>
        <div id="skills-container">
          <div id="programming-skill">
            <h3 className="text-center">CODING SKILLS</h3>
            <div className="icon-langs">
              <ProgrammingIcon lang="Python" />
              <ProgrammingIcon lang="C" />
              <ProgrammingIcon lang="C++" />
              <ProgrammingIcon lang="Java" />
              <ProgrammingIcon lang="JavaScript" />
              <ProgrammingIcon lang="HTML" />
              <ProgrammingIcon lang="VueJS" />
              <ProgrammingIcon lang="Bootstrap" />
              <ProgrammingIcon lang="Laravel" />
              <ProgrammingIcon lang="React" />
            </div>
          </div>
          <div id="soft-skill">
            <h3 className="text-center">SOFT SKILLS</h3>
            <div className="icon-container-col-1">
              <h3>Fast Learner</h3>
              <h3>Fast Learner</h3>
              <h3>Fast Learner</h3>
              <h3>Fast Learner</h3>
              <h3>Fast Learner</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
