import Image from "next/image";
import Statistics from "./components/sections/Statistics";
import OurStory from "./components/sections/Our-Story";

export default function Home() {
  return (
  <div>
    <Statistics />
    <OurStory />
  </div>
  );
}
