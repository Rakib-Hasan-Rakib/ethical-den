import { FaFacebook, FaInstagram, FaBehance } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className=" flex justify-between items-center py-2 md:py-4">
        <small className="flex flex-col md:flex-row md:gap-6">
          <span>copyright Ethical Den</span>
          <span>hello@ethicalden.com</span>
        </small>
        <div className="flex justify-center items-center gap-2">
          <FaInstagram size={24} />
          <FaFacebook size={24} />
          <FaBehance size={28} />
        </div>
      </div>
    </>
  );
};
export default Footer;
