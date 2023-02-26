// import React from "react";
// import Typography from "@material-ui/core/Typography";
// import Slider from "@material-ui/core/Slider";

// export const PriceFilter = () => {
//   // Our States
//   const [value, setValue] = React.useState([2, 10]);

//   // Changing State when volume increases/decreases
//   const rangeSelector = (event, newValue) => {
//     setValue(newValue);
//     console.log(newValue);
//   };

//   return (
//     <div
//       style={{
//         margin: "auto",
//         display: "block",
//         width: "fit-content",
//       }}
//     >
//       <h3>How to create Price Range Selector in ReactJS?</h3>
//       <Typography id="range-slider" gutterBottom>
//         Select Price Range:
//       </Typography>
//       <Slider value={value} onChange={rangeSelector} valueLabelDisplay="auto" />
//       Your range of Price is between {value[0]} /- and {value[1]} /-
//     </div>
//   );
// };
