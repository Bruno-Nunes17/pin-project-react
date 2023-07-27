import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CardContainer } from "../../containers/Card/Card";
import { ModalCreateFolder } from "../../containers/ModalCreateFolder/ModalCreateFolder";
import { ModalSavePin } from "../../containers/ModalSavePin/ModalSavePin";
import { Notification } from "../../components/Notification/Notification";
import { useAppContext } from "../../store/AppContext";
import { saveFoldersSuccessType, fetchPinsBySearchSuccessType } from "../../store/types";
import { fetchPinsBySearchAction } from "../../store/actions";
import { Pagination } from "../../components/Pagination/Pagination";
import { Spinner } from "../../components/Spinner/Spinner";


export const Search = () => {
  const { state, dispatch } = useAppContext();
  const [showFeedBack, setShowFeedBack] = useState(false);


  const pinsNormalized = state.pins.map(pin =>{ 
    return({
      ...pin,
      total: state.folders.filter(folder => {
        return  folder.pins.includes(pin.id)}).length
    })
  })


  useEffect(() =>{
    fetchPinsBySearchAction(dispatch, state.query, state.currentPage)
  },[dispatch, state.query, state.currentPage])

  useEffect(() => {
    if (state.type === saveFoldersSuccessType) {
      setShowFeedBack(true);
    }
  }, [state.type]);
  return (
    <div>
      <ModalSavePin open={state.mode === "savePin"} />
      <ModalCreateFolder open={state.mode === "createFolder"} />
      {showFeedBack && (
        <Notification
          message="Criado com Sucesso"
          onClose={() => {
            setShowFeedBack(false);
          }}
        />
      )}
      <Container fluid>
        <Row className="d-flex justify-content-center">
        {pinsNormalized.length > 0 && pinsNormalized.map((pin) => (
            <Col className=" mt-3 p-4" xs={12} md={3} key={pin.id}>
              <CardContainer
                {...pin}
              />
            </Col>
          ))}
        </Row>
        {state.type !== fetchPinsBySearchSuccessType &&  <Spinner/>}
      </Container>
      <Pagination/>
    </div>
  );
};
