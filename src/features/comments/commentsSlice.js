import { COMMENTS } from "../../app/shared/COMMENTS";

export const selectCommentsByCampsiteId = (campsiteId) => {
  console.log("selectCommentsByCampsiteId", campsiteId, COMMENTS);
  return COMMENTS.filter(
    (comment) => comment.campsiteId === parseInt(campsiteId)
  );
};
