import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { PARTNERS } from "../../app/shared/oldData/PARTNERS";
import { baseUrl } from "../../app/shared/constants";
import { act } from "react-dom/test-utils";
import { mapImageUrl } from "../../utils/mapImageUrl";

export const fetchPartners = createAsyncThunk(
  "partners/fetchPartners",
  async () => {
    console.log("Fetch Partners");
    const response = await fetch(baseUrl + "partners");
    if (response.ok) {
      return mapImageUrl(await response.json());
    } else {
      return "Failed to fetch partners with response: " + response.status;
    }
  }
);

const initialState = {
  partnersArray: [],
  isLoading: true,
  errMsg: "",
};

const partnersSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPartners.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPartners.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.partnersArray = action.payload;
    },
    [fetchPartners.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error
        ? action.error.message
        : "Failed to fetch partners";
    },
  },
});

export const partnersReducer = partnersSlice.reducer;

export const selectAllPartners = (state) => {
  return state.partners.partnersArray;
};

export const selectFeaturedPartner = (state) => {
  return state.partners.partnersArray.find((partner) => partner.featured);
};
