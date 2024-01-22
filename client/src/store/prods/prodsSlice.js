import { createSlice } from "@reduxjs/toolkit";
import { AddNew, DeleteById, GetAll, GetById } from "./api_actions";

const initialState = {
  data: [],
  loading: false,
  error: null,
  currentData: null,
};

const prodsSlice = createSlice({
  name: "prodsSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetAll.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(GetAll.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetAll.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(GetById.fulfilled, (state, action) => {
        state.currentData = action.payload;
        state.loading = false;
      })
      .addCase(GetById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(GetById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(DeleteById.fulfilled, (state, action) => {
        state.data = action.payload;
        
        state.loading = false;
      })
      .addCase(DeleteById.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(DeleteById.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(AddNew.fulfilled, (state, action) => {
        state.data = [...state.data, action.payload];
        state.loading = false;
      })
      .addCase(AddNew.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(AddNew.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});


export const prodsReducer = prodsSlice.reducer