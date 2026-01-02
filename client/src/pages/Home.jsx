import React from "react";
import BannerSection from "../components/homePage/BannerSection";
import LatestVehicles from "../components/homePage/LatestVehicles";
import TopCategories from "../components/homePage/TopCategories";
import FeaturedOwner from "../components/homePage/FeaturedOwner";
import AboutSection from "../components/homePage/AboutSection";

const Home = () => {
  return (
    <div >
      
      <BannerSection></BannerSection>
      <LatestVehicles></LatestVehicles>
      <TopCategories></TopCategories>
      <FeaturedOwner></FeaturedOwner>
      <AboutSection></AboutSection>
    </div>
  );
};

export default Home;
