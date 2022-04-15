import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PartialProjectData } from "../../commons/model/index";
import { requestApi } from "../../commons/api/index";
import { FilterProject } from "./projectListSlice";

export interface ProjectListState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  projects: PartialProjectData[];
}

const initialState: ProjectListState = {
  loading: "idle",
  projects: [],
};

export const getFilterProjectObjectForUser = (user_id?: number) => {
  if (user_id == undefined) {
    return {};
  }
  return {
    author_user_id: user_id,
  };
};

export const filterUserProjects = createAsyncThunk(
  "project/user/filter",
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

export const userProjectsListSlice = createSlice({
  name: "userProjects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(filterUserProjects.fulfilled, (state, action) => {
        state.projects = action.payload;
        state.loading = "succeeded";
      })
      .addCase(filterUserProjects.rejected, (state, action) => {
        state.projects = [];
        state.loading = "failed";
      })
      .addCase(filterUserProjects.pending, (state, action) => {
        state.projects = [];
        state.loading = "pending";
      });
  },
});
