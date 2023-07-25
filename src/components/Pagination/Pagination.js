import PaginationBS from "react-bootstrap/Pagination";

export const Pagination = () => {
  return (
    <PaginationBS className="d-flex justify-content-center">
      <PaginationBS.Prev />
      <PaginationBS.Item>{1}</PaginationBS.Item>
      <PaginationBS.Next />
    </PaginationBS>
  );
};
