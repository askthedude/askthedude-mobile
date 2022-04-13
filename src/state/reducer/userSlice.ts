import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserData } from "../../commons/model/index";
import { requestApi } from "../../commons/api/index";

export interface UserState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  user: UserData | undefined;
  token: string | undefined;
}

const initialState: UserState = {
  loading: "idle",
  user: undefined,
  token: undefined,
};

export type UserLogin = {
  username: string;
  password: string;
};

export type UserSignup = {
  name: string;
  username: string;
  password: string;
  email: string;
  github_url: string;
  linkedin_url: string;
};

export const userLogin = createAsyncThunk(
  "user/login",
  async (loginData: UserLogin, thunkAPI) => {
    try {
      const response: any = await requestApi("api/signin", "POST", loginData);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const userSignup = createAsyncThunk(
  "user/signup",
  async (signupData: UserSignup, thunkAPI) => {
    try {
      const response: any = await requestApi("api/signup", "POST", signupData);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signout(state) {
      state.user = undefined;
      state.token = undefined;
    },
  },
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
      })
      .addCase(userSignup.pending, (state, action) => {
        state.user = undefined;
        state.token = undefined;
        state.loading = "pending";
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.loading = "succeeded";
      })
      .addCase(userSignup.rejected, (state, action) => {
        state.user = undefined;
        state.token = undefined;
        state.loading = "failed";
      });
  },
});
