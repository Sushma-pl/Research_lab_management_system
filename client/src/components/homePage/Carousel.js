import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class CarouselComponent extends Component {
  render() {
    return (
      <div className="carousel-wrapper">
        <Carousel
          infiniteLoop
          useKeyboardArrows
          autoPlay
          showThumbs={false}
          interval="5000"
          transitionTime="3000"
        >
          <div>
            <img src={require("./images/image1.jpg")} />
          </div>
          <div>
            <img src={require("./images/image2.jpg")} />
          </div>
          <div>
            <img src={require("./images/image3.jpg")} />
          </div>
        </Carousel>
      </div>
    );
  }
}

// const data = [
//   {
//     image: require("./images/image1.jpg"),
//     caption: "Caption",
//     description: "Description Here",
//   },
//   {
//     image: require("./images/image2.jpg"),
//     caption: "Caption",
//     description: "Description Here",
//   },
//   {
//     image: require("./images/image3.jpg"),
//     caption: "Caption",
//     description: "Description Here",
//   },
// ];

// function HomeCarousel() {
//   const [index, setIndex] = useState(0);
//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };
//    const [carouselHeight, setCarouselHeight] = useState(600);

//    useEffect(() => {
//      function handleResize() {
//        if (window.innerWidth > 900) {
//          setCarouselHeight(500);
//        } else if (window.innerWidth > 768) {
//          setCarouselHeight(300);
//        } else {
//          setCarouselHeight(250);
//        }

//      }

//      window.addEventListener("resize", handleResize);
//      handleResize();

//      return () => window.removeEventListener("resize", handleResize);
//    }, []);
//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       {data.map((slide, i) => {
//         return (
//           <Carousel.Item
//             key={i}
//             style={{ height: `${carouselHeight}px`}}
//             className="container-fluid"
//           >
//             <img
//                style={{ width: "100%", display: "d-block", height: "100%"}}
//               src={slide.image}
//               alt="slider image"
//             />
//             {/* <Carousel.Caption>
//               <h3>{slide.caption}</h3>
//               <p>{slide.description}</p>
//             </Carousel.Caption> */}
//           </Carousel.Item>
//         );
//       })}
//     </Carousel>
//   );
// }
// export default HomeCarousel;
