# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!v

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Steps to bootstrap a basic react app

#### 1. Bootstrap using the create-react-app command:
```
$ npx create-react-app <app-name> --template typescript
```

#### 2. Add the necessary eslint and accompanying plugins
```
$ npm i --save-dev typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-config-airbnb-typescript eslint-plugin-react-hooks eslint-plugin-jest eslint-plugin-import
$ npx install-peerdeps --dev eslint-config-airbnb
$ npm i --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

#### 3. Copy the .eslintrc, .prettierrc .editorconfig files from this codebase into your project.

#### 4. Add these scripts to your package.json
```
"lint": "eslint \"src/**/*.{js,jsx,ts,tsx}\"",
"lint:fix": "eslint \"src/**/*.{js,jsx,ts,tsx}\" --fix"
```

