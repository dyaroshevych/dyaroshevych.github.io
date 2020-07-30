import {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAIL,
  OPEN_PROJECT,
  CLOSE_PROJECT,
} from "./actionTypes";
import axios from "axios.js";

const fetchProjectsSuccess = (projects) => {
  return {
    type: FETCH_PROJECTS_SUCCESS,
    payload: {
      projects,
    },
  };
};

const fetchProjectsFail = () => {
  return {
    type: FETCH_PROJECTS_FAIL,
  };
};

export const fetchProjects = () => {
  return (dispatch) => {
    axios
      .get("/projects/general.json")
      .then(({ data }) => {
        dispatch(fetchProjectsSuccess(data));
      })
      .catch(() => {
        dispatch(fetchProjectsFail());
      });
  };
};

export const openProject = (projectName) => {
  const body = document.querySelector("body");

  setTimeout(() => {
    body.classList.remove("scrollable");
  }, 500);

  return {
    type: OPEN_PROJECT,
    payload: {
      projectName,
    },
  };
};

export const closeProject = () => {
  const body = document.querySelector("body");

  body.classList.add("scrollable");

  return {
    type: CLOSE_PROJECT,
  };
};
