import About from "../about/About";
import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";
import Provide from "../provide/Provide";
import Container from "./Container";

const Layout = () => {
  return (
    <>
      <Container>
        {/* <Navbar /> */}
        <div className="space-y-20 xl:space-y-40">
          <Banner />
          <Provide />
          <About />
        </div>
      </Container>
    </>
  );
};
export default Layout;
