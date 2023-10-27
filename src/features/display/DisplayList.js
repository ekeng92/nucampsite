import React from "react";
import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";
import DisplayCardAnimated from "./DisplayCardAnimated";

const DisplayList = () => {
  const items = [
    selectFeaturedCampsite(),
    selectFeaturedPromotion(),
    selectFeaturedPartner(),
  ];

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          item && (
            <Col className="m-1" md key={idx}>
              <DisplayCardAnimated item={item} key={idx}></DisplayCardAnimated>
            </Col>
          )
        );
      })}
    </Row>
  );
};

export default DisplayList;
