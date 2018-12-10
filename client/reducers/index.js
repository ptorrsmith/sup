import { combineReducers } from "redux";

import providers from "./providers";
import currentService from "./currentService";
import currentView from "./currentView";
import currentProvider from "./currentProvider";
import timer from "./timer";

export default combineReducers({
  providers,
  currentService,
  currentProvider,
  timer
});
