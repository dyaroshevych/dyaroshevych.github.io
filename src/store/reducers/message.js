import { SET_MESSAGE, RESET_MESSAGE } from "store/actions/actionTypes";
import { updateObject } from "store/utility";

const initialState = {
  type: null,
  text: "",
};

const setMessage = (state, action) => {
  const updatedState = {
    type: action.payload.type,
    text: action.payload.text,
  };

  return updateObject(state, updatedState);
};

const resetMessage = (state) => {
  const updatedState = initialState;

  return updateObject(state, updatedState);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return setMessage(state, action);
    case RESET_MESSAGE:
      return resetMessage(state);
    default:
      return state;
  }
};

export default reducer;
