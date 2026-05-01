"use client";

const footerGroups = [
  {
    heading: "About",
    links: [
      { label: "About Me", href: "#about" },
      { label: "Credentials", href: "#credentials" },
    ],
  },
  {
    heading: "Coaching",
    links: [
      { label: "Methodology", href: "#methodology" },
      { label: "Publications", href: "/publications" },
    ],
  },
  {
    heading: "Results",
    links: [
      { label: "Students", href: "#students" },
      { label: "Reviews", href: "#reviews" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#1c1917] border-t border-[#2e2925] py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
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
            <p className="text-[#78695f] text-xs leading-relaxed">
              World&apos;s Youngest FIDE Trainer · Chief Openings Coach, Singapore
              National Team
            </p>
            <a
              href="/intro-call"
              className="mt-1 inline-block bg-[#9a6e1a] hover:bg-[#b8892d] text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors self-start tracking-wide"
            >
              Book Free Intro Call →
            </a>
          </div>

          {/* Nav groups */}
          <div className="flex gap-12">
            {footerGroups.map((group) => (
              <div key={group.heading} className="flex flex-col gap-3">
                <span className="text-[#9a6e1a] text-[9px] tracking-[0.2em] uppercase font-semibold">
                  {group.heading}
                </span>
                {group.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[#78695f] hover:text-[#c9a84c] text-xs tracking-wide transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}

            <div className="flex flex-col gap-3">
              <span className="text-[#9a6e1a] text-[9px] tracking-[0.2em] uppercase font-semibold">
                More
              </span>
              <a
                href="/pricing"
                className="text-[#78695f] hover:text-[#c9a84c] text-xs tracking-wide transition-colors"
              >
                Pricing
              </a>
              <a
                href="#get-in-touch"
                className="text-[#78695f] hover:text-[#c9a84c] text-xs tracking-wide transition-colors"
              >
                Contact
              </a>
            </div>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-[#2e2925] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#a89080] text-xs">
            © {new Date().getFullYear()} Kushager Krishnater. All rights reserved.
          </p>
          <p className="text-[#a89080] text-xs">
            Professional Chess Coach · India
          </p>
        </div>
      </div>
    </footer>
  );
}
