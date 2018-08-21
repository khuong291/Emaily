import { CHANGE_LOADER } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CHANGE_LOADER:
      return { isLoading: action.isLoading };
    default:
      return state;
  }
};
