const ClientCard = ({ image }) => {
  return (
    <>
      <div style={{ backgroundColor: "#2C2B2B" }} className="w-full h-52 p-8 flex justify-center items-center rounded-md">
        <img src={image} alt="clients image" className="" />
      </div>
    </>
  );
};
export default ClientCard;
