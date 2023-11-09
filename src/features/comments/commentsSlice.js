import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { COMMENTS } from "../../app/shared/oldData/COMMENTS";
import { baseUrl } from "../../app/shared/constants";
import { mapImageUrl } from "../../utils/mapImageUrl";

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const response = await fetch(baseUrl + "commens");
    if (response.ok) {
      return await response.json();
    }
    return Promise.reject(
      `Failed to fetch comments with response: ${response.status}`
    );
  }
);

const initialState = {
  commentsArray: [],
  isLoading: true,
  errMsg: "",
};

const commentsSlice = createSlice({
  name: "comments",
  initialState: initialState,
  reducers: {
    addComment: (state, action) => {
      const comment = {
        id: state.commentsArray.length + 1,
        ...action.payload,
      };
      state.commentsArray.push(comment);
    },
  },
  extraReducers: {
    [fetchComments.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.commentsArray = mapImageUrl(action.payload);
      state.errMsg = "";
    },
    [fetchComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error
        ? action.error.message
        : "Failed to fetch comments";
    },
  },
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByCampsiteId = (campsiteId) => (state) => {
  return state.comments.commentsArray.filter(
    (comment) => comment.campsiteId === parseInt(campsiteId)
  );
};
