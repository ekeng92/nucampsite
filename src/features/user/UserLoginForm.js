import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser, setCurrentUser } from "./userSlice";
import defaultAvatar from "../../app/assets/img/unicorn.png";
import {
  Button,
  FormGroup,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { validateUserLoginForm } from "../../utils/validateUserLoginForm";

const UserLoginForm = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleLogin = (values) => {
    const loginUser = {
      id: Date.now(),
      avatar: defaultAvatar,
      username: values.username,
      password: values.password,
    };
    dispatch(setCurrentUser(loginUser));
    setLoginModalOpen(false);
  };

  return (
    <>
      <span className="navbar-text ml-auto">
        {currentUser ? (
          <div style={{ width: "4rem", height: "4rem" }}>
            <img
              src={defaultAvatar}
              alt="avatar"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ) : (
          <Button
            outline
            onClick={() => setLoginModalOpen(true)}
            style={{ color: "white", border: "1px solid white" }}
          >
            <i className="fa fa-sign-in fa-lg" /> Login
          </Button>
        )}
      </span>
      <Modal isOpen={loginModalOpen}>
        <ModalHeader toggle={() => setLoginModalOpen(false)}>Login</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={handleLogin}
            validate={validateUserLoginForm}
          >
            <Form>
              <FormGroup>
                <Label id="username" htmlFor="username">
                  Username{" "}
                </Label>
                <Field
                  id="username"
                  type="username"
                  name="username"
                  placeholder="Username"
                  className="form-control"
                ></Field>
                <ErrorMessage name="username">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label id="password" htmlFor="password">
                  Password
                </Label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  placeholder="password"
                  className="form-control"
                ></Field>
                <ErrorMessage name="password">
                  {(msg) => <div className="text-danger">{msg}</div>}
                </ErrorMessage>
              </FormGroup>
              <Button type="submit" color="primary">
                Login
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default UserLoginForm;
