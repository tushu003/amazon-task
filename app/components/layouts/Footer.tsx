import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { FaAtom } from "react-icons/fa6";
import Image from "next/image";
import logo from "../../../public/assets/icons/Logo.png";

type FooterLink = {
  id: number;
  label: string;
  href: string;
};

const footerLinks: FooterLink[] = [
  { id: 1, label: "Home", href: "#" },
  { id: 2, label: "About", href: "#about" },
  { id: 3, label: "Services", href: "#services" },
  { id: 4, label: "Why Choose Us", href: "#why-choose-us" },
  { id: 5, label: "Contact", href: "#contact" },
];

const legalLinks: FooterLink[] = [
  { id: 1, label: "Privacy Policy", href: "#" },
  { id: 2, label: "Terms & Conditions", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white">
      <div className="mx-auto max-w-[1440px] px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_0.7fr_0.9fr] lg:gap-20">
          <div className="max-w-[420px]">
            <div className="flex items-center gap-3">
              <Image src={logo} alt="Badge Icon" width={40} height={40} />
            </div>

            <p className="mt-4 text-[15px] leading-7 text-[#d2d2d2]">
              FINTRIXX – Your Amazon Growth Partner Since 2016, we boost Amazon
              success with expert SEO, PPC, and growth strategies.
            </p>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold text-white">Home</h3>

            <ul className="mt-5 space-y-4">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-[#d2d2d2] transition hover:text-[#f5a000]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[20px] font-semibold text-white">Contact</h3>

            <div className="mt-5 flex items-start gap-3 text-[#d2d2d2]">
              <FiMail className="mt-1 text-[18px]" />
              <a
                href="mailto:leadsbridgedemo@example.com"
                className="text-[15px] transition hover:text-[#f5a000]"
              >
                leadsbridgedemo@example.com
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-8 text-[14px] text-[#c8c8c8] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2025 Copyright Amazon</p>

          <div className="flex flex-wrap items-center gap-6 sm:gap-8">
            {legalLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="transition hover:text-[#f5a000]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
