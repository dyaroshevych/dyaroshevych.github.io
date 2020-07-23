import { SET_MESSAGE, RESET_MESSAGE } from "./actionTypes";

export const setMessage = (type, text) => {
  return (dispatch) => {
    dispatch({
      type: SET_MESSAGE,
      payload: {
        type,
        text,
      },
    });

    if (type === "danger" || type === "success") {
      setTimeout(() => dispatch(resetMessage()), 2000);
    }
  };
};

export const resetMessage = () => {
  return {
    type: RESET_MESSAGE,
  };
};
