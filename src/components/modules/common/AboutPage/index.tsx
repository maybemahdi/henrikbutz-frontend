import React from "react";
import AboutBanner from "./AboutBanner/AboutBanner";
import OurStory from "./OurStory/OurStory";
import FAQ from "../HomePage/FAQ/FAQ";
import Newsletter from "../HomePage/Newsletter/Newsletter";

const AboutPage = () => {
  return (
    <div>
      <AboutBanner />
      <OurStory />
      <FAQ />
      <Newsletter />
    </div>
  );
};

export default AboutPage;
