"use client";
import React from "react";

type StatItem = {
  id: number;
  value: string;
  label: string;
};

const statsData: StatItem[] = [
  {
    id: 1,
    value: "600 million",
    label: "Amazon Offers Over Products",
  },
  {
    id: 2,
    value: "$638.0 billion",
    label: "Amazon Global Net Sales Revenue",
  },
  {
    id: 3,
    value: "11.95 million",
    label: "Amazon Handles Orders Daily.",
  },
  {
    id: 4,
    value: "$1.6 billion",
    label: "Amazon Average Daily Sales Revenue",
  },
];

export default function Statistics() {
  return (
    <main className="bg-[#f3f3f3]">
      <section className="mx-auto max-w-[1440px] px-4 lg:py-12 md:py-12 py-6">
        <h2 className="mb-10 text-center text-[20px] font-bold leading-tight text-[#151515] md:text-[34px]">
          Amazon Market Statistics Worldwide 2024
        </h2>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {statsData.map((item) => (
            <div
              key={item.id}
              className="flex max-w-[282px] min-h-[164px] flex-col items-center justify-center rounded-[16px] border border-[#eae3e3] px-3 py-6 text-center transition-all duration-200 hover:-translate-y-0.5"
            >
              <h3 className="text-[28px] lg:text-[34px] font-extrabold text-[#151515] md:text-[42px]">
                {item.value}
              </h3>

              <p className="mt-4 max-w-[220px] text-[16px] font-medium leading-[1.5] text-[#4F4D4D]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}