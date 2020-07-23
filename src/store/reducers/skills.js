import {
  FETCH_SKILLS_START,
  FETCH_SKILLS_SUCCESS,
  FETCH_SKILLS_FAIL,
} from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  skills: [],
  loading: false,
  error: false,
};

const fetchSkillsStart = (state) => {
  const updatedState = {
    loading: true,
  };

  return updateObject(state, updatedState);
};

const fetchSkillsSuccess = (state, action) => {
  const updatedState = {
    skills: action.payload.skills,
  };

  return updateObject(state, updatedState);
};

const fetchSkillsFail = (state) => {
  const updatedState = {
    error: true,
  };

  return updateObject(state, updatedState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SKILLS_START:
      return fetchSkillsStart(state);
    case FETCH_SKILLS_SUCCESS:
      return fetchSkillsSuccess(state, action);
    case FETCH_SKILLS_FAIL:
      return fetchSkillsFail(state);
    default:
      return state;
  }
};

export default reducer;
