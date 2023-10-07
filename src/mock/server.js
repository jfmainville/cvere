import { createServer, Model } from "miragejs";

const makeServer = ({ environment = "test" }) => {
    createServer({
        models: {
            resources: Model,
        },
        routes() {
            this.urlPrefix = "https://services.nvd.nist.gov/rest/json/cves"

            // Resources
            this.get("/2.0?lastModStartDate=2023-09-18T13:00:00.000%2B01:00&lastModEndDate=2023-09-19T13:36:00.000%2B01:00", (schema) => {
                return schema.db.resources
            })
        },
    })
}

export default makeServer;