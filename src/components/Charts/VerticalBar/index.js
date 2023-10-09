import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import classes from "./index.module.scss"

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const VerticalBar = ({ cves }) => {
    const cvesRawData = cves.reduce((acc, cve) => {
        const formattedLastModifiedDate = cve.lastModifiedDate.split("T")[0]
        acc[formattedLastModifiedDate] = (acc[formattedLastModifiedDate] || 0) + 1;
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
                backgroundColor: "rgba(255, 99, 132, 0.5)",
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
                text: "CVEs per Day",
            },
        },
    };

    return (
        <div className={classes.Canvas}>
            <Bar options={options} data={data}/>
        </div>
    )
}
export default VerticalBar;