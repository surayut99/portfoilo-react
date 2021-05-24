import { getRepos } from "../services/fetchRepo";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

function LanguageStat() {
  const user = "surayut99";
  const [langStat, setLangStat] = useState(null);
  const [data, setData] = useState(null);
  const size = 400;

  useEffect(() => {
    getRepos()
      .then((result) => {
        let langStats = result
          .filter((repo) => {
            return repo.language;
          })
          .map((repo) => {
            return repo.language;
          })
          .reduce((langStat, lang) => {
            langStat[lang] = (langStat[lang] || 0) + 1;
            return langStat;
          }, {});

        return langStats;
      })
      .then((result) => {
        console.log(Object.keys(result), Object.values(result));
        let data = {
          labels: Object.keys(result),
          datasets: [
            {
              label: "My First Dataset",
              data: Object.values(result),
              backgroundColor: [
                "rgb(255, 80, 80)",
                "rgb(125, 215, 92)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
                "rgb(35, 35, 76)",
              ],
              hoverOffset: 4,
            },
          ],
        };

        setData(data);
      });
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center flex-column w-100">
      <div className="w-100">
        <Doughnut
          data={data}
          options={{ maintainAspectRatio: false }}
          width={size}
          height={size}
          color="white"
        />
      </div>
      <br />
      <h6 style={{ color: "black" }}>Repo Per Language</h6>
    </div>
  );
}

export default LanguageStat;
