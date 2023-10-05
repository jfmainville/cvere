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
                <tr key={cveItem.id}>
                    <td>{cveItem.id}</td>
                    <td>{cveItem.description}</td>
                    <td>{cveItem.vulnerabilityStatus}</td>
                    <td>{cveItem.publishedDate}</td>
                    <td>{cveItem.lastModifiedDate}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
};

export default Table;