import { Container, Row, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import { useParams } from "react-router-dom";
import CommentsList from "../features/comments/CommentsList";
import Subheader from "../components/Subheader";

const CampsiteDetailPage = () => {
  let { campsiteId } = useParams();

  const selectedCampsite = useSelector(selectCampsiteById(campsiteId));
  return (
    <Container>
      <Subheader current={selectedCampsite.name} detail={true} />
      <Row>
        <CampsiteDetail campsite={selectedCampsite} />
        <CommentsList campsiteId={campsiteId} />
      </Row>
    </Container>
  );
};

export default CampsiteDetailPage;
