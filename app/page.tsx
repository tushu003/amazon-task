
import Image from "next/image";
import Statistics from "./components/sections/Statistics";
import OurStory from "./components/sections/Our-Story";
import WhyChooseUs from "./components/sections/Why-Choose-Us";
import OurServices from "./components/sections/Our-Services";
import OurApproach from "./components/sections/Our-Approach";
import GrowthBusiness from "./components/sections/Growth-Business";
import HowWeHelp from "./components/sections/How-We-Help";
import ContactBooking from "./components/sections/Contact-Booking";
import Footer from "./components/layouts/Footer";
import HeroSection from "./components/layouts/Hero";

export default function Home() {
  return (
  <div>
    <HeroSection />
    <Statistics />
    <OurStory />
    <WhyChooseUs />
    <OurServices />
    <OurApproach />
    <GrowthBusiness />
    <HowWeHelp />
    <ContactBooking />
    <Footer />
  </div>
  );
}