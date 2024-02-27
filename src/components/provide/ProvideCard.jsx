import { RiArrowRightDoubleLine } from "react-icons/ri";

const ProvideCard = ({ image }) => {
  return (
    <>
      <div className="item-border rounded-md card py-5 lg:py-8 space-y-3 md:space-y-8">
        <div className="w-2/5 mx-auto h-40">
          <img src={image} alt="product image" className="w-52 h-40 mx-auto" />
        </div>
        <div className="text-center w-full lg:w-4/5 mx-auto">
          <h3 className="text-2xl xl:text-3xl font-semibold md:py-4 lg:py-6">
            Branding
          </h3>
          <p className="lg:leading-relaxed">
            Knowing the state of your current cybersecurity posture as well as
            executing on continued
          </p>
        </div>
        <p className="flex items-center justify-center gap-2 cursor-pointer">
          Read more <RiArrowRightDoubleLine size={22} />
        </p>
      </div>
    </>
  );
};
export default ProvideCard;
