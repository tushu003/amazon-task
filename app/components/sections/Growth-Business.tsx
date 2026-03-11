
import Image from "next/image"; 
import amazonIcon from "../../../public/assets/icons/amazon.png";

type ChallengeItem = {
  id: number;
  title: string;
  description: string;
};

const challengesData: ChallengeItem[] = [
  {
    id: 1,
    title: "Lost in Competition?",
    description: "10M+ sellers & 350M+ product how do you stand out?",
  },
  {
    id: 2,
    title: "Burning Cash on Ads?",
    description: "PPC feels like a money pit with no returns.",
  },
  {
    id: 3,
    title: "Low Rankings?",
    description: "Amazon’s complex algorithms keep changing.",
  },
  {
    id: 4,
    title: "Inventory Headaches?",
    description: "Stockouts, overstocking, at the wrong time?",
  },
  {
    id: 5,
    title: "Risk of Account Suspension?",
    description: "Amazon’s strict policies make selling stressful.",
  },
  {
    id: 6,
    title: "Wasting Time & Getting Stuck?",
    description: "Managing it all alone is overwhelming",
  },
];

export default function GrowthBusiness() {
  return (
    <section className="bg-[#f3f3f3]">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="flex items-center justify-center ">
              <Image src={amazonIcon} alt="Badge Icon" width={60} height={60} />
            </div>
            <h3 className="text-black text-semibold">
              Growth{" "}
              <span className="text-sm font-medium text-[#FFA500]">
                Business
              </span>
            </h3>
          </div>

          <h2 className="text-[36px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#151515] sm:text-[50px] lg:text-[54px]">
            The Harsh Reality of
            <br />
            Selling on <span className="text-[#f5a000]">Amazon</span>
          </h2>

          <p className="mx-auto mt-5 max-w-[620px] text-[16px] leading-8 text-[#555555] sm:text-[17px]">
            Selling on Amazon is tough. Do these struggles sound familiar?
            Without the right strategy, you’re losing money, time, and
            opportunities.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {challengesData.map((item) => (
            <article
              key={item.id}
              className="rounded-[18px] border border-[#dddddd] bg-[#f3f3f3] px-6 py-6 sm:px-7 sm:py-7"
            >
              <h3 className="text-[22px] font-semibold leading-[1.35] text-[#f5a000]">
                {item.title}
              </h3>

              <div className="mt-4 h-10 w-[2px] rounded-full bg-[#f3d8a0]" />

              <p className="mt-4 text-[15px] leading-8 text-[#4f4f4f] sm:text-[16px]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="inline-flex min-h-[56px] items-center justify-center rounded-full border-bl-4 border-[#1f1f1f] bg-[#f5a000] px-8 text-base font-semibold text-white shadow-[3px_3px_0_0_#1f1f1f] transition duration-200 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#1f1f1f]"
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  );
}