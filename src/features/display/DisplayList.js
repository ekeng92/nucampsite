import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import DisplayCardAnimated from "./DisplayCardAnimated";

const DisplayList = () => {
  const items = [
    useSelector(selectFeaturedCampsite),
    selectFeaturedPromotion(),
    useSelector(selectFeaturedPartner),
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
