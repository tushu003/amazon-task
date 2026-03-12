"use client";

import React, { useSyncExternalStore, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "../ui/CTAButton";
import amazonIcon from "../../../public/assets/icons/amazon.png";
import logo from "../../../public/assets/icons/Logo.png";

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeId = useSyncExternalStore(
    subscribeToHash,
    getActiveFromHash,
    () => "",
  );

  const linkClass = (id: string) =>
    `cursor-pointer rounded px-2 py-2 text-sm sm:text-[15px] font-medium transition hover:underline focus:outline-none ${
      activeId === id
        ? "text-[#f5a000] hover:text-[#e59400]"
        : "text-[#6b6b6b] hover:text-[#1f1f1f]"
    }`;

  return (
    <section className="relative lg:min-h-[90vh] sm:min-h[60vh] overflow-hidden">
      <div className="hero-navbar">
        <header className="relative z-20 mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="#"
              className="flex h-16 w-16 shrink-0 items-center justify-center"
              aria-label="Home"
            >
              <div className="flex items-center gap-3">
                <Image src={logo} alt="Badge Icon" width={40} height={40} />
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center justify-end gap-8"
              role="navigation"
              aria-label="Main"
            >
              {NAV_LINKS.map(({ id, href, label }) => (
                <Link key={id} href={href} className={linkClass(id)}>
                  {label}
                </Link>
              ))}
              <CTAButton>Book a Free Consultation</CTAButton>
            </nav>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-md border border-[#e5e5e5] bg-white lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-[#1f1f1f]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="mt-4 rounded-2xl border border-[#ececec] bg-white p-4 shadow-lg lg:hidden">
              <nav
                className="flex flex-col gap-2"
                role="navigation"
                aria-label="Mobile Main"
              >
                {NAV_LINKS.map(({ id, href, label }) => (
                  <Link
                    key={id}
                    href={href}
                    className={`${linkClass(id)} block w-full text-left`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}

                <div className="pt-2">
                  <CTAButton className="w-full">
                    Book a Free Consultation
                  </CTAButton>
                </div>
              </nav>
            </div>
          )}
        </header>
      </div>

      <div className="hero-gradient relative flex min-h-[calc(90vh-80px)] flex-col">
        <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center px-4 pt-8 pb-16 text-center sm:px-6 sm:pt-10 sm:pb-20 lg:px-8 lg:pt-16">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <Image
              src={amazonIcon}
              alt="Badge Icon"
              width={60}
              height={60}
              className="h-auto w-10 sm:w-12 md:w-[60px]"
              priority
            />
            <h3 className="text-sm font-semibold text-black sm:text-base md:text-lg">
              Your Full Service{" "}
              <span className="text-sm font-medium text-[#FFA500] sm:text-base">
                Amazon Partner
              </span>
            </h3>
          </div>

          <h1 className="mx-auto mt-4 max-w-[900px] text-[30px] font-extrabold leading-[1.15] tracking-tight text-[#1f1f1f] sm:text-[40px] md:text-[48px] lg:text-[56px]">
            Turn Your Amazon Struggles
            <br className="hidden md:block" /> into Success—Save Time,
            <br className="hidden md:block" />{" "}
            <span className="text-[#f5a000]">Maximize Profits!</span>
          </h1>

          <CTAButton className="mt-6 inline-block w-full sm:mt-8 sm:w-auto">
            Book a Free Consultation
          </CTAButton>
        </div>

        <div className="absolute right-[46%] top-[22%] z-0 hidden w-[180px] max-w-[26vw] md:block lg:left-[8%] lg:top-[20%] lg:w-[220px] xl:w-[260px]">
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

        <div className="absolute right-[8%] top-[40%] z-0 hidden w-[180px] max-w-[26vw] md:block lg:right-[14%] lg:top-[26%] lg:w-[220px] xl:w-[260px]">
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
