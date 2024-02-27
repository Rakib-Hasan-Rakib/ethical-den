import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";
import Provide from "../provide/Provide";
import Container from "./Container";

const Layout = () => {
  return (
    <>
      <Container>
        {/* <Navbar /> */}
        <Banner />
        <Provide />
      </Container>
    </>
  );
};
export default Layout;
