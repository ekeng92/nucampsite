import { createSlice } from "@reduxjs/toolkit";
// import { CAMPSITES } from "../../app/shared/oldData/CAMPSITES";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/constants";
import { mapImageUrl } from "../../utils/mapImageUrl";

export const fetchCampsites = createAsyncThunk(
  "campsites/fetchCampsites",
  async () => {
    console.log("Fetch Campsite Thunk");
    const response = await fetch(baseUrl + "campsites");
    if (response.ok) {
      return await response.json();
    }
    return Promise.reject(
      "Failed to fetch campsites with response: " + response.status
    );
  }
);
const initialState = {
  campsitesArray: [],
  isLoading: true,
  error: "",
};

const campsitesSlice = createSlice({
  name: "campsites",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchCampsites.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchCampsites.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = "";
      state.campsitesArray = mapImageUrl(action.payload);
    },
    [fetchCampsites.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error
        ? action.error.message
        : "Error in fetch campsites";
    },
  },
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectCampsiteById = (id) => (state) => {
  return state.campsites.campsitesArray.find(
    (campsite) => campsite.id === parseInt(id)
  );
};

export const selectAllCampsites = (state) => {
  return state.campsites.campsitesArray;
};

export const selectRandomCampsite = (state) => {
  return state.campsites.campsitesArray[
    Math.floor(Math.random() * state.campsites.campsitesArray.length)
  ];
};

export const selectFeaturedCampsite = (state) => {
  return state.campsites.campsitesArray.find(
    (campsite) => campsite.featured === true
  );
};
