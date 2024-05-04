// import React, { FC } from "react";
// import ReactPaginate, { ReactPaginateProps } from "react-paginate";
// import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
// import { motion } from "framer-motion";

// interface PaginationButtonProps {
//   setCurrentPage: (page: number) => void;
//   currentPage: number;
//   totalPages: number;
// }

// const PaginationButton: FC<PaginationButtonProps> = ({ setCurrentPage, currentPage, totalPages }) => {
//   const handlePageClick: ReactPaginateProps["onPageChange"] = ({ selected }) => {
//     setCurrentPage(selected + 1);
//   };

//   const paginationVariants = {
//     hidden: {
//       opacity: 0,
//       y: 100,
//     },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 260,
//         damping: 20,
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <motion.div variants={paginationVariants} initial="hidden" animate="visible">
//       <ReactPaginate
//         breakLabel={<span className="mr-4">...</span>}
//         nextLabel={
//           <button className="btn btn-light w-10 h-10 d-flex align-items-center justify-content-center rounded-md mr-4"><BsChevronRight/></button>
//         }
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={totalPages}
//         previousLabel={<button className="btn btn-light w-10 h-10 d-flex align-items-center justify-content-center rounded-md mr-4"><BsChevronLeft/></button>}
//         containerClassName="d-flex align-items-center justify-content-center mt-8 mb-4"
//         pageClassName="btn btn-light block border border-solid border-light rounded-md mr-4"
//         activeClassName="bg-purple text-white"
//       />
//     </motion.div>
//   );
// };

// export default PaginationButton;


// ====================

import { FC } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { motion } from "framer-motion";

interface PaginationButtonProps {
  setCurrentPage: (page: number) => void;
  currentPage: number;
  totalPages: number;
}

const PaginationButton: FC<PaginationButtonProps> = ({ setCurrentPage, totalPages }) => {
  const handlePageClick: ReactPaginateProps["onPageChange"] = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const paginationVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 10,
      },
    },
  };

  return (
    <motion.div variants={paginationVariants} initial="hidden" animate="visible" className="d-flex justify-content-center mt-4">
      <ReactPaginate
        breakLabel={<span className="mx-2">...</span>}
        nextLabel={<BsChevronRight className="mx-2" />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={totalPages}
        previousLabel={<BsChevronLeft className="mx-2" />}
        containerClassName="pagination"
        activeClassName="active"
        pageLinkClassName="page-link"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        disabledClassName="disabled"
      />
    </motion.div>
  );
};


export default PaginationButton;
