import PaginationBS from "react-bootstrap/Pagination";
import { useAppContext } from "../../store/AppContext";
import { paginationAction } from "../../store/actions";



export const Pagination = () => {
  const { state, dispatch } = useAppContext();
  const handleClick = (number) =>{
    const page = state.currentPage + number;
    page <= 0 ? paginationAction(dispatch, 1) : paginationAction(dispatch, page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  const handleSkip = (number) => {
    paginationAction(dispatch, number)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <PaginationBS className="d-flex justify-content-center">
      <PaginationBS.First onClick={() => handleSkip(1)} />
      <PaginationBS.Prev onClick={() => handleClick(-1)}/>
      <PaginationBS.Item>{state.currentPage}</PaginationBS.Item>
      <PaginationBS.Next onClick={() => handleClick(1)} />
      <PaginationBS.Last onClick={() => handleSkip(500)} />
    </PaginationBS>
  );
};
