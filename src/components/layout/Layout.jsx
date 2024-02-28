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
import Works from "../works/Works";
import Container from "./Container";

const Layout = () => {
  return (
    <>
      <div className="banner-bg">
        <Container>
          <Navbar />
          <Banner />
        </Container>
      </div>
      <Container>
        <div className="space-y-20 xl:space-y-40">
          <Provide />
          <About />
          <Clients />
          <Services />
          <Works />
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
