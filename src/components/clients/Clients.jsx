import SectionTitle from "../shared/SectionTitle";
import ClientCard from "./ClientCard";
import ekoClinic from "../../assets/icons/Group.png";
import roaderr from "../../assets/icons/Group_one.png";
import brandGhar from "../../assets/icons/Layer_one.png";
import aw from "../../assets/icons/Layer.png";

const Clients = () => {

    // todo make a slider here
  return (
    <div className="my-32">
      {SectionTitle("our valuable", "clients")}
      <div className="flex flex-shrink-0 justify-between items-center gap-8 my-32">
        <ClientCard image={ekoClinic} />
        <ClientCard image={roaderr} />
        <ClientCard image={brandGhar} />
        <ClientCard image={aw} />
        {/* <ClientCard image={ekoClinic} />
        <ClientCard image={roaderr} />
        <ClientCard image={brandGhar} />
        <ClientCard image={aw} /> */}
      </div>
    </div>
  );
};
export default Clients;
