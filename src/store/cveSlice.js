import { createSlice } from "@reduxjs/toolkit";

const cveSlice = createSlice({
    name: "cve",
    initialState: {
        cves: []
    },
    reducers: {
        fetchCVEs(state, action) {
            state.cves = action.payload.cveData.vulnerabilities.map(cveItem => {
                return {
                    id: cveItem.cve.id,
                    description: cveItem.cve["descriptions"][0]["value"],
                    vulnerabilityStatus: cveItem.cve.vulnStatus,
                    publishedDate: cveItem.cve.published,
                    lastModifiedDate: cveItem.cve.lastModified
                }
            })
            state.cves.sort((a, b) => new Date(b.lastModifiedDate) - new Date(a.lastModifiedDate))
        },
    }
});

export const cveActions = cveSlice.actions;

export default cveSlice;