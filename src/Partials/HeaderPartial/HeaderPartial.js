import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import { openPastaSearchAction, fetchPinsAction, paginationAction } from "../../store/actions";
import { useAppContext } from "../../store/AppContext";

export const HeaderPartial = () => {
const {state, dispatch} = useAppContext();

const [searchTerm, setSearchTerm] = useState('');

const handleClick = () =>{
  dispatch(openPastaSearchAction(searchTerm));
  paginationAction(dispatch, 1);
}
const handleInputChange = (e) => {
  e.preventDefault();
  setSearchTerm(e.target.value);
};

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Random Pins</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/" onClick={() => {fetchPinsAction(dispatch, state.currentPage)
            paginationAction(dispatch, 1)
            }}>
              Home
            </Link>
            <Link className="nav-link" to="/minhas-pastas">
              Minhas Pastas
            </Link>
          </Nav>
          <Form className="d-flex justify-content-center align-items-center">
            <Form.Control
              type="search"
              onChange={handleInputChange}
              placeholder="Ex: Natureza"
              className="me-2"
              aria-label="Search"
            />
            <Link className="nav-link" to="/search">
            <Button type="submit" variant="primary" className="d-flex justify-content-center align-items-center" onClick={ () => handleClick()}><BsSearch/></Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
