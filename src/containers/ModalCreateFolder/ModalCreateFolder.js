import { useState, useEffect } from "react";
import { Modal } from "../../components/Modal/Modal";
import Form from "react-bootstrap/Form";
import { useAppContext } from "../../store/AppContext";
import { closeModalsAction, saveFoldersAction } from "../../store/actions";
import { saveFoldersInitType, saveFoldersSuccessType } from "../../store/types";

export const ModalCreateFolder = ({ open }) => {
  const { state, dispatch } = useAppContext();
  const [folderName, setFolderName] = useState("");
  const handleClose = () => {
    dispatch(closeModalsAction());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveFoldersAction(dispatch, folderName, state.activePinId);
  };
  const handleChange = (e) => {
    setFolderName(e.target.value);
  };

  useEffect(() => {
    if(state.type === saveFoldersSuccessType){
      handleClose()
    }
  },);

  return (
    <Modal
      open={open}
      title="Criar Pasta"
      onHide={handleClose}
      controls={[
        {
          label: "Criar e Salvar",
          loadinglabel: "Criando",
          variant: "primary",
          loading: state.type === saveFoldersInitType,
          type: "submit",
          form: "form-criar-pasta",
        },
      ]}
    >
      <Form onSubmit={handleSubmit} id="form-criar-pasta">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nome da Pasta</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex: Matematica"
            value={folderName}
            onChange={handleChange}
          />
        </Form.Group>
      </Form>
    </Modal>
  );
};
