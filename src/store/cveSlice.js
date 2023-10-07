import { createSlice } from "@reduxjs/toolkit";

const cveSlice = createSlice({
    name: "cve",
    initialState: {
        cves: [],
        startDate: new Date(new Date().setDate(new Date().getDate() - 7)).toISOString(),
        endDate: new Date().toISOString()
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
        updateCVEsDateRange(state, action) {
            state.startDate = action.payload.startDate
            state.endDate = action.payload.endDate
        },
    }
});

export const cveActions = cveSlice.actions;

export default cveSlice;