import Image from "next/image";
import Statistics from "./components/sections/Statistics";
import OurStory from "./components/sections/Our-Story";
import WhyChooseUs from "./components/sections/Why-Choose-Us";
import OurServices from "./components/sections/Our-Services";
import OurApproach from "./components/sections/Our-Approach";

export default function Home() {
  return (
  <div>
    <Statistics />
    <OurStory />
    <WhyChooseUs />
    <OurServices />
    <OurApproach />
  </div>
  );
}
