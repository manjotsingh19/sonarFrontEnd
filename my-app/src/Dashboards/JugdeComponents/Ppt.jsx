// import React, { useState } from "react";
// import { Presentation, Slide } from "react-presentation";

// function Ppt() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handlePrevClick = () => {
//     setCurrentIndex((prevIndex) => prevIndex - 1);
//   };

//   const handleNextClick = () => {
//     setCurrentIndex((prevIndex) => prevIndex + 1);
//   };

//   return (
//     <div>
//       <Presentation index={currentIndex} onChangeIndex={setCurrentIndex}>
//         <Slide>
//           <h1>Slide 1</h1>
//           <p>This is the first slide.</p>
//         </Slide>
//         <Slide>
//           <h1>Slide 2</h1>
//           <p>This is the second slide.</p>
//         </Slide>
//         <Slide>
//           <h1>Slide 3</h1>
//           <p>This is the third slide.</p>
//         </Slide>
//       </Presentation>
//       <div>
//         <button onClick={handlePrevClick} disabled={currentIndex === 0}>
//           Previous
//         </button>
//         <button
//           onClick={handleNextClick}
//           disabled={currentIndex === 2} // Equivalent to number of slides
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Ppt;
