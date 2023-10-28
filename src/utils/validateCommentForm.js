export const validateCommentForm = (values) => {
  const errors = {};

  if (!values.rating || values.rating === "Select...") {
    errors.rating = "Required";
  }
  if (values.author.length < 2) {
    errors.author = "Must be at least 2 characters";
  }
  if (values.author.length > 15) {
    errors.author = "Must be 15 characters or less";
  }
  if (!values.commentText || values.commentText.length < 1) {
    errors.commentText = "Required";
  }
  return errors;
};
