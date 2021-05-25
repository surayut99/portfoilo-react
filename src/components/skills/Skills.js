import "../../styles/skills.css";
import LanguageStat from "./LanguageStat.js";
import ProgrammingIcon from "./ProgrammingIcon.js";

function Skills() {
  const codingLang = [
    "Python",
    "C",
    "C++",
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "PHP",
  ];
  const frameworks = ["VueJS", "React", "Bootstrap", "Laravel"];
  const databases = ["MySQL", "MongoDB"];

  return (
    <div id="skills">
      <div className="content-container">
        <h1 id="skills-header">SKILLS</h1>
        <div id="skills-container">
          <div id="programming-skill">
            <div className="icon-langs">
              {codingLang.map((item) => (
                <ProgrammingIcon lang={item} />
              ))}
            </div>
            <hr />
            <div className="icon-langs">
              {frameworks.map((item) => (
                <ProgrammingIcon lang={item} />
              ))}
            </div>
            <hr />
            <div className="icon-langs">
              {databases.map((item) => (
                <ProgrammingIcon lang={item} />
              ))}
            </div>
          </div>
          <div id="graph-container">
            <LanguageStat />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
