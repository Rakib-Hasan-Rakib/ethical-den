import About from "../about/About";
import Banner from "../banner/Banner";
import Clients from "../clients/Clients";
import Collaborations from "../collarborations/Collaborations";
import Navbar from "../navbar/Navbar";
import Provide from "../provide/Provide";
import Services from "../services/Services";
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
          <Clients />
          <Services />
          <Collaborations />
        </div>
      </Container>
    </>
  );
};
export default Layout;
