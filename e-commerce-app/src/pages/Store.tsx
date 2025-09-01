import { useState } from "react";
import PaginationButton from "../components/Pagination";
import { StoreItems } from "../components/StoreItems";
import storeItems from "../data/data.json";
import { Col, Row } from "react-bootstrap";

export function Store() {
  const [currentPage, setCurrentPage] = useState(1);
   const [item] = useState(storeItems);
  const recordsPerPage =4;
    const firstIndex = (currentPage - 1) * recordsPerPage;
  const lastIndex = currentPage * recordsPerPage;
  // const filteredProducts = item.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) || item.name.toUpperCase().includes(search.toUpperCase()));
  const records = item.slice(firstIndex, lastIndex);

  return <>
    <h1>Store</h1>
    <Row xs={1} md={2} lg={3} className="g-3">
      {records.map(item => (
         <Col> <StoreItems {...item} />
      </Col>
      ) )}
     
    </Row>
    <PaginationButton currentPage={currentPage} totalPages={Math.ceil(item.length / recordsPerPage)} setCurrentPage={setCurrentPage} />
  </>
} 