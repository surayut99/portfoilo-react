import { useEffect, useState } from "react";
import { getRepos, getReadme } from "../../services/repo.js";
import "../../styles/projects.css";
import Card from "./Card.js";

function Projects() {
  const [selectedRepo, setSelectedRepo] = useState("");
  const [repos, setRepos] = useState([]);
  const clickRepo = (evt) => {
    const index = evt.target.id;
    setSelectedRepo(repos[index]);
  };

  useEffect(() => {
    getRepos().then((res) => {
      let repos = [];
      let promises = [];

      // find readme.md every repo
      res.forEach((repo) => {
        // after call this 'getReadme(...)', will return a promise
        // collect every promise to solve in future
        promises.push(
          getReadme(repo.name).then((result) => {
            if (!result) return;
            repos.push({
              name: repo.name,
              readMe: result,
            });
          })
        );
      });
      // solve all promise before end useEffect
      Promise.all(promises).then(() => {
        repos.sort((a, b) => a.name - b.name);
        setRepos(repos);
        setSelectedRepo(repos[0]);
      });
    });
  }, []);

  return (
    <div id="projects">
      <div className="content-container">
        <h1 id="projects-header">PROJECTS</h1>
        <div id="projects-container">
          <div id="projects-list">
            {repos
              ? repos.map((repo, key) => {
                  return (
                    <a
                      id={key}
                      href="#projects"
                      className="project-name"
                      onClick={clickRepo}
                    >
                      {repo.name}
                    </a>
                  );
                })
              : null}
          </div>
          <Card content={selectedRepo.readMe} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
