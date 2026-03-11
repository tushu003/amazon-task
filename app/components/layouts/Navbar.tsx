import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/icons/Logo.png";

const navItems = [
  { label: "Services", href: "#", active: true },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between px-6 md:px-10">
        <Link href="/" className="shrink-0">
          <Image
            src={logo}
            alt="Company Logo"
            width={34}
            height={34}
            priority
            className="h-8 w-auto object-contain"
          />
        </Link>

        <div className="flex items-center gap-8 md:gap-10">
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[14px] font-medium transition-colors duration-200 ${
                  item.active
                    ? "text-orange-500"
                    : "text-neutral-700 hover:text-orange-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="#"
            className="inline-flex h-[44px] items-center justify-center rounded-full border-bl-2 border-[#171717] bg-[#f5a000] px-6 text-[13px] font-semibold text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            Book a Free Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}