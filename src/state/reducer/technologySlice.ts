import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TechnologyData } from "../../commons/model/index";
import { requestApi } from "../../commons/api/index";

export interface TechnologyState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  technologies: TechnologyData[];
}

const initialState: TechnologyState = {
  loading: "idle",
  technologies: [],
};

export type TechnologyFilter = {
  title: string;
};

export const getAllTechnologiesObj = () => {
  return { title: "" };
};

export const filterTechnology = createAsyncThunk(
  "technology/filter",
  async (technologyFilter: TechnologyFilter, thunkAPI) => {
    try {
      const response: any = await requestApi(
        "api/technology/filter/",
        "POST",
        technologyFilter
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const technologiesListSlice = createSlice({
  name: "technologies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(filterTechnology.fulfilled, (state, action) => {
        state.technologies = action.payload;
        state.loading = "succeeded";
      })
      .addCase(filterTechnology.rejected, (state, action) => {
        state.technologies = [];
        state.loading = "failed";
      })
      .addCase(filterTechnology.pending, (state, action) => {
        state.technologies = [];
        state.loading = "pending";
      });
  },
});
