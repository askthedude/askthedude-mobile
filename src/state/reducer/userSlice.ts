import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserData } from "../../commons/model/index";
import { requestApi } from "../../commons/api/index";
import { handleAxiosError, handleReduxReject } from "../utils";

export interface UserState {
  loading: "idle" | "pending" | "succeeded" | "failed";
  user: UserData | undefined;
  jwttoken: string | undefined;
  signupErrors: string[];
  loginErrors: string[];
}

const initialState: UserState = {
  loading: "idle",
  user: undefined,
  jwttoken: undefined,
  signupErrors: [],
  loginErrors: [],
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
  identifier_token: string;
};

export type IdentifierTokenAdd = {
  identifier_token: string;
};

export const userLogin = createAsyncThunk(
  "user/login",
  async (loginData: UserLogin, thunkAPI) => {
    try {
      const response: any = await requestApi("api/signin", "POST", loginData);
      return response.data;
    } catch (err: any) {
      return handleAxiosError(err, thunkAPI);
    }
  }
);

export const userSignup = createAsyncThunk(
  "user/signup",
  async (signupData: UserSignup, thunkAPI) => {
    try {
      const response: any = await requestApi("api/signup", "POST", signupData);
      return response.data;
    } catch (err: any) {
      return handleAxiosError(err, thunkAPI);
    }
  }
);

export const anonymousTokenAdd = createAsyncThunk(
  "user/anonymous/token",
  async (anonymousData: IdentifierTokenAdd, thunkAPI) => {
    try {
      const response: any = await requestApi(
        "api/user/anonymous",
        "POST",
        anonymousData
      );
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
      state.jwttoken = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.jwttoken = action.payload.token;
        state.loading = "succeeded";
        state.loginErrors = [];
      })
      .addCase(userLogin.rejected, (state, action: any) => {
        state.user = undefined;
        state.jwttoken = undefined;
        state.loading = "failed";
        handleReduxReject(action, state, "loginErrors");
      })
      .addCase(userLogin.pending, (state, action) => {
        state.user = undefined;
        state.jwttoken = undefined;
        state.loading = "pending";
        state.loginErrors = [];
      })
      .addCase(userSignup.pending, (state, action) => {
        state.user = undefined;
        state.jwttoken = undefined;
        state.loading = "pending";
        state.signupErrors = [];
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.jwttoken = action.payload.token;
        state.loading = "succeeded";
        state.signupErrors = [];
      })
      .addCase(userSignup.rejected, (state, action: any) => {
        state.user = undefined;
        state.jwttoken = undefined;
        state.loading = "failed";
        handleReduxReject(action, state, "signupErrors");
      });
  },
});
