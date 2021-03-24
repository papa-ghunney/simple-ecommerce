import React from "react";
import FeaturedCollection from "../components/FeaturedCollection";
import Hero from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Layout from "../components/shared/Layout";
import { slidesData } from "../data/slidesData";

const Homepage = () => {
  return (
    <>
      <Layout>
        <Hero slides={slidesData} />
        <InfoSection />
        <FeaturedCollection />
      </Layout>
    </>
  );
};

export default Homepage;
