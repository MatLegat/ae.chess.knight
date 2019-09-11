# ae.chess.knight.front
Challenge application built with Express.js and Vue.js.

Shows reachable positions of a chess knight in two rounds, according to the initial position given by the user.

## Project setup
```
npm install
```

## Compile and hot-reloads for development
Run only vue app (front-end): 
```
npm run vue:serve
```
Run only express app (back-end): 
```
npm run express
```
##### Run both:
```
npm run serve
```

## Compile and minify for production
Run only vue app (front-end): 
```
npm run vue:build
```
Run only express app (back-end): 
```
npm run express:run
```
##### Run both:
```
npm run build
```

## Run tests
```
npm run test
```

## Lint and fix files
```
npm run lint
```

## Custom configuration
You can change the application port using the environment variable `EXPRESS_PORT`

Windows example:
```
$env:EXPRESS_PORT=1234; npm run build
```
Linux example:
```
EXPRESS_PORT=1234 npm run build
```
For changing configurations on the Vue app, see [Vue CLI Configuration Reference](https://cli.vuejs.org/config/).

