# Warehouse FE

## Solution description

Due to the lack of time not all the scenarios were covered.

- bootstrap library styles were added as an example to avoid extra work
- folder structure is suitable for average size of the projects
  - followed atomic design pattern
  - there is no reason to keep low level items as there with bootstrap attached
- css is following utility-first approach
- Added some tests for the layout folder items as an example
- Added session storage for items in the cart

## TODO
  - cover scenario with the lack of common articles for different products
  - the `order` request to BE is not ready
  - update items in the session storage on latest server updates
  - add more tests
  - responsiveness should be improved

## Requirements

- [Node.js](https://nodejs.org/en/download/)

## Installing the Dependencies

```bash
npm install
```

## Starting the APP

```bash
npm start
```

The application should be available at [http://localhost:3000](http://localhost:3000) in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Testing the APP

```bash
npm run test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Building the APP

```bash
npm run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
