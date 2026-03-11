
"use client";

import Link from "next/link";

type CTAButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
  className?: string;
  asButton?: boolean;
  onClick?: () => void;
};

const baseClass =
  "inline-flex min-h-[56px] cursor-pointer items-center justify-center rounded-full border-bl-3 bg-[#f5a000] px-8 text-base font-semibold text-white transition duration-200 focus:outline-none";

const variantClass = {
  light:
    "border-[#1f1f1f] shadow-[3px_3px_0_0_#1f1f1f] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_0_#1f1f1f]",
  dark: "border-white shadow-[3px_3px_0_0_#ffffff] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0_0_#ffffff]",
};

export default function CTAButton({
  href = "#contact",
  children,
  variant = "light",
  className = "",
  asButton = false,
  onClick,
}: CTAButtonProps) {
  const combinedClass = `${baseClass} ${variantClass[variant]} ${className}`.trim();

  if (asButton) {
    return (
      <button type="button" className={combinedClass} onClick={onClick}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={combinedClass}>
      {children}
    </Link>
  );
}