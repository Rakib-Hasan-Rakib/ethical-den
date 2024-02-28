import SectionTitle from "../shared/SectionTitle";
import WorksNav from "./WorksNav";
import workOne from "../../assets/images/work1.png";
import workTwo from "../../assets/images/work2.png";
import workThree from "../../assets/images/work3.png";
import workFour from "../../assets/images/work4.png";
import workFive from "../../assets/images/work5.png";
import workSix from "../../assets/images/work6.png";
import workSeven from "../../assets/images/work7.png";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./works.css";

import { FreeMode } from "swiper/modules";

const Works = () => {
  return (
    <>
      <div id="work">
        {SectionTitle("our", "works")}
        <WorksNav />

        <div>
          <>
            <Swiper
              slidesPerView={3}
              spaceBetween={2}
              freeMode={true}
              loop={true}
              modules={[FreeMode]}
              className="mySwiper"
            >
              {/* <SwiperSlide><img src={workOne} alt="" className=""/></SwiperSlide> */}
              <SwiperSlide>
                <img src={workTwo} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={workThree} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={workFour} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={workFive} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={workSix} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={workSeven} alt="" />
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </>
  );
};
export default Works;
