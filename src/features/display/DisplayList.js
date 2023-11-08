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

  const isLoading = useSelector((state) => state.campsites.isLoading);
  const error = useSelector((state) => state.campsites.error);

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }

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
