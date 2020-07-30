import React from "react";
import ReactDOM from "react-dom";

import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import projectsReducer from "store/reducers/projects";
import skillsReducer from "store/reducers/skills";
import messageReducer from "store/reducers/message";

import App from "App";

const reducer = combineReducers({
  projects: projectsReducer,
  skills: skillsReducer,
  message: messageReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
