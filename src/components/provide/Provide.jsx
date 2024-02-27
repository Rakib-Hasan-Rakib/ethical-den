import SectionTitle from "../shared/SectionTitle";
import mobile from "../../assets/images/mobile-provide.png";
import tablet from "../../assets/images/tab-provide.png";
import laptop from "../../assets/images/laptop-provide.png";
import { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ProvideCard from "./ProvideCard";

const Provide = () => {
  const [index, setIndex] = useState(2);

  const arr = [mobile, tablet, laptop];

  const handlePrevious = () => {
    if (index > 0) {
      setIndex((prevalue) => prevalue - 1);
    } else {
      setIndex(2);
    }
  };
  const handleNext = () => {
    if (index < 2) {
      setIndex((prevalue) => prevalue + 1);
    } else {
      setIndex(0);
    }
  };

  return (
    <div>
      {SectionTitle("What we", "provide")}

      <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-6 2xl:gap-8 px-8 md:px-0">
        <ProvideCard image={mobile} />
        <ProvideCard image={tablet} />
        <ProvideCard image={laptop} />
      </div>

      <div className="md:hidden relative">
        <div className="flex justify-between">
          <button onClick={handlePrevious} className="absolute top-1/2 left-0">
            <FaArrowLeftLong size={24} />
          </button>
          <button onClick={handleNext} className="absolute top-1/2 right-0">
            <FaArrowRightLong size={24} />
          </button>
        </div>
        <div className="mx-12">
          <ProvideCard image={arr[index]} />
        </div>
      </div>
    </div>
  );
};
export default Provide;
