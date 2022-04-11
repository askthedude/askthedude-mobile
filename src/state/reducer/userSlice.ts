import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserData } from "../../commons/model/index";
import { requestApi } from "../../commons/api/index";

export interface ProjectListState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  user: UserData | undefined;
  token: string | undefined;
}

const initialState: ProjectListState = {
  loading: "idle",
  user: undefined,
  token: undefined,
};

export type UserLogin = {
  username: string;
  password: string;
};

export const userLogin = createAsyncThunk(
  "user/login",
  async (loginData: UserLogin, thunkAPI) => {
    try {
      const response: any = await requestApi("api/signin", "POST", loginData);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Opps there seems to be an error");
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = "succeeded";
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.user = undefined;
        state.token = undefined;
        state.loading = "failed";
      })
      .addCase(userLogin.pending, (state, action) => {
        state.user = undefined;
        state.token = undefined;
        state.loading = "pending";
      });
  },
});
