import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CompleteProjectData, StatisticsData } from "../../commons/model/index";
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
      const response: any = await requestApi(`api/project/${projectId}`, "GET");
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const incrementSeenFrequencyObject = (
  projectId: number
): StatisticsData => {
  return {
    id: projectId,
    seen_frequency: 1,
    number_of_interested: 0,
    subscriptions: 0,
  };
};

export const updateProjectStats = createAsyncThunk(
  "project/updateStats",
  async (updateProjectStatistics: StatisticsData, thunkAPI) => {
    try {
      const response: any = await requestApi(
        `api/project/${updateProjectStatistics.id}/stats`,
        "POST",
        {
          delta_seen_frequency: updateProjectStatistics.seen_frequency,
          delta_number_of_interested:
            updateProjectStatistics.number_of_interested,
          delta_subscriptions: updateProjectStatistics.subscriptions,
        }
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
      })
      .addCase(updateProjectStats.fulfilled, (state, action) => {
        if (state.project) {
          state.project.stats.seen_frequency = action.payload.seen_frequency;
        }
      });
  },
});
