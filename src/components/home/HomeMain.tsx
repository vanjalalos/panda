import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import CtaSection from "./CtaSection";
import ServiceSection from "./ServiceSection";
import TrustSection from "./TrustSection";
import QualitySection from "./QualitySection";
import MapSection from "./MapSection";
import ProjectSection from "./ProjectSection";
import VideoSection from "./VideoSection";
import TestimonialSection from "./TestimonialSection";
import BrandSection from "./BrandSection";
import BlogSection from "./BlogSection";

const HomeMain = () => {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <CtaSection />
      <AboutSection />
      <ProjectSection />
      <VideoSection />
      <TestimonialSection testimonial_space="" />
      <BrandSection brand_space="" />
      <TrustSection />
      <BlogSection />
      <QualitySection />
      <MapSection />
    </>
  );
};

export default HomeMain;
