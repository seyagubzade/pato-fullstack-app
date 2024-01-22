import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = `http://localhost:8080/pato`;


export const GetAll = createAsyncThunk("GetAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const GetById = createAsyncThunk("GetById", async (id, thunkAPI) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const DeleteById = createAsyncThunk(
  "DeleteById",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`${BASE_URL}/${id}`);
      console.log("Delete resposne>>",response.data)
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
export const AddNew = createAsyncThunk(
  "AddNew",
  async ({ name, desc, price, image }, thunkAPI) => {
    try {
      const response = await axios.post(BASE_URL, { name, desc, price, image });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
