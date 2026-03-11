
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";
import amazonIcon from "../../../public/assets/icons/amazon.png";

type ServiceItem = {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
  points: string[];
};

const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: "Amazon Growth & Advertising",
    image: "/assets/icons/rocket.png",
    imageAlt: "Rocket illustration",
    points: [
      "Bid & Budget Optimization – Higher ROI, lower ACOS.",
      "Monthly PPC Strategy – Tailored for long-term growth.",
    ],
  },
  {
    id: 2,
    title: "SEO & Product Ranking",
    image: "/assets/icons/chart.png",
    imageAlt: "Chart illustration",
    points: [
      "Organic & Sponsored Ranking – More visibility, more sales.",
      "Keyword & Competitor Analysis – Stay ahead of the competition.",
    ],
  },
  {
    id: 3,
    title: "Inventory & Account Management",
    image: "/assets/icons/box.png",
    imageAlt: "Box illustration",
    points: [
      "Inventory Forecasting & Restocking – No stockouts, no overstocking.",
      "Amazon Account Health & Compliance – Avoid suspensions & violations.",
    ],
  },
  {
    id: 4,
    title: "Scaling & Expansion",
    image: "/assets/icons/globe.png",
    imageAlt: "Globe illustration",
    points: [
      "Launching New Products – Market research-backed success.",
      "International Expansion – Sell beyond borders with ease.",
    ],
  },
];

export default function OurServices() {
  return (
    <section id="services" className="bg-[#f3f3f3]">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <div className="flex items-center justify-center ">
              <Image src={amazonIcon} alt="Badge Icon" width={60} height={60} />
            </div>
            <h3 className="text-black text-semibold">
              Our{" "}
              <span className="text-sm font-medium text-[#FFA500]">
                 Services
              </span>
            </h3>
          </div>

          <h2 className="text-[38px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#151515] sm:text-[50px] lg:text-[54px]">
            Scale Smarter, <span className="text-[#FFA500]">Sell Faster</span>
          </h2>

          <p className="mt-5 text-[16px] leading-8 text-[#5a5a5a] sm:text-[17px]">
            We handle everything Amazon so you can focus on growing.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {servicesData.map((service) => (
            <article
              key={service.id}
              className="rounded-[18px] border border-[#dddddd] bg-[#f3f3f3] px-6 py-6 shadow-sm transition duration-200 hover:shadow-md sm:px-7 sm:py-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-[24px] font-semibold leading-[1.3] text-[#FFA500]">
                    {service.title}
                  </h3>

                  <div className="mt-4 h-10 w-[2px] rounded-full bg-[#f3d8a0]" />
                </div>

                <div className="relative h-[54px] w-[54px] shrink-0 sm:h-[60px] sm:w-[60px]">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {service.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FiCheckCircle className="mt-0.5 shrink-0 text-[20px] text-[#FFA500]" />
                    <p className="text-[15px] leading-7 text-[#4f4f4f] sm:text-[16px]">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}