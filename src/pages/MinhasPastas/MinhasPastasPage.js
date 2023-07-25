import Container from "react-bootstrap/Container";
import { ListGroup } from "../../components/ListGroup/ListGroup";
import { useAppContext } from "../../store/AppContext";

export const MinhasPastasPage = () => {

  const { state } = useAppContext();

  const adapterItems = (items) => {
    items = state.folders;
    return items.map((item) => ({
      id: item.id,
      title: item.name,
      total: item.pins.length,
    }));
  };
  return (
    <Container>
      <ListGroup items={adapterItems()} />
    </Container>
  );
};
