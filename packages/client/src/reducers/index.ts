import { combineReducers } from "@reduxjs/toolkit";
import { doneSlice } from "./done/done";
import { inProgressSlice } from "./inProgress/inProgress";
import { plannedSlice } from "./planned/planned";

const rootReducer = combineReducers({
  planned: plannedSlice.reducer,
  inProgress: inProgressSlice.reducer,
  done: doneSlice.reducer,
});

export default rootReducer;
