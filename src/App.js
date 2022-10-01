import "./App.css";
import Header from "./components/Header";
import Customers from "./components/Customers";
import Testimonies from "./components/Testimonies";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import MobileFaqs from "./components/mobile/MobileFaqs";
import MobileFooter from "./components/mobile/MobileFooter";

import { useState } from "react";

function App() {
  const [mobile, setMobile] = useState(true);
  return mobile === false ? (
    <>
      <Header />
      <Customers />
      <Testimonies />
      <Faqs />
      <Footer />
    </>
  ) : (
    <>
      <MobileFaqs />
      <MobileFooter />
    </>
  );
}

export default App;
