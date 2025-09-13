import FooterDark from "@/components/shared/Footer/FooterDark";
import FAQDark from "../HomePage/FAQ/FAQDark";
import NewsletterDark from "../HomePage/Newsletter/NewsLetterDark";
import AboutBanner from "./AboutBanner/AboutBanner";
import OurStory from "./OurStory/OurStory";

const AboutPage = () => {
  return (
    <div>
      <AboutBanner />
      <OurStory />
      <FAQDark />
      <NewsletterDark />
      <FooterDark />
    </div>
  );
};

export default AboutPage;
