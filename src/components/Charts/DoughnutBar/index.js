import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import classes from "./index.module.scss"

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutBar = ({ cves }) => {
    const cvesRawData = cves.reduce((acc, cve) => {
        acc[cve.vulnerabilityStatus] = (acc[cve.vulnerabilityStatus] || 0) + 1;
        return acc;
    }, {});
    const cvesLabels = Object.keys(cvesRawData).map(key => {
        return key
    })
    const cvesData = Object.values(cvesRawData).map(value => {
        return value
    })

    const data = {
        labels: cvesLabels,
        datasets: [
            {
                label: "CVEs",
                data: cvesData,
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)",
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
            }
        ]
    }

    const options = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: true,
                text: "CVEs Update Type",
            },
        },
    };

    return (
        <React.Fragment>
            <div className={classes.Canvas}>
                <Doughnut options={options} data={data}/>
            </div>
        </React.Fragment>
    )
}
export default DoughnutBar;