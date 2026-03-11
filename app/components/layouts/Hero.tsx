
"use client";

import React, { useSyncExternalStore } from "react";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "../ui/CTAButton";
import amazonIcon from "../../../public/assets/icons/amazon.png";

const NAV_LINKS = [
  { id: "services", href: "#services", label: "Services" },
  { id: "about", href: "#about", label: "About" },
  { id: "contact", href: "#contact", label: "Contact" },
] as const;

function getActiveFromHash(): string {
  if (typeof window === "undefined") return "";
  const hash = window.location.hash.slice(1).toLowerCase();
  return NAV_LINKS.some((l) => l.id === hash) ? hash : "";
}

function subscribeToHash(cb: () => void) {
  window.addEventListener("hashchange", cb);
  return () => window.removeEventListener("hashchange", cb);
}

export default function HeroSection() {
  const activeId = useSyncExternalStore(subscribeToHash, getActiveFromHash, () => "");

  const linkClass = (id: string) =>
    `cursor-pointer rounded px-2 py-2 text-[15px] font-medium transition hover:underline focus:outline-none ${
      activeId === id ? "text-[#f5a000] hover:text-[#e59400]" : "text-[#6b6b6b] hover:text-[#1f1f1f]"
    }`;

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Navbar: solid white only — no gradient */}
      <div className="hero-navbar">
        <header className="relative z-10 mx-auto flex max-w-[1440px] items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          {/* Logo - clickable */}
          <Link
            href="#"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f5a000] shadow-sm transition hover:bg-[#e59400]"
            aria-label="Home"
          >
            <div className="h-5 w-5 rounded-full border-2 border-white/90" />
          </Link>

          <nav className="flex flex-wrap items-center justify-end gap-4 sm:gap-6 md:gap-8" role="navigation" aria-label="Main">
            {NAV_LINKS.map(({ id, href, label }) => (
              <Link key={id} href={href} className={linkClass(id)}>
                {label}
              </Link>
            ))}
            <CTAButton>Book a Free Consultation</CTAButton>
          </nav>
        </header>
      </div>
      
      <div className="hero-gradient relative flex min-h-[calc(90vh-80px)] flex-col">
        <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center px-4 pt-8 pb-20 text-center sm:pt-12 lg:pt-16">
          {/* Your Full-Service Amazon Partner */}
                     <div className="flex items-center justify-center ">
                        <Image src={amazonIcon} alt="Badge Icon" width={60} height={60} />
                      <h3 className="text-black text-semibold">
                        Growth{" "}
                        <span className="text-sm font-medium text-[#FFA500]">
                          Business
                        </span>
                      </h3>
                    </div>
          

          <h1 className="mx-auto max-w-[900px] text-[32px] font-bold leading-[1.2] tracking-tight text-[#1f1f1f] sm:text-[42px] md:text-[48px] lg:text-[56px]">
            Turn Your Amazon Struggles into Success—Save Time,{" "}
            <span className="text-[#f5a000]">Maximize Profits!</span>
          </h1>

          <CTAButton className="mt-8 inline-block">Book a Free Consultation</CTAButton>
        </div>

      {/* Floating left card - tilted counter-clockwise */}
      <div className="absolute left-[5%] top-[45%] z-0 hidden w-[220px] max-w-[28vw] md:block lg:left-[8%] lg:w-[260px]">
        <div className="origin-center -rotate-[8deg] drop-shadow-lg transition hover:scale-105">
          <Image
            src="/assets/hero/left-card.png"
            alt="Total Incomes chart"
            width={260}
            height={180}
            className="h-auto w-full rounded-2xl object-contain"
            priority
          />
        </div>
      </div>

      {/* Floating right card - tilted clockwise */}
      <div className="absolute right-[5%] top-[42%] z-0 hidden w-[220px] max-w-[28vw] md:block lg:right-[8%] lg:w-[260px]">
        <div className="origin-center rotate-6 drop-shadow-lg transition hover:scale-105">
          <Image
            src="/assets/hero/right-card.png"
            alt="45k+ Users, 4.7 Rating"
            width={260}
            height={180}
            className="h-auto w-full rounded-2xl object-contain"
            priority
          />
        </div>
      </div>
      </div>
    </section>
  );
}