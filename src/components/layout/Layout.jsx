import Banner from "../banner/Banner";
import Navbar from "../navbar/Navbar";
import Container from "./Container";

const Layout = () => {
  return (
    <>
      <Container>
        <Navbar />
        <Banner />
      </Container>
    </>
  );
};
export default Layout;
