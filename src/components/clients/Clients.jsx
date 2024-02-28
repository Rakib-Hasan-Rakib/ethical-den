import SectionTitle from "../shared/SectionTitle";
import ClientCard from "./ClientCard";
import ekoClinic from "../../assets/icons/Group.png";
import roaderr from "../../assets/icons/Group_one.png";
import brandGhar from "../../assets/icons/Layer_one.png";
import aw from "../../assets/icons/Layer.png";
import weConnekt from "../../assets/icons/we_connekt.png";
import neelDavid from "../../assets/icons/neeldavid.png";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const Clients = () => {
  const [activeButton, setActiveButton] = useState("next");

  const slides = [ekoClinic, roaderr, weConnekt, brandGhar, neelDavid, aw];
  return (
    <>
      <div>
        {SectionTitle("our valuable", "clients")}
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
                    slidesPerView: 4,
                  },
                }}
              >
                {slides.map((slideItem, index) => (
                  <SwiperSlide key={index}>
                    <ClientCard image={slideItem} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div
                style={{ zIndex: 100 }}
                className="absolute -bottom-12 md:-bottom-16 xl:-bottom-20 left-1/2 -translate-x-1/2"
              >
                <button
                  style={{
                    color: "black",
                    backgroundColor: "white",
                  }}
                  className="swiper-team-button-prev p-2 rounded-md"
                  onClick={() => setActiveButton("prev")}
                >
                  <MdArrowBackIos />
                </button>
                <button
                  style={{
                    color: "black",
                    backgroundColor: "white",
                  }}
                  className="swiper-team-button-next p-2 ml-4 rounded-md"
                  onClick={() => setActiveButton("next")}
                >
                  <MdArrowForwardIos />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default Clients;
