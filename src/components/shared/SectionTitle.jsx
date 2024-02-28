const SectionTitle = (normal, gradient) => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold capitalize mb-4 md:mb-6 xl:mb-8">
        {normal} <span className="gradient-text">{gradient}</span>
      </h1>
    </>
  );
};
export default SectionTitle;
