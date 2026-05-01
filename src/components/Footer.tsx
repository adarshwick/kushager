"use client";

const links = [
  { label: "About", href: "#about" },
  { label: "Credentials", href: "#credentials" },
  { label: "Students", href: "#students" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#get-in-touch" },
  { label: "Free Intro Call", href: "/intro-call" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1c1917] border-t border-[#2e2925] py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[#c9a84c] text-xl">♟</span>
              <div className="flex flex-col leading-none gap-0.5">
                <span className="text-[#c9a84c] text-[9px] tracking-[0.18em] uppercase font-medium">
                  International Master
                </span>
                <span className="text-white font-bold text-sm tracking-wider uppercase">
                  Kushager Krishnater
                </span>
              </div>
            </div>
            <p className="text-[#6b5c50] text-xs max-w-xs text-center md:text-left">
              World&apos;s Youngest FIDE Trainer · Chief Openings Coach, Singapore
              National Team
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[#6b5c50] hover:text-[#c9a84c] text-xs tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 pt-6 border-t border-[#2e2925] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#3d3530] text-xs">
            © {new Date().getFullYear()} Kushager Krishnater. All rights reserved.
          </p>
          <p className="text-[#3d3530] text-xs">
            Professional Chess Coach · India
          </p>
        </div>
      </div>
    </footer>
  );
}
