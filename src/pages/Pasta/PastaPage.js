import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAppContext } from "../../store/AppContext";
import { useEffect } from "react";
import { fetchPinsByIdAction, removePinAction } from "../../store/actions";
import { Card } from "../../components/Card/Card";
import { BsFillTrash3Fill } from "react-icons/bs";

export const Pasta = () => {
  const { state, dispatch } = useAppContext();
  const folderIndex = state.folders.findIndex(function (folder) {
    return folder.id === state.activeFolderId;
  });
  const renderPins = state.folders[folderIndex].pins;
  useEffect(() =>{
    fetchPinsByIdAction(dispatch, renderPins)
  },[dispatch, renderPins])

  const handleClick = (id)=>{
    removePinAction(dispatch, id, state.activeFolderId)
  }
  return (
    <Container>
      <Row>
        {state.savedPins.map((pin, pinIndex) =>(
          <Col className=" mt-3 p-3
        " xs={12} md={3} key={pinIndex}>
          <Card {...pin} variant='danger' buttonTitle={<BsFillTrash3Fill/>} onClick={() => handleClick(pin.id)}/>
        </Col>
        ))}
      </Row>
    </Container>
  );
};
