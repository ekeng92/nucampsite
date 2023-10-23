import { Container, Row, Col } from "reactstrap";
import CampsitesList from "../features/campsites/CampsitesList";
import { selectCampsiteById } from "../features/campsites/campsitesSlice";
import { useHistory } from "react";
import Subheader from "../components/Subheader";

const CampsitesDirectoryPage = () => {
  return (
    <Container>
      <Subheader current="Directory" />
      <CampsitesList />
    </Container>
  );
};

export default CampsitesDirectoryPage;
