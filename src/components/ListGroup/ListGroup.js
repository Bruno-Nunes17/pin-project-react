import Badge from "react-bootstrap/Badge";
import ListGroupBS from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { useAppContext } from "../../store/AppContext";
import { openPastaPageAction, removeFolderAction } from "../../store/actions";
import Button from "react-bootstrap/Button";
import { BsFillTrash3Fill } from "react-icons/bs";

export const ListGroup = ({ items = [] }) => {
  const { dispatch } = useAppContext();
  const handleClick = (id) => {
    dispatch(openPastaPageAction(id));
  };
  const handleDelete = (id) => {
    removeFolderAction(dispatch, id);
  };

  return (
    <ListGroupBS as="ul">
      {items.map((item, itemIndex) => (
        <ListGroupBS.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
          key={itemIndex}
        >
          <Link
            className="nav-link fw-bold"
            to="/pasta"
            key={itemIndex}
            onClick={() => {
              handleClick(item.id);
            }}
          >
            {item.title}
          </Link>
          <Button variant="danger" onClick={() => handleDelete(item.id)}>
            <BsFillTrash3Fill /> <Badge bg="secondary">{item.total}</Badge>
          </Button>
        </ListGroupBS.Item>
      ))}
    </ListGroupBS>
  );
};
