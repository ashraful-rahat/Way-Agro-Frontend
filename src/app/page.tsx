"use client";

import Banner from "@/component/common/Home/Banner";
import LocomotiveScrollProvider from "@/component/common/LocomotiveScrollProvider";
import About from "./about/page";
import Product from "./products/page";
import Services from "./services/page";

const HomePage = () => {
  return (
    <LocomotiveScrollProvider>
      <Banner />
      <About />
      <Product />
      <Services />
    </LocomotiveScrollProvider>
  );
};

export default HomePage;
