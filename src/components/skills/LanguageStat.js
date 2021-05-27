import { getRepos } from "../../services/repo";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";

function LanguageStat() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getRepos()
      .then((result) => {
        // filter repos per language
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
        // setup data to visualize chart
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
    <div className="d-flex justify-content-center align-items-center flex-column">
      <h6 style={{ color: "black" }}>Repos Per Language</h6>
      <div>
        <Doughnut
          data={data}
          options={{ maintainAspectRatio: false }}
          color="white"
        />
      </div>
    </div>
  );
}

export default LanguageStat;
