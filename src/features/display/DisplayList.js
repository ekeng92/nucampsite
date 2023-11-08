import { useSelector } from "react-redux";
import { Col, Row } from "reactstrap";
import { selectFeaturedCampsite } from "../campsites/campsitesSlice";
import { selectFeaturedPartner } from "../partners/partnersSlice";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
import DisplayCardAnimated from "./DisplayCardAnimated";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const DisplayList = () => {
  const items = [
    useSelector(selectFeaturedCampsite),
    useSelector(selectFeaturedPromotion),
    useSelector(selectFeaturedPartner),
  ];

  return (
    <Row>
      {items.map((item, idx) => {
        const { featuredItem, isLoading, errMsg } = item;
        if (isLoading) {
          return <Loading key={idx} />;
        } else if (errMsg) {
          return <Error errMsg={errMsg} key={idx} />;
        } else {
          return (
            featuredItem && (
              <Col className="m-1" md key={idx}>
                <DisplayCardAnimated
                  item={item.featuredItem}
                  key={idx}
                ></DisplayCardAnimated>
              </Col>
            )
          );
        }
      })}
    </Row>
  );
};

export default DisplayList;
