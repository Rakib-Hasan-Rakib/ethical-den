import { HiMiniArrowDownRight } from "react-icons/hi2";

const Contact = () => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold capitalize mb-4">
        <span className="gradient-text">contact</span>
      </h1>
      <h1 className="flex gap-3 items-end">
        <span className="text-3xl md:text-4xl xl:text-6xl 2xl:text-8xl font-semibold ">
          Let's Talk
        </span>
        <HiMiniArrowDownRight className="text-xl md:text-2xl xl:text-4xl 2xl:text-6xl" />
      </h1>
    </>
  );
};
export default Contact;
