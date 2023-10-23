import { Container, Row, Col } from "reactstrap";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import { useParams } from "react-router-dom";
import CommentsList from "../features/comments/CommentsList";

const CampsiteDetailPage = () => {
  let { campsiteId } = useParams();

  const selectedCampsite = selectCampsiteById(campsiteId);
  return (
    <Container>
      <Row>
        <CampsiteDetail campsite={selectedCampsite} />
        <CommentsList campsiteId={campsiteId} />
      </Row>
    </Container>
  );
};

export default CampsiteDetailPage;
