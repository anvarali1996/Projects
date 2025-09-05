// import { useState } from "react";
// import PaginationButton from "../components/Pagination";
// import { StoreItems } from "../components/StoreItems";
// import storeItems from "../data/data.json";
// import { Col, Row } from "react-bootstrap";

// export function Store() {
//   const [currentPage, setCurrentPage] = useState(1);
//    const [item] = useState(storeItems);
//   const recordsPerPage =4;
//     const firstIndex = (currentPage - 1) * recordsPerPage;
//   const lastIndex = currentPage * recordsPerPage;
//   // const filteredProducts = item.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) || item.name.toUpperCase().includes(search.toUpperCase()));
//   const records = item.slice(firstIndex, lastIndex);

//   return <>
//     <h1>Store</h1>
//     <Row xs={1} md={2} lg={3} className="g-3">
//       {records.map(item => (
//          <Col> <StoreItems {...item} />
//       </Col>
//       ) )}
     
//     </Row>
//     <PaginationButton currentPage={currentPage} totalPages={Math.ceil(item.length / recordsPerPage)} setCurrentPage={setCurrentPage} />
//   </>
// } 

import { useState, useEffect } from "react";
import PaginationButton from "../components/Pagination";
import { StoreItems } from "../components/StoreItems";
import storeItems from "../data/data.json";
import { Col, Row } from "react-bootstrap";
import Loading from "../components/Loading";

export function Store() {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const recordsPerPage = 4;
  const firstIndex = (currentPage - 1) * recordsPerPage;
  const lastIndex = currentPage * recordsPerPage;

  const records = storeItems.slice(firstIndex, lastIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setLoading(true);
    setCurrentPage(page);
  };

  // Wait for all images on current page to load before hiding spinner
  useEffect(() => {
  if (records.length === 0) {
    setLoading(false);
    return;
  }

  let loadedCount = 0;

  records.forEach((item) => {
    const img = new Image();
    img.src = item.imgUrl;
    img.onload = () => {
      loadedCount += 1;
      if (loadedCount === records.length) setLoading(false);
    };
    img.onerror = () => {
      loadedCount += 1;
      if (loadedCount === records.length) setLoading(false);
    };
  });
}, [records]);


  return (
    <>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {loading ? (
          <div className="text-center mt-5 w-100">
            <Loading />
          </div>
        ) : (
          records.map((item) => (
            <Col key={item.id}>
              <StoreItems {...item} />
            </Col>
          ))
        )}
      </Row>
      <PaginationButton
        currentPage={currentPage}
        totalPages={Math.ceil(storeItems.length / recordsPerPage)}
        setCurrentPage={handlePageChange}
      />
    </>
  );
}
