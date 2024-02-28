import About from "../about/About";
import Banner from "../banner/Banner";
import Clients from "../clients/Clients";
import Collaborations from "../collarborations/Collaborations";
import Contact from "../contact/Contact";
import Feedback from "../feedbacks/Feedback";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Provide from "../provide/Provide";
import Services from "../services/Services";
import Team from "../team/Team";
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
          <Feedback />
          <Collaborations />
          <Team />
          <Contact />
        </div>
      </Container>
      <hr className="mt-4 md:mt-8" />
      <Container>
        <Footer />
      </Container>
    </>
  );
};
export default Layout;
