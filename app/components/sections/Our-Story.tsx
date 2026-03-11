
import React from "react";
import Image from "next/image";
import CTAButton from "../ui/CTAButton";
import amazonIcon from "../../../public/assets/icons/amazon.png";

type StoryContent = {
  badgeText: string;
  title: {
    lineOne: string;
    lineTwoStart: string;
    highlight: string;
    lineTwoEnd: string;
  };
  description: string;
  buttonText: string;
};

const storyContent: StoryContent = {
  badgeText: "Our Story",
  title: {
    lineOne: "Struggling With Amazon Sales? Let’s Scale Your",
    lineTwoStart: "Business—",
    highlight: "Faster, Smarter,",
    lineTwoEnd: "& Stress-Free!",
  },
  description:
    "Amazon is complex, but success doesn’t have to be. At FINTRIXX, we help sellers increase sales, optimize ads, rank higher, and expand into new markets—without wasting time or money. Let’s turn your struggles into scalable success!",
  buttonText: "Book a Free Strategy Call",
};

export default function OurStory() {
  return (
    <main id="about" className="bg-[#f3f3f3]">
      <section className="mx-auto flex py-4 lg:py-20px md:py-10 max-w-[1440px] items-center ">
        <div className="mx-auto text-center">
          <div className="mb-8 flex items-center justify-center gap-3">
            <div className="flex items-center justify-center ">
              <Image
                src={amazonIcon}
                alt="Badge Icon"
                width={70}
                height={70}
              />

            </div>
           <h3 className="text-black">
             Our <span className="text-sm font-medium text-[#FFA500]">Story</span>
           </h3>
          </div>

          <h1 className="text-[38px] font-extrabold text-[#151515] sm:text-[46px] lg:text-[48px]">
            {storyContent.title.lineOne}
            <br />
            {storyContent.title.lineTwoStart}{" "}
            <span className="text-[#FFA500]">{storyContent.title.highlight}</span>{" "}
            {storyContent.title.lineTwoEnd}
          </h1>

          <p className="mx-auto mt-6 max-w-[700px] text-[17px] leading-[1.9] text-[#4F4D4D] sm:text-[18px]">
            {storyContent.description}
          </p>

          <div className="mt-10">
            <CTAButton>{storyContent.buttonText}</CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}