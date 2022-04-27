import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { TechnologyData } from "../../commons/model/index";
import { getValue, saveKeyValue } from "../../commons/storage";
import { TECHNOLOGY_INTERESTS_FILLED } from "../../constants";

export interface InterestedTechnologiesState {
  technologies: TechnologyData[];
  additionLoading: "idle" | "pending" | "succeeded" | "failed";
}

const initialState: InterestedTechnologiesState = {
  technologies: [],
  additionLoading: "idle",
};

export const getInterestedTechnologiesFromLocalStorage = createAsyncThunk(
  "interest/technology/query",
  async (_, thunkAPI) => {
    try {
      const result = await getValue(TECHNOLOGY_INTERESTS_FILLED);
      if (!result) {
        thunkAPI.rejectWithValue("No value");
      } else {
        return result;
      }
    } catch (err) {
      console.log(err);
      thunkAPI.rejectWithValue("No value");
    }
  }
);

export const addInterestedTechnologyInLocalStorage = createAsyncThunk(
  "interest/technology/add",
  async (technology: TechnologyData, thunkAPI) => {
    try {
      const result: TechnologyData[] = await getValue(
        TECHNOLOGY_INTERESTS_FILLED
      );
      const new_value = [...(result ? result : []), technology];
      await saveKeyValue(TECHNOLOGY_INTERESTS_FILLED, new_value);
      return new_value;
    } catch (err) {
      console.log(err);
      thunkAPI.rejectWithValue("Couldn't save data in local storage");
    }
  }
);

export const removeInterestedTechnologyInLocalStorage = createAsyncThunk(
  "interest/technology/remove",
  async (id: number, thunkAPI) => {
    try {
      const result: TechnologyData[] = await getValue(
        TECHNOLOGY_INTERESTS_FILLED
      );
      const new_result = result.filter((e) => e.id != id);
      await saveKeyValue(TECHNOLOGY_INTERESTS_FILLED, new_result);
      return new_result;
    } catch (err) {
      console.log(err);
      thunkAPI.rejectWithValue("Couldn't  save data in local storage");
    }
  }
);

export const technologiesInterestsListSlice = createSlice({
  name: "interestedTechnologies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getInterestedTechnologiesFromLocalStorage.fulfilled,
        (state, action) => {
          state.technologies = action.payload;
        }
      )
      .addCase(
        getInterestedTechnologiesFromLocalStorage.rejected,
        (state, action) => {
          state.technologies = [];
        }
      )
      .addCase(
        getInterestedTechnologiesFromLocalStorage.pending,
        (state, action) => {
          state.technologies = [];
        }
      )
      .addCase(
        addInterestedTechnologyInLocalStorage.pending,
        (state, action) => {
          state.technologies = [];
          state.additionLoading = "pending";
        }
      )
      .addCase(
        addInterestedTechnologyInLocalStorage.fulfilled,
        (state, action) => {
          state.technologies = action.payload || [];
          state.additionLoading = "succeeded";
        }
      )
      .addCase(
        addInterestedTechnologyInLocalStorage.rejected,
        (state, action) => {
          state.technologies = [];
          state.additionLoading = "failed";
        }
      )
      .addCase(
        removeInterestedTechnologyInLocalStorage.fulfilled,
        (state, action) => {
          state.technologies = action.payload || [];
        }
      );
  },
});
