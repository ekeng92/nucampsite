import { Container, Row, Col } from "reactstrap";
import CampsitesList from "../features/campsites/CampsitesList";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import { useHistory } from "react";

const CampsitesDirectoryPage = () => {
  return (
    <Container>
      <CampsitesList />
    </Container>
  );
};

export default CampsitesDirectoryPage;
