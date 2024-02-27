const SectionTitle = (normal, gradient) => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold capitalize my-6 md:my-8 xl:my-12 2xl:my-16">
        {normal} <span className="gradient-text">{gradient}</span>
      </h1>
    </>
  );
};
export default SectionTitle;
