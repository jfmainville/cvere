# CVEre

This repository contains the code for the CVEre project which consist of a central database of Common Vulnerabilities and Exposures (CVEs) that is presented in an easy to read way. Also, the web application provides a dashboard is available to provide a bug picture of the recently identified CVEs.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.

### Prerequisites

The following applications need to be installed on the local computer in order to run the project locally:

| Application | Minimum Version |                                       Link |
| ----------- | :-------------: | -----------------------------------------: |
| Node.js     |    21.7.1 +     |     [Link](https://nodejs.org/en/download) |
| Docker      |    18.09.2 +    | [Link](https://www.docker.com/get-started) |

### Environment Variables

The following environment variables needs to be set to use this application:

| Name                           | Description                    | Example     |
| ------------------------------ | :----------------------------- | :---------- |
| REACT_APP_ENV_NAME             | Define the current environment | development |
| REACT_APP_FIREBASE_API_KEY     | Firebase public API key        |             |
| REACT_APP_FIREBASE_AUTH_DOMAIN | Firebase authentication domain |             |
| REACT_APP_NVD_API_KEY          | NVD API key                    |             |

### Development

Once you installed all the required prerequisites, you can now proceed with the deployment of the development
environment by completing the following steps:

1. Execute the below command to download the repository to the local machine:

   `git clone git@github.com:jfmainville/cvere.git`

2. Navigate to the directory:

   `cd cvere`

3. You can now run the following command to start the development environment:

   `docker-compose up --build`

4. When the development environment is no longer required, you can execute the below command to shutdown the
   environment:

   `docker-compose down`
