import Axios from "axios";
const { GIT_USERNAME } = require("../config");

/**
 * request for getting all repo from github.com of 'surayut99' user
 */
const getRepos = async () => {
  const res = await Axios.get(
    `https://api.github.com/users/${GIT_USERNAME}/repos`
  );

  return res.data;
};

/**
 * request for README.md by given repo-name
 * @param repoName repo-name to find README.md on github.com
 */
const getReadme = async (repoName) => {
  let isError = false;
  const res = await Axios.get(
    `https://raw.githubusercontent.com/${GIT_USERNAME}/${repoName}/master/README.md`
  ).catch(() => {
    isError = !isError;
  });

  if (isError) return;
  return res.data;
};

export { getRepos, getReadme };
