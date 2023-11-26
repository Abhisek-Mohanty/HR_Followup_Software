import { Bar, Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";
import { Chart as Chartjs } from "chart.js/auto";

const Typecom = () => {
  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Location",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((response) => {
        const fetchedData = response.data;
        const x = fetchedData.map((item) => {
          return item.type;
        });
        let locationLabels = [];
        let locationCounts = {};

        for (let i = 0; i < x.length; i++) {
          if (!locationCounts[x[i]]) {
            locationCounts[x[i]] = 1;
          } else {
            locationCounts[x[i]]++;
          }
          let isDuplicate = false;
          for (let j = 0; j < i; j++) {
            if (x[i] === x[j]) {
              isDuplicate = true;
              break;
            }
          }
          if (!isDuplicate) {
            locationLabels.push(x[i]);
          }
        }

        setData({
          ...data,
          labels: locationLabels,
          datasets: [
            {
              ...data.datasets[0],
              data: Object.values(locationCounts),
            },
          ],
        });

        console.log("Fetching data");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default Typecom;
