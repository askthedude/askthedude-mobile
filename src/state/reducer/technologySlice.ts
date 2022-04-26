import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TechnologyData } from "../../commons/model/index";
import { requestApi } from "../../commons/api/index";

export interface TechnologyState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  technologies: TechnologyData[];
  loadingAddition: "idle" | "pending" | "succeeded" | "failed";
  addedTechnology: TechnologyData | undefined;
}

const initialState: TechnologyState = {
  loading: "idle",
  technologies: [],
  loadingAddition: "idle",
  addedTechnology: undefined,
};

export type TechnologyFilter = {
  title: string;
};

export const getAllTechnologiesObj = () => {
  return { title: "" };
};

export type NewTechnology = {
  name: string;
  resource_url: string;
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

export const addTechnology = createAsyncThunk(
  "technology/add",
  async (technology: NewTechnology, thunkAPI) => {
    try {
      const response: any = await requestApi(
        "api/technology/",
        "POST",
        technology
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
      })
      .addCase(addTechnology.pending, (state, action) => {
        state.addedTechnology = undefined;
        state.loadingAddition = "pending";
      })
      .addCase(addTechnology.fulfilled, (state, action) => {
        state.addedTechnology = action.payload;
        state.loadingAddition = "succeeded";
      })
      .addCase(addTechnology.rejected, (state, action) => {
        state.addedTechnology = undefined;
        state.loadingAddition = "failed";
      });
  },
});
