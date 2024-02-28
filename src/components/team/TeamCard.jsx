import { FaBehance, FaFacebook, FaInstagram } from "react-icons/fa";
import plusIcon from "../../assets/icons/plus_icon.png";
import { useState } from "react";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

const TeamCard = ({ image }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  
  return (
    <>
      <div className="relative">
        <img src={image} alt="team member image" className="w-full" />

        {!showOverlay && (
          <img
            onClick={()=>setShowOverlay(true)}
            src={plusIcon}
            alt="plus icon"
            className="bg-white rounded-full p-3 absolute bottom-4 right-4 cursor-pointer"
          />
        )}
        {showOverlay && (
          <div className="card-overlay bg-opacity-20 text-center py-8 lg:py-4 rounded-md absolute top-3/4 -translate-y-1/2 left-1/2 -translate-x-1/2 space-y-1">
            <MdOutlineRemoveCircleOutline
              onClick={() => setShowOverlay(false)}
              size={22}
              className="text-red-500 absolute -top-3 -right-2 cursor-pointer"
            />
            <h3 className="text-3xl lg:text-2xl font-semibold">Nazmul Islam</h3>
            <p>UI/UX Designer</p>
            <div className="flex justify-center items-center gap-2">
              <FaInstagram size={22} className="cursor-pointer" />
              <FaFacebook size={22} className="cursor-pointer" />
              <FaBehance size={22} className="cursor-pointer" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default TeamCard;
