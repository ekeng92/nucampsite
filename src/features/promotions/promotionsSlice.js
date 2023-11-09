import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/constants";
import { mapImageUrl } from "../../utils/mapImageUrl";
// import { PROMOTIONS } from "../../app/shared/oldData/PROMOTIONS";

export const fetchPromotions = createAsyncThunk(
  "promotions/fetchPromotions",
  async () => {
    const response = await fetch(baseUrl + "promotions");
    if (response.ok) {
      return await response.json();
    } else {
      return Promise.reject(
        "Failed to fetch promotions with response: " + response.status
      );
    }
  }
);

const initialState = {
  promotionsArray: [],
  isLoading: true,
  errMsg: "",
};

const promotionsSlice = createSlice({
  name: "promotions",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPromotions.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchPromotions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.errMsg = "";
      state.promotionsArray = mapImageUrl(action.payload);
    },
    [fetchPromotions.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error
        ? action.error.message
        : "Failed to fetch promotions";
    },
  },
});

export const promotionsReducer = promotionsSlice.reducer;

export const selectFeaturedPromotion = (state) => {
  return {
    featuredItem: state.promotions.promotionsArray.find(
      (promo) => promo.featured
    ),
    isLoading: state.promotions.isLoading,
    errMsg: state.promotions.errMsg,
  };
};
 