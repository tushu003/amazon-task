
import Image from "next/image";
import React from "react";
import CTAButton from "../ui/CTAButton";
import amazonIcon from "../../../public/assets/icons/amazon.png";
import fintrix from "../../../public/assets/hero/fintrixx.png";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0d0d0d]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center  px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="max-w-[560px]">
          <div className="mb-6 flex items-center gap-3">
            <div className="mb-4 flex items-center justify-center gap-3">
              <div className="flex items-center justify-center ">
                <Image
                  src={amazonIcon}
                  alt="Badge Icon"
                  width={60}
                  height={60}
                />
              </div>
              <h3 className="text-[#FFFFFF">
                Why{" "}
                <span className="text-sm font-medium text-[#FFA500]">
                  Choose US
                </span>
              </h3>
            </div>
          </div>

          <h2 className="text-[42px] font-extrabold leading-[1.05] tracking-[-0.03em] text-white sm:text-[52px] lg:text-[44px]">
            Why Choose <span className="text-[#f5a000] lg:text-[54px] text-[48px]">FINTRIXX?</span>
          </h2>

          <p className="mt-8 max-w-[540px] text-[16px] leading-[1.85] text-[#d3d3d3] sm:text-[17px]">
            Amazon is tough—we make it easy. At FINTRIXX, we help sellers rank
            higher, scale faster, &amp; sell smarter. We analyze trends,
            optimize ads, manage inventory, &amp; protect your account so you
            can focus on your business.
            <br />
            <span className="mt-2 inline-block">
              🚀 No more guesswork. No more wasted money. Just real results.
            </span>
          </p>

          <CTAButton variant="dark" className="mt-10">
            Book a Free Consultation
          </CTAButton>
        </div>

        <div>
          <Image
            src={fintrix}
            alt="Why Choose Us Image"
            width={560}
            height={470}
            className="mx-auto"
          />
        </div>
      </div>
    </section>
  );
}