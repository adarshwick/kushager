"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const anchorLinks = [
  { label: "About", href: "#about" },
  { label: "Credentials", href: "#credentials" },
  { label: "Students", href: "#students" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#get-in-touch" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const p = isHome ? "" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <a href="/" className="flex items-center gap-2.5 group">
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
        <div className="hidden md:flex items-center gap-6">
          {anchorLinks.map((link) => (
            <a
              key={link.label}
              href={`${p}${link.href}`}
              className="text-[#6b5c50] hover:text-[#9a6e1a] text-sm tracking-wide transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/publications"
            className={`text-sm tracking-wide transition-colors duration-200 ${
              pathname === "/publications"
                ? "text-[#9a6e1a] font-medium"
                : "text-[#6b5c50] hover:text-[#9a6e1a]"
            }`}
          >
            Publications
          </a>
          <a
            href="/intro-call"
            className="bg-[#9a6e1a] hover:bg-[#b8892d] text-white text-sm font-semibold px-5 py-2 rounded-lg transition-all duration-200 tracking-wide shadow-sm hover:shadow-md"
          >
            Free Intro Call
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
            <div className="flex flex-col px-6 py-5 gap-4">
              {anchorLinks.map((link) => (
                <a
                  key={link.label}
                  href={`${p}${link.href}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#6b5c50] hover:text-[#9a6e1a] text-sm tracking-wide transition-colors py-1 border-b border-[#f0ebe3] last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/publications"
                onClick={() => setMenuOpen(false)}
                className={`text-sm tracking-wide transition-colors py-1 border-b border-[#f0ebe3] ${
                  pathname === "/publications"
                    ? "text-[#9a6e1a] font-medium"
                    : "text-[#6b5c50] hover:text-[#9a6e1a]"
                }`}
              >
                Publications
              </a>
              <a
                href="/intro-call"
                onClick={() => setMenuOpen(false)}
                className="bg-[#9a6e1a] hover:bg-[#b8892d] text-white text-sm font-semibold px-5 py-3 rounded-lg text-center transition-all mt-1"
              >
                Free Intro Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
