
import { FaAmazon, FaGlobe } from "react-icons/fa";
import { FiClock, FiMonitor, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import amazonIcon from "../../../public/assets/icons/amazon.png";

type CalendarDay = {
  id: number;
  day: number | null;
  active?: boolean;
};

const calendarDays: CalendarDay[] = [
  { id: 1, day: null },
  { id: 2, day: null },
  { id: 3, day: null },
  { id: 4, day: null },
  { id: 5, day: null },
  { id: 6, day: 1 },
  { id: 7, day: 2 },

  { id: 8, day: 3 },
  { id: 9, day: 4 },
  { id: 10, day: 5 },
  { id: 11, day: 6, active: true },
  { id: 12, day: 7, active: true },
  { id: 13, day: 8 },
  { id: 14, day: 9 },

  { id: 15, day: 10, active: true },
  { id: 16, day: 11, active: true },
  { id: 17, day: 12, active: true },
  { id: 18, day: 13, active: true },
  { id: 19, day: 14, active: true },
  { id: 20, day: 15 },
  { id: 21, day: 16 },

  { id: 22, day: 17, active: true },
  { id: 23, day: 18, active: true },
  { id: 24, day: 19, active: true },
  { id: 25, day: 20, active: true },
  { id: 26, day: 21, active: true },
  { id: 27, day: 22 },
  { id: 28, day: 23 },

  { id: 29, day: 24, active: true },
  { id: 30, day: 25, active: true },
  { id: 31, day: 26, active: true },
  { id: 32, day: 27, active: true },
  { id: 33, day: 28, active: true },
  { id: 34, day: 29 },
  { id: 35, day: 30 },

  { id: 36, day: 31, active: true },
];

const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export default function ContactBooking() {
  return (
    <section id="contact" className="overflow-x-hidden bg-[#f3f3f3]">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-[760px] text-center">
          <div className="mb-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <div className="flex items-center justify-center">
              <Image
                src={amazonIcon}
                alt="Badge Icon"
                width={50}
                height={50}
                className="h-[42px] w-auto sm:h-[52px] lg:h-[60px]"
              />
            </div>

            <h3 className="text-sm font-semibold text-[#FFA500] sm:text-base">
              Contact{" "}
              <span className="font-medium text-black">
                Us
              </span>
            </h3>
          </div>

          <h2 className="text-[30px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#151515] sm:text-[40px] md:text-[48px] lg:text-[66px]">
            Let’s Scale Your <span className="text-[#f5a000]">Business!</span>
          </h2>

          <p className="mt-3 text-[13px] font-medium text-[#555555] sm:text-[15px] lg:text-[16px]">
            FINTRIXX – Your Amazon Growth Partner
          </p>
        </div>

        <div className="relative mx-auto mt-10 w-full max-w-[1120px] overflow-hidden rounded-[8px] border border-[#dddddd] bg-white shadow-sm sm:mt-12 lg:mt-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr]">
            <div className="border-b border-[#e7e7e7] px-5 py-6 sm:px-7 sm:py-8 lg:border-b-0 lg:border-r lg:border-r-[#e7e7e7] lg:px-8 lg:py-9">
              <p className="text-[13px] font-semibold text-[#8a8a8a] sm:text-[14px]">
                Naim
              </p>

              <h3 className="mt-2 max-w-[420px] text-[26px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1d3557] sm:text-[34px] md:text-[38px] lg:text-[42px]">
                Book Your Strategy
                <br />
                Session: Accelerate Your
                <br />
                Growth!
              </h3>

              <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                <div className="flex items-center gap-3 text-[#6a6a6a]">
                  <FiClock className="shrink-0 text-[18px] sm:text-[20px]" />
                  <span className="text-[15px] font-medium sm:text-[17px] lg:text-[18px]">
                    30 min
                  </span>
                </div>

                <div className="flex items-start gap-3 text-[#6a6a6a]">
                  <FiMonitor className="mt-1 shrink-0 text-[18px] sm:text-[20px]" />
                  <span className="max-w-[320px] text-[15px] font-medium leading-[1.5] sm:text-[17px] lg:text-[18px]">
                    Web conferencing details provided upon confirmation.
                  </span>
                </div>
              </div>

              <div className="mt-10 sm:mt-14 md:mt-20 lg:mt-32">
                <button
                  type="button"
                  className="text-[14px] font-medium text-[#4d7ddb] transition hover:opacity-80 sm:text-[15px] lg:text-[16px]"
                >
                  Cookie settings
                </button>
              </div>
            </div>

            <div className="relative px-5 py-6 sm:px-7 sm:py-8 lg:px-8 lg:py-9">
              <div className="absolute right-0 top-0 h-[72px] w-[72px] overflow-hidden sm:h-[82px] sm:w-[82px]">
                <div className="absolute right-[-30px] top-[11px] rotate-45 bg-[#5f666c] px-8 py-1 text-[9px] font-semibold uppercase tracking-wide text-white sm:right-[-28px] sm:top-[10px] sm:text-[11px]">
                  Powered by Calendly
                </div>
              </div>

              <h3 className="pr-12 text-[22px] font-semibold leading-tight text-[#26415f] sm:text-[28px] lg:text-[36px]">
                Select a Date &amp; Time
              </h3>

              <div className="mt-6 flex items-center justify-between sm:mt-8">
                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full text-[#7a7a7a] transition hover:bg-[#f5f7fb] sm:h-9 sm:w-9"
                >
                  <FiChevronLeft className="text-[18px] sm:text-[20px]" />
                </button>

                <p className="text-[16px] font-medium text-[#4a607b] sm:text-[18px] lg:text-[20px]">
                  March 2025
                </p>

                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#eaf2ff] text-[#4d7ddb] transition hover:opacity-90 sm:h-9 sm:w-9"
                >
                  <FiChevronRight className="text-[18px] sm:text-[20px]" />
                </button>
              </div>

              <div className="mt-6 grid grid-cols-7 gap-y-3 text-center sm:mt-7 sm:gap-y-4">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="text-[10px] font-semibold tracking-wide text-[#6a7d96] sm:text-[11px] lg:text-[12px]"
                  >
                    {day}
                  </div>
                ))}

                {calendarDays.map((item) => (
                  <div key={item.id} className="flex justify-center">
                    {item.day ? (
                      <button
                        type="button"
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-[13px] font-semibold transition sm:h-9 sm:w-9 sm:text-[14px] lg:h-10 lg:w-10 lg:text-[16px] ${
                          item.active
                            ? "bg-[#eaf2ff] text-[#2f6fe4] hover:bg-[#dce9ff]"
                            : "text-[#7d7d7d]"
                        }`}
                      >
                        {item.day}
                      </button>
                    ) : (
                      <div className="h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 sm:mt-8">
                <p className="text-[16px] font-semibold text-[#26415f] sm:text-[17px] lg:text-[18px]">
                  Time zone
                </p>

                <button
                  type="button"
                  className="mt-3 inline-flex flex-wrap items-center gap-2 text-left text-[14px] font-medium text-[#334e68] sm:gap-3 sm:text-[15px] lg:text-[16px]"
                >
                  <FaGlobe className="shrink-0 text-[14px] sm:text-[16px]" />
                  <span>Asia/Dhaka (3:00pm)</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-5 flex max-w-[1120px] flex-col items-center justify-center gap-2 px-2 text-center text-[12px] text-[#5a5a5a] sm:mt-6 sm:text-[13px] md:flex-row md:gap-6">
          <div className="flex flex-wrap items-center justify-center gap-2 break-all">
            <FiMonitor className="text-[14px]" />
            <span>leadsbridgedemo@example.com</span>
          </div>

          <p className="max-w-[700px]">
            <span className="font-semibold text-[#f5a000]">Note:</span> Have a
            question? Need a strategy? We’re here to help.
          </p>
        </div>
      </div>
    </section>
  );
}