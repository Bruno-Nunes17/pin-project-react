import { useEffect, useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useAppContext } from "../../store/AppContext";
import {
  closeModalsAction,
  fetchFoldersAction,
  openModalCreateFolderAction,
  savePinInFolderAction,
} from "../../store/actions";

export const ModalSavePin = ({ open }) => {
  const [itensLoading, setItensLoading] = useState({});
  const { state, dispatch } = useAppContext();
  const handleClose = () => {
    dispatch(closeModalsAction());
  };
  const handleClick = async (folderId, folderName) => {
    setItensLoading((prevstate) => {
      return {
        ...prevstate,
        [folderId]: true,
      };
    });
    await savePinInFolderAction(dispatch, state.activePinId, folderId, folderName);
    setItensLoading((prevstate) => {
      return {
        ...prevstate,
        [folderId]: false,
      };
    });
  };
  const handleClickCreateFolders = () => {
    dispatch(openModalCreateFolderAction());
  };

  const foldersNormalized = state.folders.map((folder) => {
    return {
      ...folder,
      saved: folder.pins.includes(state.activePinId),
    };
  });

  useEffect(() => {
    fetchFoldersAction(dispatch);
  }, [dispatch]);
  return (
    <Modal
      title="Salvar Pin"
      open={open}
      onHide={handleClose}
      controls={[
        {
          label: "Criar Pasta",
          variant: "primary",
          loading: false,
          loadinglabel: "criando",
          onClick: handleClickCreateFolders,
        },
      ]}
    >
      <ListGroup variant="flush">
        {foldersNormalized.map((folder, folderindex) => (
          <ListGroup.Item key={folderindex}>
            <Row>
              <Col xs={8}>{folder.name}</Col>
              <Col xs={4} className="text-end">
                <Button
                  onClick={() => {
                    handleClick(folder.id, folder.name);
                  }}
                  label={folder.saved ? "Salvo" : "Salvar"}
                  loadinglabel="Salvando"
                  variant={folder.saved ? "secondary" : "primary"}
                  disabled={folder.saved}
                  loading={itensLoading[folder.id]}
                />
              </Col>
            </Row>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Modal>
  );
};
