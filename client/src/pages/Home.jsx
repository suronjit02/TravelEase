import React from "react";
import BannerSection from "../components/homePage/BannerSection";
import LatestVehicles from "../components/homePage/LatestVehicles";
import TopCategories from "../components/homePage/TopCategories";
import FeaturedOwner from "../components/homePage/FeaturedOwner";
import AboutSection from "../components/homePage/AboutSection";
import WhyChooseUs from "../components/homePage/WhyChooseUs";
import FaqSection from "../components/homePage/FaqSection";

const Home = () => {
  return (
    <div>
      <BannerSection></BannerSection>
      <LatestVehicles></LatestVehicles>
      <TopCategories></TopCategories>
      <FeaturedOwner></FeaturedOwner>
      <WhyChooseUs></WhyChooseUs>
      <AboutSection></AboutSection>
      <FaqSection></FaqSection>
    </div>
  );
};

export default Home;
