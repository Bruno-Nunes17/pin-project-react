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
    fetchPinsByIdAction(dispatch, renderPins, renderPins.length)
  },[dispatch, renderPins])
  console.log(state);
  return (
    <Container>
      <Row>
        <Col className=" mt-3 p-3
        " xs={12} md={3}>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className=" mt-3 p-3
        " xs={12} md={3}>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className=" mt-3 p-3" xs={12} md={3}>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col className=" mt-3 p-3
        " xs={12} md={3}>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3573351/pexels-photo-3573351.png?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
