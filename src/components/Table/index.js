import React from 'react';
import classes from "./index.module.scss";

const Table = ({ cveTableHeaders, cveTableData }) => {
    return (
        <table className={classes.Container}>
            <thead>
            <tr>
                {cveTableHeaders.map((header) => (
                    <th key={header}>{header}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {cveTableData.map((cveItem) => (
                <tr key={cveItem.cve.id}>
                    <td>{cveItem.cve.id}</td>
                    <td>{cveItem.cve["descriptions"][0]["value"]}</td>
                    <td>{cveItem.cve.vulnStatus}</td>
                    <td>{cveItem.cve.published}</td>
                    <td>{cveItem.cve.lastModified}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
};

export default Table;