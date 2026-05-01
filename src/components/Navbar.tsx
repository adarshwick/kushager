"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

type NavItem = { label: string; desc: string; href: string };
type NavGroup = { label: string; items: NavItem[] };

const navGroups: NavGroup[] = [
  {
    label: "About",
    items: [
      { label: "About Me", desc: "Background, philosophy, and training approach", href: "#about" },
      { label: "Credentials", desc: "FIDE title, national roles, and publications", href: "#credentials" },
    ],
  },
  {
    label: "Results",
    items: [
      { label: "Students", desc: "Milestones, titles, and rating gains", href: "#students" },
      { label: "Reviews", desc: "Testimonials from GMs and club players", href: "#reviews" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<number | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const p = isHome ? "" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleGroupEnter(i: number) {
    if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    setOpenGroup(i);
  }

  function handleGroupLeave() {
    closeTimerRef.current = setTimeout(() => setOpenGroup(null), 120);
  }

  function resolveHref(href: string) {
    return href.startsWith("#") ? `${p}${href}` : href;
  }

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-[#e8e0d5] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16">

        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <span className="text-[#9a6e1a] text-xl font-bold leading-none">♟</span>
          <div className="flex flex-col leading-none gap-0.5">
            <span className="text-[#9a6e1a] text-[9px] tracking-[0.18em] uppercase font-medium">
              International Master
            </span>
            <span className="text-[#1c1917] font-bold text-sm tracking-wider uppercase">
              Kushager Krishnater
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navGroups.map((group, i) => (
            <div
              key={group.label}
              className="relative"
              onMouseEnter={() => handleGroupEnter(i)}
              onMouseLeave={handleGroupLeave}
            >
              <button
                className={`flex items-center gap-1 text-sm tracking-wide px-3 py-2 rounded-lg transition-colors duration-200 ${
                  openGroup === i ? "text-[#9a6e1a]" : "text-[#6b5c50] hover:text-[#9a6e1a]"
                }`}
              >
                {group.label}
                <ChevronDown
                  size={13}
                  className={`transition-transform duration-200 ${openGroup === i ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {openGroup === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.14 }}
                    className="absolute top-full left-0 mt-1.5 w-60 bg-white border border-[#e8e0d5] rounded-xl shadow-lg overflow-hidden"
                  >
                    {group.items.map((item) => (
                      <a
                        key={item.label}
                        href={resolveHref(item.href)}
                        className="flex flex-col gap-0.5 px-4 py-3 hover:bg-[#faf8f5] transition-colors duration-150 group border-b border-[#f0ebe3] last:border-0"
                        onClick={() => setOpenGroup(null)}
                      >
                        <span className="text-[#1c1917] text-sm font-medium group-hover:text-[#9a6e1a] transition-colors">
                          {item.label}
                        </span>
                        <span className="text-[#78695f] text-xs leading-snug">{item.desc}</span>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <a
            href={`${p}#methodology`}
            className="text-[#6b5c50] hover:text-[#9a6e1a] text-sm tracking-wide px-3 py-2 rounded-lg transition-colors duration-200"
          >
            Methodology
          </a>

          <a
            href="/publications"
            className={`text-sm tracking-wide px-3 py-2 rounded-lg transition-colors duration-200 ${
              pathname === "/publications"
                ? "text-[#9a6e1a] font-medium"
                : "text-[#6b5c50] hover:text-[#9a6e1a]"
            }`}
          >
            Publications
          </a>

          <a
            href={`${p}#get-in-touch`}
            className="text-[#6b5c50] hover:text-[#9a6e1a] text-sm tracking-wide px-3 py-2 rounded-lg transition-colors duration-200"
          >
            Contact
          </a>

          <a
            href="/intro-call"
            className="ml-3 bg-[#9a6e1a] hover:bg-[#b8892d] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 tracking-wide shadow-sm hover:shadow-md"
          >
            Book Free Call
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#9a6e1a] p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-[#e8e0d5] shadow-lg overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-0.5">
              {navGroups.map((group, i) => (
                <div key={group.label}>
                  <button
                    className="w-full flex items-center justify-between py-3 border-b border-[#f0ebe3]"
                    onClick={() => setExpandedMobile(expandedMobile === i ? null : i)}
                  >
                    <span className="text-[#9a6e1a] text-[10px] tracking-[0.2em] uppercase font-semibold">
                      {group.label}
                    </span>
                    <ChevronDown
                      size={13}
                      className={`text-[#9a6e1a] transition-transform duration-200 ${
                        expandedMobile === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedMobile === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="overflow-hidden"
                      >
                        {group.items.map((item) => (
                          <a
                            key={item.label}
                            href={resolveHref(item.href)}
                            onClick={() => { setMenuOpen(false); setExpandedMobile(null); }}
                            className="flex flex-col gap-0.5 pl-3 pr-1 py-2.5 border-b border-[#f8f4ef] last:border-0"
                          >
                            <span className="text-[#1c1917] text-sm font-medium">{item.label}</span>
                            <span className="text-[#78695f] text-xs">{item.desc}</span>
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              <a
                href={`${p}#methodology`}
                onClick={() => setMenuOpen(false)}
                className="text-[#6b5c50] text-sm tracking-wide py-3 border-b border-[#f0ebe3]"
              >
                Methodology
              </a>

              <a
                href="/publications"
                onClick={() => setMenuOpen(false)}
                className={`text-sm tracking-wide py-3 border-b border-[#f0ebe3] ${
                  pathname === "/publications"
                    ? "text-[#9a6e1a] font-medium"
                    : "text-[#6b5c50]"
                }`}
              >
                Publications
              </a>

              <a
                href={`${p}#get-in-touch`}
                onClick={() => setMenuOpen(false)}
                className="text-[#6b5c50] text-sm tracking-wide py-3 border-b border-[#f0ebe3]"
              >
                Contact
              </a>

              <a
                href="/intro-call"
                onClick={() => setMenuOpen(false)}
                className="bg-[#9a6e1a] hover:bg-[#b8892d] text-white text-sm font-semibold px-5 py-3 rounded-lg text-center transition-all mt-3"
              >
                Book Free Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
