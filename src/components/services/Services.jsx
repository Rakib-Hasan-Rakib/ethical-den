import SectionTitle from "../shared/SectionTitle";
import uiDesign from "../../assets/icons/ui_design.png";
import webDesign from "../../assets/icons/web_design.png";
import graphicDesign from "../../assets/icons/graphic_design.png";
import ServiceCard from "./ServiceCard";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const Services = () => {
  const [index, setIndex] = useState(0);
  const arrOfImages = [
    { image: uiDesign, name: "UI/UX Design" },
    { image: webDesign, name: "Web Design" },
    { image: graphicDesign, name: "Graphic Design" },
    { image: graphicDesign, name: "Graphic Design" },
  ];
  const handlePrevious = () => {
    if (index > 0) {
      setIndex((preValue) => preValue - 1);
    } else {
      setIndex(3);
    }
  };
  const handleNext = () => {
    if (index < 3) {
      setIndex((preValue) => preValue + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <>
      <div>
        {SectionTitle("All", "services")}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
          <ServiceCard image={uiDesign} name="UI/UX design" />
          <ServiceCard image={webDesign} name="web design" />
          <ServiceCard image={graphicDesign} name="graphic design" />
          <ServiceCard image={graphicDesign} name="graphic design" />
        </div>

        <div className="md:hidden relative">
          <div className="flex justify-between">
            <button
              onClick={handlePrevious}
              className="absolute top-1/2 left-0"
            >
              <FaArrowLeftLong size={24} />
            </button>
            <button onClick={handleNext} className="absolute top-1/2 right-0">
              <FaArrowRightLong size={24} />
            </button>
          </div>
          <div className="mx-12">
            <ServiceCard
              image={arrOfImages[index].image}
              name={arrOfImages[index].name}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
