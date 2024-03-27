# RIA2 - Frontend

## Description

It's a RIA developed with React that enables users to upload an image and receive labels describing its contents, along with their confidence levels.

## Getting Started

### Prerequisites

List all dependencies and their version needed by the project as :

- VSCode or another text editor
- Docker Daemon
- [RIA Backend is running](https://github.com/menoudyann/RIA2-Backend)

### Configuration

**Environment File**

The project contains an example of the environment file required for the project. Simply copy it and rename it .env.

```
VITE_LABELDETECTOR_API_URL=http://localhost:8222/api/v1/labeldetector/
VITE_DATAOBJECT_API_URL=http://localhost:8222/api/v1/dataobject/
VITE_BUCKET_URI=gs://your.test.bucket/
```

Normally, you just have to change the VITE_BUCKET_URI if you use my [RIA2 Backend](https://github.com/menoudyann/RIA2-Backend.git).

## Deployment with Docker

To run this project, you must have Docker Daemon installed.

#### Dev

Go to the main folder.

Execute this command to build our image.
```
docker build --target development -t "frontend:dev" .
```

Execute this command to run the container
```
docker run --name frontend-dev -p 7070:7070 frontend:dev
```

#### Prod

Go to the main folder.

Execute this command to build our image.
```
docker build --target production -t "frontend:prod" .
```

Execute this command to run the container
```
docker run --name frontend-prod -p 7070:7070 frontend:prod
```

### Deployment in local

#### Dependencies

Go the the project root and run the following command to install the dependencies.

```
npm i 
```

#### How to run ?

```
npm run dev
```

### On prod environment

#### Dependencies

Go the the project root and run the following command to install the dependencies.

```
npm i 
```

#### How to run ?

```
npm run build && npm run start
```

## Directory structure

```
.
├── Dockerfile
├── README.md
├── cypress
│   ├── downloads
│   ├── e2e
│   │   ├── UITests.cy.js																			// frontend tests
│   │   └── UITests.cy.test.js
│   ├── fixtures
│   │   ├── image.png
│   │   └── labels.json
│   ├── screenshots
│   └── support
│       ├── commands.js
│       └── e2e.js
├── cypress.config.js
├── docs																											// documentation
│   ├── architecture
│   │   └── architecture.drawio.png
│   └── mockups
│       └── V1.png
├── index.html
├── package-lock.json
├── package.json																							// dependencies
├── postcss.config.js
├── public
│   └── vite.svg
├── src
│   ├── App.jsx																						
│   ├── assets
│   │   └── css
│   │       └── global.css
│   ├── components																						// components
│   │   ├── Dragger.jsx																				// drag and drop component
│   │   ├── LanguageSelector.jsx															// language selector component
│   │   ├── QueryParameters.jsx																// query parameters component
│   │   ├── RequestForm.jsx																		// request form component
│   │   └── Results.jsx																				// results component
│   ├── locales
│   │   └── i18n.js																						// translation
│   ├── main.jsx
│   └── pages
│       └── home
│           ├── Home.jsx																			// view
│           └── home.scss
├── tailwind.config.js
└── vite.config.js
```



## Collaborate

- How to propose a new feature ?

  If you're interested in enhancing this project, you're welcome to:

  - **Fork the Project:** You can create a fork of the project on your own GitHub account to work on your changes.
  - **Submit Pull Requests:** If you develop new features or improvements, feel free to submit a pull request for integration into the main project.

  #### Commit Rules

  I use very simple commit rules. The commit message **starts with an infinitive verb and describes the added/deleted content clearly in one sentence**. If your commit requires two sentences because the code added modifies two things, please make two separate commits. This is to improve readability and also simplify versioning.

  #### Branches Strategy

  By default, there are two branches: main and develop. Main is the branch currently in production, develop is based on the same branch.

  To add a new feature, please create a branch from develop using Gitflow. [To the Gitflow guide](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)

  #### Any question ?

  For any questions or further information, please feel free to reach out to me at: [yann.menoud@gmail.com](mailto:yann.menoud@gmail.com).

## License

This project is licensed under the [MIT](https://github.com/menoudyann/BI_DataObject/blob/main/LICENSE) licence.

## Contact

You can contact me by email at the following address : yann.menoud@gmail.com or directly on LinkedIn.
