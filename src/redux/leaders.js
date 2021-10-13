import * as ActionTypes from "./ActionTypes";
export const Leaders = (
  state = {
    errMess: null,
    isLoading: true,
    leaders: [],
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.LEADERS_LOADING:
      return {
        ...state,
        isLoading: true,
        leaders: [],
        errMess: null,
      };
    case ActionTypes.LEADERS_FAILED:
      return {
        ...state,
        isLoading: false,
        errMess: action.payload,
      };
    case ActionTypes.ADD_LEADERS:
      return {
        ...state,
        isLoading: false,
        leaders: action.payload,
        errMess: null,
      };
    default:
      return state;
  }
};
