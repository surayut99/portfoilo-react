const Axios = require("axios");
const { GIT_USERNAME } = require("../config");

const getRepos = async () => {
  const res = await Axios.get(
    `https://api.github.com/users/${GIT_USERNAME}/repos`
  );

  return res.data;
};

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

module.exports = { getRepos, getReadme };
