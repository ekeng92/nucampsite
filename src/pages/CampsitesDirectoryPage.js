import { Container } from "reactstrap";
import Subheader from "../components/Subheader";
import CampsitesList from "../features/campsites/CampsitesList";

const CampsitesDirectoryPage = () => {
  return (
    <Container>
      <Subheader current="Directory" />
      <CampsitesList />
    </Container>
  );
};

export default CampsitesDirectoryPage;
