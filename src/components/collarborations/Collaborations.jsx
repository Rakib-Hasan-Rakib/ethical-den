import Marquee from "react-fast-marquee";
import SectionTitle from "../shared/SectionTitle";
import random from "../../assets/logos/random.png";
import intellects from "../../assets/logos/intellects.png";
import fowzi from "../../assets/logos/fowzi.png";
import eduden from "../../assets/logos/eduden.png";

const Collaborations = () => {
  return (
    <>
      {SectionTitle("our", "collaborations")}
      <Marquee pauseOnHover={true}>
        <div className="flex justify-between items-center gap-12">
          <img src={eduden} alt="" className="w-40" />
          <img src={fowzi} alt="" className="w-40" />
          <img src={random} alt="" className="w-40" />
          <img src={intellects} alt="" className="w-40" />
          <img src={eduden} alt="" className="w-40" />
          <img src={fowzi} alt="" className="w-40" />
          <img src={random} alt="" className="w-40" />
          <img src={intellects} alt="" className="w-40 mr-8" />
        </div>
      </Marquee>
    </>
  );
};
export default Collaborations;
