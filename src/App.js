import "./App.css";
import Header from "./components/Header";
import Customers from "./components/Customers";
import Testimonies from "./components/Testimonies";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import MobileHeader from "./components/mobile/MobileHeader";
import MobileTeams from "./components/mobile/MobileTeams";
import MobileFaqs from "./components/mobile/MobileFaqs";
import MobileFooter from "./components/mobile/MobileFooter";

import { useState, useEffect } from "react";

function App() {
  // const [mobile, setMobile] = useState(true);
  // setMobile(false);

  // Function for recognizing window size and handling viewport

  const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return { width };
  };

  const { width } = useViewport();
  const breakpoint = 440; // For mobile

  // Mobile version not finished
  // Mobile version not working on Chrome Mobile DevTools
  // Opening Local Network on phone works great!
  return width > breakpoint ? (
    <>
      <Header />
      <Customers />
      <Testimonies />
      <Faqs />
      <Footer />
    </>
  ) : (
    <>
      <MobileHeader />
      <MobileTeams />
      <MobileFaqs />
      <MobileFooter />
    </>
  );
}

export default App;
