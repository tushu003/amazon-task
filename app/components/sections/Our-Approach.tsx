import Image from "next/image";
import { FiTarget, FiGlobe } from "react-icons/fi";

type ApproachTab = {
  id: number;
  title: string;
  icon: React.ElementType;
  active?: boolean;
};

const approachTabs: ApproachTab[] = [
  {
    id: 1,
    title: "Mission",
    icon: FiTarget,
  },
  {
    id: 2,
    title: "Vision",
    icon: FiGlobe,
    active: true,
  },
];

export default function OurApproach() {
  return (
    <section className="bg-[#0a0a0a]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[440px_1fr] lg:px-8 lg:py-24">
        <div className="flex justify-center gap-4 lg:justify-start">
          <div className="relative h-[305px] w-[190px] overflow-hidden rounded-[16px]">
            <Image
              src="/assets/hero/approach-chart.png"
              alt="Business chart"
              width={268}
              height={390}
            />
          </div>

          <div className="relative mt-[70px] h-[275px] w-[190px] overflow-hidden rounded-[16px]">
            <Image
              src="/assets/hero/approach-growth.png"
              alt="Growth concept"
              width={268}
              height={390}
            />
          </div>
        </div>

        <div className="max-w-[600px]">
          <h2 className="text-[42px] font-extrabold leading-[1] tracking-[-0.03em] text-white sm:text-[54px] lg:text-[66px]">
            Our <span className="text-[#f5a000]">Approach</span>
          </h2>

          <div className="mt-10 ">
            {approachTabs.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.id}
                  className={`pl-8 ${
                    item.active
                      ? "border-l-2 border-[#f5a000] pt-5"
                      : "border-l-2 border-white/20 pb-5 border-b-1 border-white pt-2"
                  } ${index !== 0 ? "mt-1" : ""}`}
                >
                  <div className="flex items-center gap-3 ">
                    <Icon
                      className={`text-[20px] ${
                        item.active ? "text-[#f5a000]" : "text-white"
                      }`}
                    />
                    <h3 className="text-[18px] font-semibold text-whit">
                      {item.title}
                    </h3>
                  
                  </div>

                  {item.active && (
                    <>
                      <p className="mt-5 max-w-[470px] text-[15px] leading-8 text-[#d2d2d2] sm:text-[16px]">
                        Founded in 1983, SecureWealth was created to address the
                        challenges of traditional banking—long queues,
                        complicated processes, and limited access. We started
                        with a vision to make banking simple, accessible, and
                        convenient for everyone. Today, we proudly serve 7+
                        million users, helping them manage their finances with
                        ease.
                      </p>

                      <button
                        type="button"
                        className="mt-8 inline-flex min-h-[54px] items-center justify-center rounded-full border-bl-3 border-white bg-[#f5a000] px-8 text-base font-semibold text-white shadow-[3px_3px_0_0_#ffffff] transition duration-200 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#ffffff]"
                      >
                        Book a Free Strategy Call
                      </button>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}