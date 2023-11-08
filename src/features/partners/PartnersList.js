import Partner from "./Partner";
import { Col } from "reactstrap";
import { selectAllPartners } from "./partnersSlice";
import { useSelector } from "react-redux";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const PartnersList = () => {
  const partners = useSelector(selectAllPartners);

  const isLoading = useSelector((state) => state.partners.isLoading);
  const errMsg = useSelector((state) => state.partners.errMsg);

  return isLoading ? (
    <Loading />
  ) : errMsg ? (
    <Error errMsg={errMsg} />
  ) : (
    <>
      <Col className="mt-4">
        {partners.length > 0 &&
          partners.map((p) => (
            <div className="d-flex mb-5" key={p.id}>
              <Partner partner={p} />
            </div>
          ))}
      </Col>
    </>
  );
};

export default PartnersList;
