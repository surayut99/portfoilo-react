const Axios = require("axios");

const user = "surayut99";
const getRepos = async () => {
  const res = await Axios.get(`https://api.github.com/users/${user}/repos`);
  return res.data;
};

exports.getRepos = getRepos;
// console.log(getRepos());
