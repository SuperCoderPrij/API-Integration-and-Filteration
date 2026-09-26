import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../config/api";
import { toast } from "react-toastify";

export const loginUserAction = createAsyncThunk(
  "/auth/login",
  async (credentials, thunkApi) => {
    try {
      console.log("thunk action triggered...");
      let res = await api.post("/auth/login", credentials);
      localStorage.setItem("accessToken", res.data.accessToken);
      toast.success("User logged-in");
      return res.data;
    } catch (error) {
      toast.invalid("Invalid credentials!");
      return thunkApi.rejectWithValue("login failed");
    }
  },
);

export const hydrateUserAction = createAsyncThunk(
  "/auth/hydrate",
  async (_, thunkApi) => {
    let accessToken = localStorage.getItem("accessToken");
    try {
      let res = await api.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return res.data;
    } catch (error) {
      toast.invalid("User not logged in");
      return thunkApi.rejectWithValue("User not logged in");
    }
  },
);
