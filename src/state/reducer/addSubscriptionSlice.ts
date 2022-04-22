import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { requestApi } from "../../commons/api/index";
import { SubscriptionData } from "../../commons/model/index";

export interface AddSubscriptionState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  addedSubscription: SubscriptionData | undefined;
}

const initialState: AddSubscriptionState = {
  loading: "idle",
  addedSubscription: undefined,
};

export const addSubscription = createAsyncThunk(
  "subscription/add",
  async (subscription: SubscriptionData, thunkAPI) => {
    try {
      const response: any = await requestApi(
        "api/project/subscription",
        "POST",
        subscription
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const addSubscriptoinSlice = createSlice({
  name: "addSubscription",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addSubscription.fulfilled, (state, action) => {
        state.addedSubscription = action.payload;
        state.loading = "succeeded";
      })
      .addCase(addSubscription.rejected, (state, action) => {
        state.addedSubscription = undefined;
        state.loading = "failed";
      })
      .addCase(addSubscription.pending, (state, action) => {
        state.addedSubscription = undefined;
        state.loading = "pending";
      });
  },
});
