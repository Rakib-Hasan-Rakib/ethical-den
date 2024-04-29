import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" flex justify-between items-center py-2 md:py-4">
        <small className="flex flex-col md:flex-row md:gap-6">
          <span>copyright Ethical Den</span>
          <span>hello@ethicalden.com</span>
        </small>
        <div className="flex justify-center items-center gap-2 md:gap-4">
          <a href="https://github.com/Rakib-Hasan-Rakib" target="_blank">
            <FaGithub size={24} />
          </a>
          <a href="https://www.facebook.com/rk.rakib.180625" target="_blank">
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/rakibul-hasan-10a1b9274/"
            target="_blank"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </>
  );
};
export default Footer;
