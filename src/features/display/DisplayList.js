import React from "react";
import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";

const DisplayList = () => {
  const items = [selectFeaturedCampsite(), selectFeaturedPromotion()];

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          <Col className="m-1" md key={idx}>
            <DisplayCard item={item} key={idx}></DisplayCard>
          </Col>
        );
      })}
    </Row>
  );
};

export default DisplayList;
