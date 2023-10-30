import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Subheader from "../components/Subheader";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import CommentsList from "../features/comments/CommentsList";

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
