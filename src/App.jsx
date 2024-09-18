import Benefit from "./components/Benefit";
import Download from "./components/Download";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div className="min-h-screen pt-10 mx-3 sm:min-h-screen md:mx-24">
      <div className="px-5 mx-auto max-w-16xl">
        <NavBar />
        <Home />
        <Features />
        <Benefit />
        <Testimonial />
        <Faq />
        <Download />
        <Footer />
      </div>
    </div>
  );
};

export default App;
