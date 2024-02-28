import SectionTitle from "../shared/SectionTitle";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TeamCard from "./TeamCard";
import "./team.css";

import memberOne from "../../assets/images/Team_member_one.png";
import memberTwo from "../../assets/images/Team_member_two.png";
import memberThree from "../../assets/images/Team_member_three.png";
import memberFour from "../../assets/images/Team_member_four.png";

const Team = () => {
  return (
    <>
      <div>
        {SectionTitle("our", "team")}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper pb-16 lg:hidden"
        >
          <SwiperSlide>
            <TeamCard image={memberOne} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberTwo} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberThree} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberFour} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberOne} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberTwo} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberThree} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberFour} />
          </SwiperSlide>
        </Swiper>
        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper pb-16 hidden lg:block xl:hidden"
        >
          <SwiperSlide>
            <TeamCard image={memberOne} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberTwo} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberThree} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberFour} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberOne} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberTwo} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberThree} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberFour} />
          </SwiperSlide>
        </Swiper>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper pb-16 hidden xl:block"
        >
          <SwiperSlide>
            <TeamCard image={memberOne} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberTwo} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberThree} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberFour} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberOne} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberTwo} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberThree} />
          </SwiperSlide>
          <SwiperSlide>
            <TeamCard image={memberFour} />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};
export default Team;
