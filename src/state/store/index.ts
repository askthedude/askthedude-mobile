import { configureStore } from "@reduxjs/toolkit";
import { projectListSlice } from "../reducer/projectListSlice";
import { projectSlice } from "../reducer/projectSlice";
import { userSlice } from "../reducer/userSlice";

export const store = configureStore({
  reducer: {
    projects: projectListSlice.reducer,
    project: projectSlice.reducer,
    user: userSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
