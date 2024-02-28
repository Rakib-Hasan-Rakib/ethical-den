import aboutImage from "../../assets/images/about-us.png";
import applicationMobile from "../../assets/icons/carbon_application-mobile.png";
import development from "../../assets/icons/carbon_development.png";
import security from "../../assets/icons/carbon_security.png";
import resourceCluster from "../../assets/icons/carbon_software-resource-cluster.png";
import searchEngine from "../../assets/icons/iconoir_search-engine.png";
import outlineEditing from "../../assets/icons/icon-park-outline_editing.png";
import lightBranding from "../../assets/icons/material-symbols-light_branding-watermark-outline.png";
import marketing from "../../assets/icons/nimbus_marketing.png";
import aiSpark from "../../assets/icons/streamline_artificial-intelligence-spark.png";
import arrowDown from "../../assets/icons/material-symbols_arrow-insert.png";

const About = () => {
  return (
    <>
      <div id="about" className="lg:flex justify-start items-start gap-12">
        <h1 className="lg:hidden text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold capitalize mt-4 mb-8 md:text-center">
          <span className="gradient-text">About</span> Us
        </h1>
        <img
          src={aboutImage}
          alt="about us image"
          className="md:w-3/5 lg:w-2/5 xl:w-full mx-auto"
        />
        <div>
          <h1 className="hidden lg:block text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold capitalize mt-4 mb-8">
            <span className="gradient-text">About</span> Us
          </h1>
          <p className="text-sm leading-relaxed tracking-wider text-justify my-6">
            Welcome to Ethical Den - The Srategic Digital Company. We are a
            brand and digtal consultancy based in india, partnering globally
            with leaders across industries to build future products, services,
            and brands. Working for the unknown since 2021. Our services span
            wide variety of audiences and capabilities, but all of them are
            rooted in inspiring ideas, human connection and writing youir
            brand's future. The world is changing fast. We help you keep up.
          </p>
          <div className="md:flex justify-between items-center text-sm 2xl:text-lg">
            <div className="space-y-3 mb-3 lg:mb-0">
              <p className="flex items-center gap-3">
                <img src={security} alt="security icon" />
                <span className="capitalize">cyber security services</span>
              </p>
              <p className="flex items-center gap-3">
                <img src={development} alt="development icon" />
                <span className="capitalize">web development</span>
              </p>
              <p className="flex items-center gap-3">
                <img src={marketing} alt="marketing icon" />
                <span className="capitalize">digital marketing</span>
              </p>
              <p className="flex items-center gap-3">
                <img src={searchEngine} alt="searchEngine icon" />
                <span className="capitalize">search engine optimization</span>
              </p>
              <p className="flex items-center gap-3">
                <img src={lightBranding} alt="lightBranding icon" />
                <span className="capitalize">Branding</span>
              </p>
            </div>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <img src={aiSpark} alt="aiSpark icon" />
                <span className="capitalize">artificial intelligence</span>
              </p>
              <p className="flex items-center gap-3">
                <img src={applicationMobile} alt="applicationMobile icon" />
                <span className="capitalize">mobile app development</span>
              </p>
              <p className="flex items-center gap-3">
                <img src={outlineEditing} alt="outlineEditing icon" />
                <span className="capitalize">video editing</span>
              </p>
              <p className="flex items-center gap-3">
                <img src={resourceCluster} alt="resourceCluster icon" />
                <span className="capitalize">software solution</span>
              </p>
              <p className="flex items-center gap-3">
                <img src={searchEngine} alt="searchEngine icon" />
                <span className="capitalize">engagement campaigns</span>
              </p>
            </div>
          </div>
          <button
            className="item-border px-4 md:px-6 py-2 my-6 lg:my-10 rounded-lg
           flex justify-center items-center gap-2 lg:text-lg"
          >
            <span className="gradient-text-two">see all our work</span>
            <img src={arrowDown} alt="arrow down icon" />
          </button>
        </div>
      </div>
    </>
  );
};
export default About;
