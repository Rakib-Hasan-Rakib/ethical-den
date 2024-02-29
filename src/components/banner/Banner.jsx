import { useEffect, useState } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import TextTransition, { presets } from "react-text-transition";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const texts = [
    "cyber sequrity sevice",
    "web development",
    "digital marketing",
    "search engine optimization",
    "branding",
    "artificial intelligence",
    "mobile app development",
    "video editing",
    "engagement campaigns",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1500);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
      <div id="banner" className="w-full h-[90vh] mx-auto flex justify-center items-center text-start lg:text-center">
        <div className="space-y-3 lg:space-y-5">
          <div className="text-2xl md:text-4xl xl:text-5xl 2xl:text-7xl font-bold capitalize space-y-2 lg:space-y-5">
            <h1>innovative cyber agency</h1>
            <TextTransition
              springConfig={presets.wobbly}
              className="lg:flex lg:justify-center lg:items-center"
            >
              <h1 className="gradient-text py-1">{texts[index % texts.length]}</h1>
            </TextTransition>
          </div>
          <div className="md:w-1/2 lg:w-3/5 lg:mx-auto">
            <p className="text-sm lg:text-lg 2xl:text-2xl">
              We're the best digital marketing agency from west bengal, curating
              experiences that users fall in love with.
            </p>
            <button className="btn-two flex items-center gap-3 justify-center lg:mx-auto my-4 md:text-lg 2xl:text-xl">
              Hire us <MdOutlineArrowOutward size={22} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
