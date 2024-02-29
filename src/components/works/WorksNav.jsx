

const WorksNav = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <ul className="flex items-center gap-4 font-semibold">
          <li>
            <a href="#" className="activeNav font-semibold text-sm xl:text-lg">
              All
            </a>
          </li>
          <li>
            <a href="#" className="activeNav font-semibold text-sm xl:text-lg">
              UI/UX Design
            </a>
          </li>
          <li>
            <a
              href="#"
              className="activeNav font-semibold hidden md:block text-sm xl:text-lg"
            >
              Logo Design
            </a>
          </li>
          <li>
            <a
              href="#"
              className="activeNav font-semibold hidden md:block text-sm xl:text-lg"
            >
              Web Development
            </a>
          </li>
          <li>
            <a
              href="#"
              className="activeNav font-semibold hidden md:block text-sm xl:text-lg"
            >
              Branding
            </a>
          </li>
        </ul>
        <button
          className="item-border px-2 md:px-4 py-1 my-6 lg:my-10 rounded-lg text-sm
             lg:text-lg"
        >
          <span className="gradient-text-two">see all our work</span>
        </button>
      </div>
    </>
  );
};
export default WorksNav;
