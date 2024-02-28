import SectionTitle from "../shared/SectionTitle";
import clientOne from "../../assets/images/client_one.png";
import clientTwo from "../../assets/images/client_two.png";
import clientThree from "../../assets/images/client_three.png";
import FeedbackCard from "./FeedbackCard";
import { useState } from "react";

// const Feedback = () => {
//   const [index, setIndex] = useState(0);

//   const handlePrevious = () => {
//     if (index > 0) {
//       setIndex((preValue) => preValue - 1);
//     } else {
//       setIndex(3);
//     }
//   };
//   const handleNext = () => {
//     if (index < 3) {
//       setIndex((preValue) => preValue + 1);
//     } else {
//       setIndex(0);
//     }
//   };

//   const slides = [
//     clientOne,
//     clientTwo,
//     clientThree,
//     clientOne,
//     clientTwo,
//     clientThree,
//   ];
//   return (
//     <>
//       <div>
//
//         <div
//           class="your-class"
//           data-slick={`$('.responsive').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   `}
//         >
//           <div>your content</div>
//           <div>your content</div>
//           <div>your content</div>
//         </div>
//       </div>
//     </>
//   );
// };

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Feedback = () => {
  const [activeButton, setActiveButton] = useState("next");

  const slides = [
    clientOne,
    clientTwo,
    clientThree,
    clientOne,
    clientTwo,
    clientThree,
  ];
  return (
    <div>
      {SectionTitle("what our", "client say")}
      <section className="">
        <div className="w-full mx-auto">
          <div className="relative">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              cssMode={true}
              loop={true}
              navigation={{
                nextEl: ".swiper-team-button-next",
                prevEl: ".swiper-team-button-prev",
              }}
              modules={[Navigation]}
              className="mySwiper gap-4"
              style={{ overflow: "visible" }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {slides.map((slideItem, index) => (
                <SwiperSlide key={index}>
                  <FeedbackCard image={slideItem} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div style={{ zIndex: 100 }} className="absolute -top-12 md:-top-14 lg:-top-16 right-0">
              <button
                style={{
                  color: "black",
                  backgroundColor: "white",
                }}
                className="swiper-team-button-prev p-2 lg:p-4 ml-7 rounded-full"
                onClick={() => setActiveButton("prev")}
              >
                <FaArrowLeftLong />
              </button>
              <button
                style={{
                  color: "black",
                  backgroundColor: "white",
                }}
                className="swiper-team-button-next p-2 lg:p-4 ml-7 rounded-full"
                onClick={() => setActiveButton("next")}
              >
                <FaArrowRightLong />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Feedback;
