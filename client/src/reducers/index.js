import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducer from "./authReducer";
import surveysReducer from "./surveysReducer";
import loaderReducer from "./loaderReducer";

export default combineReducers({
  auth: authReducer,
  form: reduxForm, // reduxForm reducer is provided by redux-form
  surveys: surveysReducer,
  loading: loaderReducer
});
