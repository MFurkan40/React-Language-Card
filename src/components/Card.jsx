import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Language from "./Language";
import { data } from "../helpers/data";

const Card = () => {
  return (
    <Container
      className="rounded-4 mt-4 p-4 shadow-lg"
      style={{ background: "#800326bb" }}
    >
      <h1 className="text-white my-4">Languages</h1>
      <Row className="g-4 justify-content-center">
        {data.map((lang, index) => {
          return (
            <Col sm={6} md={4} lg={3} key={index}>
              <Language {...lang} />
              {/* <Language lang={lang} />; */}
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Card;
