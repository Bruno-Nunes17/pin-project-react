import CardBS from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
export const Card = ({ id, imagen, title, total, onClick }) => {
  return (
    <CardBS>
      <CardBS.Img src={imagen} alt="Card image" />
      <CardBS.ImgOverlay>
        <Button variant="primary" onClick={() => onClick(id)}>
          Salvar <Badge bg="secondary">{total}</Badge>
        </Button>
      </CardBS.ImgOverlay>
      <CardBS.Body>
        <CardBS.Title>{title ? title : "Sem titulo"}</CardBS.Title>
      </CardBS.Body>
    </CardBS>
  );
};
