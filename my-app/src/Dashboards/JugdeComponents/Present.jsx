// import React, { useState } from "react";
// import pptxgen from "pptxgenjs";

// function generatePresentation() {
//   const pptx = new pptxgen();

//   // Add slides to the presentation
//   const slide1 = pptx.addSlide();
//   slide1.addText("Slide 1", { x: 0.5, y: 1, font_size: 18 });
//   slide1.addText("This is the content for slide 1", { x: 0.5, y: 2 });

//   const slide2 = pptx.addSlide();
//   slide2.addText("Slide 2", { x: 0.5, y: 1, font_size: 18 });
//   slide2.addText("This is the content for slide 2", { x: 0.5, y: 2 });

//   const slide3 = pptx.addSlide();
//   slide3.addText("Slide 3", { x: 0.5, y: 1, font_size: 18 });
//   slide3.addText("This is the content for slide 3", { x: 0.5, y: 2 });

//   // Save the presentation as a .pptx file
//   pptx.writeFile("presentation.pptx");

//   // Convert the slides to an array of objects
//   const slides = pptx.getSlides().map((slide, index) => ({
//     id: index + 1,
//     title: slide.elements[0].text,
//     content: slide.elements[1].text,
//   }));

//   return slides;
// }

// function PresentationLink({ id, title, setCurrentSlide }) {
//   const handleClick = () => {
//     setCurrentSlide(id - 1);
//   };

//   return <button onClick={handleClick}>{title}</button>;
// }

// function Presentation() {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slides = generatePresentation();

//   const previousSlide = () => {
//     if (currentSlide > 0) {
//       setCurrentSlide(currentSlide - 1);
//     }
//   };

//   const nextSlide = () => {
//     if (currentSlide < slides.length - 1) {
//       setCurrentSlide(currentSlide + 1);
//     }
//   };

//   return (
//     <div>
//       <h1>{slides[currentSlide].title}</h1>
//       <p>{slides[currentSlide].content}</p>
//       {slides.map((slide) => (
//         <PresentationLink
//           key={slide.id}
//           id={slide.id}
//           title={slide.title}
//           setCurrentSlide={setCurrentSlide}
//         />
//       ))}
//       <button onClick={previousSlide}>Previous</button>
//       <button onClick={nextSlide}>Next</button>
//     </div>
//   );
// }

// export default Presentation;
