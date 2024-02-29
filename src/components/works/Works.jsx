import SectionTitle from "../shared/SectionTitle";
import WorksNav from "./WorksNav";
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
              slidesPerView={1}
              spaceBetween={10}
              freeMode={true}
              loop={true}
              modules={[FreeMode]}
              className="mySwiper"
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
              <SwiperSlide>
                <img src={workTwo} alt="work sample photo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={workThree} alt="work sample photo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={workFour} alt="work sample photo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={workFive} alt="work sample photo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={workSix} alt="work sample photo" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={workSeven} alt="work sample photo" />
              </SwiperSlide>
            </Swiper>
          </>
        </div>
      </div>
    </>
  );
};
export default Works;
