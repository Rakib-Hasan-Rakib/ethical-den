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
          <img src={eduden} alt="eduden logo" className="w-40" />
          <img src={fowzi} alt="fowzi logo" className="w-40" />
          <img src={random} alt="the random house logo" className="w-40" />
          <img src={intellects} alt="intellects logo" className="w-40" />
          <img src={eduden} alt="eduden logo" className="w-40" />
          <img src={fowzi} alt="fowzi logo" className="w-40" />
          <img src={random} alt="the random house logo" className="w-40" />
          <img src={intellects} alt="intellects logo" className="w-40 mr-8" />
        </div>
      </Marquee>
    </>
  );
};
export default Collaborations;
