import Badge from "react-bootstrap/Badge";
import ListGroupBS from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { useAppContext } from "../../store/AppContext";
import { openPastaPageAction, } from "../../store/actions";




export const ListGroup = ({ items = [] }) => {
  const {dispatch } = useAppContext();
  const handleClick = (id) =>{
    dispatch(openPastaPageAction(id))

    }

  return (
    <ListGroupBS as="ul">
      {items.map((item, itemIndex) => (
        <Link className="nav-link" to='/pasta' key={itemIndex} onClick={()=> {handleClick(item.id)}}>
        <ListGroupBS.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">{item.title}</div>
          </div>
          <Badge bg="primary" pill>
            {item.total}
          </Badge>
        </ListGroupBS.Item>
        </Link>
      ))}
    </ListGroupBS>
  );
};
