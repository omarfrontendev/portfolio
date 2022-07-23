import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Experiance from "./Components/experiance/Experiance";
import Header from "./Components/header/Header";
import Nav from "./Components/nav/Nav";
import Portfolio from "./Components/portfolio/Portfolio";
import Services from "./Components/services/Services";
import Testimonials from "./Components/testimonials/Testimonials";

const App = () => {
  return(
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experiance/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
    </>
  );
};

export default App;