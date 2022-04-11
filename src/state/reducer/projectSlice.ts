import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CompleteProjectData } from "../../commons/model/index";
import { requestApi } from "../../commons/api/index";

export interface ProjectState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  project: CompleteProjectData | undefined;
}

const initialState: ProjectState = {
  loading: "idle",
  project: undefined,
};

export const getProjectById = createAsyncThunk(
  "project/getById",
  async (projectId: number, thunkAPI) => {
    try {
      const response: any = await requestApi(
        `api/project/${projectId}`,
        "GET",
        {}
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjectById.fulfilled, (state, action) => {
        state.project = action.payload;
        state.loading = "succeeded";
      })
      .addCase(getProjectById.rejected, (state, action) => {
        state.project = undefined;
        state.loading = "failed";
      })
      .addCase(getProjectById.pending, (state, action) => {
        state.project = undefined;
        state.loading = "pending";
      });
  },
});
