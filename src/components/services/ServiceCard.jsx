const ServiceCard = ({ image, name }) => {
  return (
    <>
      <div
        style={{ backgroundColor: "#2C2B2B" }}
        className="card w-full p-8 rounded-md text-center space-y-4"
      >
        <div className="flex justify-center items-center">
          <img src={image} alt="clients image" className="" />
        </div>
        <h3 className="text-xl md:text-2xl capitalize font-semibold">{name}</h3>
        <p className="text-sm">
          <small>
            Knowing the state of your current cybersecurity posture as well as
            executing on continued cybersecurity
          </small>
        </p>
      </div>
    </>
  );
};
export default ServiceCard;
