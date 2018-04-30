# functional-react-spa-starter

Boilerplate for a client side single page web app using `react` for rendering, `react-router` for routing, `redux` for state management, and `webpack` for bundling. `react` is a UI library that uses a lightweight DOM abstraction (virtual DOM) that sits between the code and the DOM the browser renders. `react` allows the developer to build the application all in javascript using JSX to represent HTML. Its core class is `Component` which contains methods for state, render, and other "lifecycle" methods. Application logic is defined in a scaffold of these `Component`s. This logic generates a set of virtual DOM nodes that are then diffed against the set of nodes that generated the DOM that the client's browser has currently rendered and then that minimal set of changes is patched to the DOM.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Find its very thorough and informative readme there. The bulk of the information about the project including instructions related to building the bundle, updating the scripts, and further customization are documented there.

Details regarding the customizations on top of the default `create-react-app` behavior are described below.

## SCSS

`node-sass-chokidar` is used to compile scss to css. When the project is running in development mode or built, `node-sass-chokidar` watches for any modifications to `*.scss` files in the project and automatically compiles them to `.css`, outputting them next to the original `.scss` files. Ensure that the `.css` files are the ones included in js. Since `*.scss` are the stylesheet source files, `*.css` in in the `.gitignore` file.

## redux

`redux` is a state management library. It works by creating a global state object and exposing functions to connect component state to the central store. Redux features only one way to alter state, "dispatching an action to the store". The "store" is the global state object. A store is comprised of one or more "reducers". A "reducer" is a function that takes in a chunk of state and an "action" and returns a new chunk of state. An "action" is an object containing a `type` and any other data needed to update state. This is a _Good Idea™_ because it allows for the decoupling of state changing business logic from render logic and makes UI components 100% pure render functions. The general unidirectional pattern is: state passed down -> transform into render props -> render function returns vDOM bound w/ event listeners -> (react vDOM diff/patch -> update real DOM -> paint to screen) -> user interacts with the app and fires event listener(s) -> listener executes the proper business logic and dispatches an action to a reducer -> passes new state down.

## redux-thunk

`redux-thunk` is used to handle asynchronous actions. `redux-thunk` is redux middleware. It allows us to write our action creators as thunks (functions that return functions) rather than functions that return actions. The returned functions are then executed by `redux-thunk` middleware, passing `dispatch` and `getState` as arguments. They can have side effects like executing asynchronous API calls. With `dispatch` and `getState` they can also dispatch actions and read the current state.

## react-router-redux

`react-router-redux` is used to handle client side routing. It is the redux-integrated version of the popular `react-router` and provides a convenient interface to match URL paths to route components. `react-router-redux` binds the router state to redux by placing a `routerReducer` on the root reducer so that any redux connected component has scope to the current route and history. It also includes a `push` function that navigates to a path by dispatching a redux action.

## route based code splitting with webpack based on dynamic imports

We define an `AsyncWrapper` component that takes a function to import a component and only render that component when it has loaded. We pass that component a dynamic import statement for our route's container component. During build, webpack will look for any ES6 dynamic import statement and know to split the bundle. The result of this is a main bundle containing all of the code necessary to render any route and a seperate bundle for each route. Then when the user first loads the app only the code necessary to render their requested route is served and all others are subsequently loaded on demand. This component is also the _only_ component written in classical style with React.Component lifecycle methods. It exposes an interface to pass a placeholder render while the route's bundle is being loaded as well as a callback action to dispatch once the route finishes loading.

## server side rendering static site generator via react-snapshot

`react-snapshot` is used to generate static content "snapshots" of each route at build time. It spins up a server and renders the app in a jsdom environment and saves the HTML generated. This HTML is then served whenever that route is hit, meaning that anything that doesn't need state is already pre-rendered. The HTML includes a js bundle to render the rest of the app. This allows robots to index the static content in the app for search engines and helps load times. NOTE: because of the jsdom pre-render, having each route do things like setting the HTML page <title> is fine.

# Project structure

```
functional-react-spa-starter/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.scss
    App.js
    App.test.js
    index.js
    registerServiceWorker.js
    Components/
      AsyncWrapper.js
      Header.js
      RouteLoading.js
    Routes/
      index.js
      Home/
        index.js
        container.js
        reducer.js
        container.scss
      Boilerplate/
        index.js
        container.js
        reducer.js
        container.scss
    Services/
      Boilerplate.js
    Store/
      index.js
      RootReducer.js
```

# MORE TBD
