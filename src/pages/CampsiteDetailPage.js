import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Container, Row } from "reactstrap";
import Subheader from "../components/Subheader";
import CampsiteDetail from "../features/campsites/CampsiteDetail";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import CommentsList from "../features/comments/CommentsList";
import Loading from "../components/Loading";
import Error from "../components/Error";

const CampsiteDetailPage = () => {
  let { campsiteId } = useParams();

  const errMsg = useSelector((state) => state.campsites.error);

  const selectedCampsite = useSelector(selectCampsiteById(campsiteId));

  let content = <Loading />;
  if (selectedCampsite) {
    content = (
      <>
        <CampsiteDetail campsite={selectedCampsite} />
        <CommentsList campsiteId={campsiteId} />
      </>
    );
  } else if (errMsg) {
    content = <Error errMsg={errMsg} />;
  }

  return (
    <Container>
      {selectedCampsite && (
        <Subheader current={selectedCampsite.name} detail={true} />
      )}
      <Row>{content}</Row>
    </Container>
  );
};

export default CampsiteDetailPage;
