import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  FormGroup,
  Label,
} from "reactstrap";
import { useState } from "react";
import { Formik, Field, Form } from "formik";

const CommentForm = ({ campsiteId }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleSubmit = (values) => {
    console.log("submit");
    const comment = {
      campsiteId: parseInt(campsiteId),
      rating: values.rating,
      author: values.author,
      text: values.commentText,
    };
    console.log("JSON-Payload:", JSON.stringify(comment));
    setModalOpen(false);
  };

  return (
    <>
      <Button outline onClick={() => setModalOpen(true)}>
        <i className="fa fa-pencil fa-lg" />
        Add Comment
      </Button>
      <Modal isOpen={modalOpen}>
        <ModalHeader toggle={() => setModalOpen(false)}>
          Add Comment
        </ModalHeader>
        <ModalBody>
          <Row>
            <Formik
              initialValues={{ rating: undefined, author: "", commentText: "" }}
              onSubmit={handleSubmit}
            >
              <Form>
                <FormGroup>
                  <Label htmlFor="rating">Rating</Label>
                  <Field
                    id="rating"
                    name="rating"
                    as="select"
                    className="form-control"
                  >
                    <option>Select...</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Field>
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="author">Your Name</Label>
                  <Field
                    id="author"
                    name="author"
                    placeholder="Your Name"
                    className="form-control"
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="commentText">Comment</Label>
                  <Field
                    id="commentText"
                    name="commentText"
                    as="textarea"
                    rows="12"
                    className="form-control"
                  />
                </FormGroup>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Form>
            </Formik>
          </Row>
        </ModalBody>
      </Modal>
    </>
  );
};

export default CommentForm;
