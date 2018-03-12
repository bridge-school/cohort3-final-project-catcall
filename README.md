#  [Project Title]
[Project description here]

## Getting Started

After cloning this repository, a simple call to `npm i` or `yarn` will install many of the packages locally that you will need.

Next, a call to either `npm run dev` or `yarn dev` will get you started and run the express server and a separate server hosting the react app simultaneously and in development mode. By default, the express server will be accessible at `http://localhost:3001` and the separate server hosting the react app will be accessible at `http://localhost:3000`.

See **Deployment** for notes on how to deploy the project on Heroku.

## Prerequisites and Installation

1. First and foremost, you will need to have [Node.js and npm downloaded and installed](https://nodejs.org/en/download/)
  a. If you check the [`package.json`](package.json) file you'll notice that your major version of Node.js should be `8` and your major version of npm should be `5` (this is so you will have access to [`npx`](https://medium.com/@maybekatz/introducing-npx-an-npm-package-runner-55f7d4bd282b))
  b. _[Optional]_ If you find yourself switching between node versions often for various projects or repositories, consider using [nvm](https://github.com/creationix/nvm)
2. Once you have Node and npm installed at the right versions, run
    ```
    npm i -g nodemon
    ```
    to install `nodemon`, which will be used for development.
3. You will also need a `.env` file in the root directory of inside where you cloned this repository. See [**Environment Variables**](#environment-variables) for what environment variables you will need and what they will refer to.
4. For deployment considerations, you will also need to have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed

End with an example of getting some data out of the system or using it for a little demo
### Environment Variables
You won't need to worry about manually setting environment variables. Instead, this project is meant to use a `.env` file

With descriptions instead of values, this is what your `.env` should look like (noting that currently the database is assumed to be a MongoDB instance):
```
DB_NAME=<database name>
DB_PORT=<database port>
DB_HOST=<database host>
DB_USER=<database username, for authentication>
DB_PASS=<database password, for authentication>

LOG_LEVEL=info # the server will use this log level to ignore anything not important enough to appear in the console

REACT_APP_API_HOST=http://localhost # the client will use this host to contact the server
REACT_APP_API_PORT=3001 # the client will use this port to contact the server
```

## Built With

* [React `16.2.0`](https://reactjs.org/docs/hello-world.html) - The front-end framework used
* [dotenv](https://github.com/motdotla/dotenv) - To manage configuration of environment variables
* [babel `^6.26.0`](https://babeljs.io/) - For production, to transpile the server-side es6+ into a static production-grade version
* [babel-register `^6.26.0`](https://babeljs.io/docs/usage/babel-register/) - For development, to transpile the server-side es6+ just-in-time
* [express `~4.15.5`](https://expressjs.com/en/4x/api.html) - The server-side framework used
* [Mongoose](http://mongoosejs.com/) - To help deal with object models
* [express-generator](https://expressjs.com/en/starter/generator.html) - To generate the express server-side
* [create-react-app](https://github.com/facebook/create-react-app) - To generate the react app

## License

This project is licensed under a [Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

## Acknowledgments

* [PurpleBlooth](https://github.com/PurpleBooth/), for [their README template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2/)
* All the wonderful people of [bridge](http://bridgeschool.io/)

