import React from "react";
import { Col, Row } from "reactstrap";
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from "./campsitesSlice";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const CampsitesList = () => {
  const campsites = useSelector(selectAllCampsites);

  const isLoading = useSelector((state) => state.campsites.isLoading);
  const error = useSelector((state) => state.campsites.error);

  if (isLoading) {
    return (
      <Row>
        <Loading />
      </Row>
    );
  } else if (error) {
    return (
      <Row>
        <Error error={error} />
      </Row>
    );
  } else {
    return (
      <Row className="ms-auto">
        {campsites.map((campsite) => {
          return (
            <Col md="5" className="m-4" key={campsite.id}>
              <CampsiteCard campsite={campsite} />
            </Col>
          );
        })}
      </Row>
    );
  }
};

export default CampsitesList;
