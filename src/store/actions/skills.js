import {
  FETCH_SKILLS_START,
  FETCH_SKILLS_SUCCESS,
  FETCH_SKILLS_FAIL,
} from "./actionTypes";
import axios from "axios.js";

const fetchSkillsStart = () => {
  return {
    type: FETCH_SKILLS_START,
  };
};

const fetchSkillsSuccess = (skills) => {
  return {
    type: FETCH_SKILLS_SUCCESS,
    payload: {
      skills,
    },
  };
};

const fetchSkillsFail = () => {
  return {
    type: FETCH_SKILLS_FAIL,
  };
};

export const fetchSkills = () => {
  return (dispatch) => {
    dispatch(fetchSkillsStart());

    axios
      .get("/skills.json")
      .then(({ data }) => dispatch(fetchSkillsSuccess(data)))
      .catch(() => dispatch(fetchSkillsFail()));
  };
};
