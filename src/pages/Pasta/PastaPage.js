import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useAppContext } from "../../store/AppContext";
import { useEffect } from "react";
import { fetchPinsByIdAction } from "../../store/actions";

export const Pasta = () => {
  const { state, dispatch } = useAppContext();
  const folderIndex = state.folders.findIndex(function (folder) {
    return folder.id === state.activeFolderId;
  });
  const renderPins = state.folders[folderIndex].pins;
  useEffect(() =>{
    fetchPinsByIdAction(dispatch, renderPins)
  },[dispatch, renderPins])
  return (
    <Container>
      <Row>
        {state.savedPins.map((pins, pinIndex) =>(
          <Col className=" mt-3 p-3
        " xs={12} md={3} key={pinIndex}>
          <Card>
            <Card.Img
              variant="top"
              src={pins.imagen}
            />
            <Card.Body>
              <Card.Title>{pins.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        ))}
      </Row>
    </Container>
  );
};
