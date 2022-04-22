import { configureStore } from "@reduxjs/toolkit";
import { projectListSlice } from "../reducer/projectListSlice";
import { projectSlice } from "../reducer/projectSlice";
import { userSlice } from "../reducer/userSlice";
import { technologiesListSlice } from "../reducer/technologySlice";
import { addProjectSlice } from "../reducer/addProjectSlice";
import { userProjectsListSlice } from "../reducer/userProjectsListSlice";
import { addSubscriptoinSlice } from "../reducer/addSubscriptionSlice";

export const store = configureStore({
  reducer: {
    projects: projectListSlice.reducer,
    project: projectSlice.reducer,
    user: userSlice.reducer,
    technologies: technologiesListSlice.reducer,
    addProject: addProjectSlice.reducer,
    userProjects: userProjectsListSlice.reducer,
    addSubscription: addSubscriptoinSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
