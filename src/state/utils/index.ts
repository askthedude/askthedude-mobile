export const handleAxiosError = (err: any, thunkAPI: any) => {
  if (!err.response) {
    throw err;
  }
  return thunkAPI.rejectWithValue({
    status: err.response.status,
    data: err.response.data,
  });
};

export const handleReduxReject = (
  action: any,
  state: any,
  errorKey: string
) => {
  if (action.payload.status == 400) {
    state[errorKey] = action.payload.data["detail"];
  } else if (action.payload.status == 503 || action.payload.status == 500) {
    state[errorKey] = [
      "Problem arised on server, please try again in few minutes.",
    ];
  }
};
