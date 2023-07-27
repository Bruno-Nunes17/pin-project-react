import SpinnerBS from 'react-bootstrap/Spinner';
import './index.css'
import { Container } from 'react-bootstrap';

export const Spinner = ({onHide}) => {
  return (
    <Container className='spinner'>
    <SpinnerBS animation="border" role="status" hidden={onHide}>
      <span className="visually-hidden">Loading...</span>
    </SpinnerBS>
    </Container>
  );
}
