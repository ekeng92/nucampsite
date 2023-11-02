export const validateUserLoginForm = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "Required";
  } else if (values.username.length < 6) {
    errors.username = "Must be at least 6 characters";
  }

  const passwordRegex = /(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])/;

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be at least 8 characters";
  } else if (!passwordRegex.test(values.password)) {
    errors.password =
      "Must contain at least 1: uppercase, lowercase, and number";
  }

  return errors;
};
