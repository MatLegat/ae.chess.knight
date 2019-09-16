# ae.chess.knight.front
Challenge application built with Express.js and Vue.js.

Shows reachable positions of a chess knight in two rounds, according to the initial position given by the user.

## Project Organization

### Express.js backend app
The backend of this application is built using [Express.js](https://expressjs.com/) and is kept under the directory `api/`.

App structure:
- `api/index.js`: Express.js app initialization, plugin ang route managements
- `api/models/*`: Data models representations (`Board` model)
- `api/controllers/*`: Commands for model manipulaton (`Game` controler)
- `api/endpoints/*`: Methods exposed to API requests (`KnightMoves` endpoint)


### Jasmine unit tests
Unit tests of the application backend are built with [Jasmine](https://jasmine.github.io/) and are kept under the directory `test/`.

There are test specifications for the `Board`model and the `Game` controller


### Vue.js frontend app
The frontend of this application is built using [Vue.js](https://vuejs.org/) and is kept under the directory `src/`. Static files that enclosures the app are kept under the directory `public/`

App structure:
- `app/main.js`: Vue.js app setup
- `app/App.vue`: Application root component
- `app/assets/*`: Image assets used by the app
- `app/components/*` Vue app components

Note: Each `.vue` component is a composite of its template, scripts and styles. This app uses HTML templates, JS scripts and SCSS/CSS styles

---
For project setup and configuration, check [CONTRIBUTING.md](CONTRIBUTING.md)
