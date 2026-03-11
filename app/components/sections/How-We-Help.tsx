import { FaAmazon } from "react-icons/fa";
import Image from "next/image";
import amazonIcon from "../../../public/assets/icons/amazon.png";

type HelpItem = {
  id: number;
  title: string;
  description: string;
};

const helpData: HelpItem[] = [
  {
    id: 1,
    title: "We Make You Stand Out",
    description: "Targeted marketing to reach the right buyers.",
  },
  {
    id: 2,
    title: "We Fix Your Rankings",
    description: "SEO, keywords & ads for visibility.",
  },
  {
    id: 3,
    title: "We Optimize Your Ads",
    description: "No wasted budget—only high ROI advertising.",
  },
  {
    id: 4,
    title: "We Manage Your Inventory",
    description: "So you never run out of stock or overstock.",
  },
  {
    id: 5,
    title: "We Keep Your Account Safe",
    description: "Avoid suspensions, policy violations & account risks.",
  },
  {
    id: 6,
    title: "We Scale Your Business",
    description: "Expansion, market entry & growth.",
  },
];

export default function HowWeHelp() {
  return (
    <section className="bg-[#0b0b0b]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="flex items-center justify-center ">
              <Image src={amazonIcon} alt="Badge Icon" width={60} height={60} />
            </div>
            <h3 className="text-white text-semibold">
              Growth{" "}
              <span className="text-sm font-medium text-[#FFA500]">
                Business
              </span>
            </h3>
          </div>

          <h2 className="text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#FFFFFF] sm:text-[50px] lg:text-[54px]">
            How We Help You
            <br />
            Win on <span className="text-[#FFA500]">Amazon</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[520px] text-[16px] leading-8 text-[#cfcfcf] sm:text-[17px]">
            At FINTRIXX, we don’t guess—we use data-driven strategies to scale
            your business.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {helpData.map((item) => (
            <article
              key={item.id}
              className="rounded-[18px] bg-[#232323] px-6 py-6 sm:px-7 sm:py-7"
            >
              <h3 className="text-[22px] font-semibold leading-[1.35] text-[#FFA500]">
                {item.title}
              </h3>

              <div className="mt-4 h-10 w-[2px] rounded-full bg-[#6f5314]" />

              <p className="mt-4 text-[15px] leading-8 text-[#d7d7d7] sm:text-[16px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="inline-flex min-h-[56px] items-center justify-center rounded-full border-bl-2 border-white bg-[#FFA500] px-8 text-base font-semibold text-white shadow-[3px_3px_0_0_#ffffff] transition duration-200 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#ffffff]"
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}
