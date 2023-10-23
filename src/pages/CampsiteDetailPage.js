import { Container, Row, Col } from "reactstrap";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import { useParams } from "react-router-dom";

const CampsiteDetailPage = () => {
  let {campsiteId} = useParams();

  const selectedCampsite = selectCampsiteById(campsiteId);
  return (
    <Container>
      <Row>
        <Col sm="7" md="5">
          <CampsiteDetail campsite={selectedCampsite} />
        </Col>
      </Row>
    </Container>
  );
};

export default CampsiteDetailPage;
