import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PartialProjectData } from "../../commons/model/index";
import { requestApi } from "../../commons/api/index";

export interface ProjectListState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  projects: PartialProjectData[];
}

const initialState: ProjectListState = {
  loading: "idle",
  projects: [],
};

export const filterProjects = createAsyncThunk(
  "project/filter",
  async (projectFilter: any, thunkAPI) => {
    try {
      const response: any = await requestApi(
        "api/project/filter",
        "POST",
        projectFilter
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const projectListSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(filterProjects.fulfilled, (state, action) => {
        state.projects = action.payload;
        state.loading = "succeeded";
      })
      .addCase(filterProjects.rejected, (state, action) => {
        state.projects = [];
        state.loading = "failed";
      })
      .addCase(filterProjects.pending, (state, action) => {
        state.projects = [];
        state.loading = "pending";
      });
  },
});
