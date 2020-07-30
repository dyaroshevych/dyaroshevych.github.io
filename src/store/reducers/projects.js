import {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAIL,
  OPEN_PROJECT,
  CLOSE_PROJECT,
} from "store/actions/actionTypes";
import { updateObject } from "store/utility";

const initialState = {
  projects: [],
  openedProjectIdx: null,
  errorMessage: null,
};

const fetchProjectsSuccess = (state, action) => {
  const updatedState = {
    projects: action.payload.projects,
  };

  return updateObject(state, updatedState);
};

const fetchProjectsFail = (state) => {
  const updatedState = {
    errorMessage: `Network error! Can't load projects.`,
  };

  return updateObject(state, updatedState);
};

const openProject = (state, action) => {
  const openedProjectIdx = state.projects.findIndex(
    (project) => project.name === action.payload.projectName
  );

  const updatedState = {
    openedProjectIdx,
  };

  return updateObject(state, updatedState);
};

const closeProject = (state) => {
  const updatedState = {
    openedProjectIdx: null,
  };

  return updateObject(state, updatedState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROJECTS_SUCCESS:
      return fetchProjectsSuccess(state, action);
    case FETCH_PROJECTS_FAIL:
      return fetchProjectsFail(state);
    case OPEN_PROJECT:
      return openProject(state, action);
    case CLOSE_PROJECT:
      return closeProject(state);
    default:
      return state;
  }
};

export default reducer;
