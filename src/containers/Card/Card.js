import { Card } from "../../components/Card/Card";
import { useAppContext } from "../../store/AppContext";
import { openModalSavePinAction } from "../../store/actions";

export const CardContainer = (props) => {
  const { dispatch } = useAppContext();
  const handleClick = (id) => {
    dispatch(openModalSavePinAction(id));
  };
  return <Card {...props} onClick={handleClick} />;
};
