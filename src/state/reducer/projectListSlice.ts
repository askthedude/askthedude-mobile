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

const OFFSET = 0;
const LIMIT = 20;

export type FilterProject = {
  title?: string;
  description?: string;
  start_date?: string;
  stars?: number;
  is_active?: boolean;
  author_user_id?: number;
  technology_ids?: number[];
  offset?: number;
  limit?: number;
};

export const filterProjects = createAsyncThunk(
  "project/filter",
  async (projectFilter: FilterProject, thunkAPI) => {
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
