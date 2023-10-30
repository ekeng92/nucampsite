import { configureStore } from "@reduxjs/toolkit";
import { campsitesReducer } from "../features/campsites/campsitesSlice";
import { partnersReducer } from "../features/partners/partnersSlice";

export const store = configureStore({
  reducer: {
    campsites: campsitesReducer,
    partners: partnersReducer,
  },
});
