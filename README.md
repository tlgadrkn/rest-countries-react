# rest-countries-react

## About The Project

This is an application that gives some information about all countries in the world.

Application let's user to:

- See all countries on the homepage as a list
- Search for a specific country
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode ( initially, it auto-detects user's preference. )

The live version of app is [Here](https://rest-countries-react-eight.vercel.app/)

## Built With

- [React] (https://reactjs.org/)
- [React Router] (https://reactrouter.com/)
- [create-react-app] (https://create-react-app.dev/)
- [Rest Countries API] (https://restcountries.eu/)
- [CSS Modules] (https://github.com/css-modules/css-modules)

## System Requirements

- [git][https://git-scm.com/] v2.27 or greater
- [node][https://nodejs.org/en/] 14.5 or greater
- [npm][https://nodejs.org/en/] v6 or greater

To check if you're ok to continue, you can run these commands:

```
git --version
node --version
npm --version
```

If requirements above are not installed in your computer, you'll need to install them. By clicking on them you can go to their website, which can lead you the way.

<!-- GETTING STARTED -->

# Getting Started

In order to view this project locally, you need to make sure you clone this repository and install it's dependencies.

## Installation

- Clone the repository

  ```sh
  git clone https://github.com/tlgadrkn/rest-countries-react.git
  ```

- Navigate to repository folder
  ```sh
  cd rest-countries-react
  ```
- Install NPM packages
  ```sh
  npm install
  ```

## Running The App

In the project directory, you can run:

```sh
npm start
```

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```sh
npm run build
```

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Bugs <br>

Please feel free to create an issue if you see a bug or something unexpected in the app.

# Contributing <br>

I give importance to people's feedbacks, suggestions. Any contribution are greatly appreciated.

In order to contribute, Please:

- Fork the Project
- Create your Feature Branch (`git checkout -b feature/yourFeature`)
- Commit your Changes (`git commit -m 'Brief explanation of feature`')
- Push to the Branch (`git push origin feature/yourFeature`)
- Open a Pull Request

# Future Steps

- Add a map which would focus on the country that user views, probably using [React Leaflet](https://react-leaflet.js.org/).
- Display more specific data related to countries.
- Optimize performance using [react-virtual](https://github.com/tannerlinsley/react-virtual)
