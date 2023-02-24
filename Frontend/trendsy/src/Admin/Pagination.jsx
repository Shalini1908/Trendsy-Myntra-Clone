// import { Button } from "@chakra-ui/react";

// function Pagination({current,total,onChange}) {
//     const prev = <Button id="prev-page"
//     disabled={current===1}
//     onClick={()=>onChange(current-1)}
//     >PREV
//     </Button>;
//     const currentPage = <Button id="current-page">{current}</Button>;
//     const next = <Button id="next-page"
//      disabled={current===total}
//      onClick={()=>onChange(current+1)}>NEXT</Button>;
//     const totalPagesElem = (
//       <div>
//         Total Pages: <b id="total-pages">{total}</b>{" "}
//       </div>
//     );
//     return (
//       <div id="pagination-container">
//         {prev}
//         {currentPage}
//         {next}
//         {totalPagesElem}
//       </div>
//     );
//   }
  
//   export default Pagination;