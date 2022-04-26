import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestApi } from "../../commons/api/index";
import { CompleteProjectData } from "../../commons/model/index";

export interface AddProjectState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  addedProject: CompleteProjectData | undefined;
}

const initialState: AddProjectState = {
  loading: "idle",
  addedProject: undefined,
};

export type AddProject = {
  title: string;
  description: string;
  start_date: string;
  stars: number;
  github_url: string;
  url: string;
  technology_ids: number[];
};

export const addProject = createAsyncThunk(
  "project/add",
  async (
    { project, token }: { project: AddProject; token?: string },
    thunkAPI
  ) => {
    try {
      const response: any = await requestApi(
        "api/project/",
        "POST",
        project,
        token
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const addProjectSlice = createSlice({
  name: "addProject",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addProject.fulfilled, (state, action) => {
        state.addedProject = action.payload;
        state.loading = "succeeded";
      })
      .addCase(addProject.rejected, (state, action) => {
        state.addedProject = undefined;
        state.loading = "failed";
      })
      .addCase(addProject.pending, (state, action) => {
        state.addedProject = undefined;
        state.loading = "pending";
      });
  },
});
