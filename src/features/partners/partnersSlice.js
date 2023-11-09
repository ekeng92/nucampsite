import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/constants";
import { mapImageUrl } from "../../utils/mapImageUrl";

export const fetchPartners = createAsyncThunk(
  "partners/fetchPartners",
  async () => {
    const response = await fetch(baseUrl + "partners");
    if (response.ok) {
      return await response.json();
    } else {
      return Promise.reject(
        "Failed to fetch partners with response:" + response.status
      );
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
      state.errMsg = "";
      state.partnersArray = mapImageUrl(action.payload);
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
  return {
    featuredItem: state.partners.partnersArray.find(
      (partner) => partner.featured
    ),
    isLoading: state.partners.isLoading,
    errMsg: state.partners.errMsg,
  };
};
