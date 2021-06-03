# Timeline App

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A timeline application where you can add, edit and delete items that are displayed in chronological order.

Tech Stack: Vue (v2.6.11), Vuex, Vuetify, Axios

## Vue 2 vs Vue 3

Although Vue 3 has improved performance and better support for typescript, most libraries and UI frameworks are not yet supported for it.

Being a fast project (prototype), it was ideal to have a UI framework based on components like Vuetify, so Vue 2 was chosen for this project.

nota: El principal motivo de este proyecto es como resultado de una prueba técnica. Sientete libre de utilizarlo con cualquier propósito.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Fake API

In this project there are commented requests with axios. If you want to test them, you can run a fake API with json-server (remember to uncomment the aync methods). To do this, post the following command: 
```
json-server --watch src/db/db.json
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
