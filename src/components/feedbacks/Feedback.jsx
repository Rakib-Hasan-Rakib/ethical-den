import SectionTitle from "../shared/SectionTitle";
import clientOne from "../../assets/images/client_one.png";
import clientTwo from "../../assets/images/client_two.png";
import clientThree from "../../assets/images/client_three.png";
import FeedbackCard from "./FeedbackCard";

// import { Virtual, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const Feedback = () => {

  

  
  const slides = [
    clientOne,
    clientTwo,
    clientThree,
    clientOne,
    clientTwo,
    clientThree,
  ];
  return (
    <>
      <div>
        {SectionTitle("what our", "client say")}
        
      </div>
    </>
  );
};

export default Feedback;
