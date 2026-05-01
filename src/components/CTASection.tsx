"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, CheckCircle } from "lucide-react";

const perks = [
  "Completely free — no commitment",
  "Discuss your current level & goals",
  "Get Kushager's initial assessment",
  "Learn what a training plan looks like for you",
];

export default function CTASection() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden chess-bg bg-[#f5f0e8]">
      {/* Top fade */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#faf8f5] to-transparent pointer-events-none" />
      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#faf8f5] to-transparent pointer-events-none" />

      {/* Subtle gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(154,110,26,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-[#9a6e1a]/10 border border-[#9a6e1a]/25 rounded-full px-4 py-1.5 mb-6">
            <Calendar size={14} className="text-[#9a6e1a]" />
            <span className="text-[#9a6e1a] text-xs font-medium tracking-wide">
              Free Introduction
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1c1917] mb-4 leading-tight">
            Start Your Chess Journey{" "}
            <span className="text-gold-gradient">Today</span>
          </h2>

          <p className="text-[#6b5c50] text-lg mb-8 leading-relaxed">
            Book a free 15-minute call with Kushager. No strings attached — just
            an honest conversation about where you are and where you want to go.
          </p>

          {/* Perks */}
          <ul className="inline-flex flex-col items-start gap-3 mb-10 text-left">
            {perks.map((perk) => (
              <li key={perk} className="flex items-center gap-2.5">
                <CheckCircle
                  size={16}
                  className="text-[#9a6e1a] flex-shrink-0"
                  strokeWidth={2}
                />
                <span className="text-[#6b5c50] text-sm">{perk}</span>
              </li>
            ))}
          </ul>

          {/* Duration badge */}
          <div className="flex items-center justify-center gap-1.5 mb-8">
            <Clock size={14} className="text-[#a39589]" />
            <span className="text-[#a39589] text-sm">15 minutes · Online · Free</span>
          </div>

          {/* CTA button */}
          <a
            href="/intro-call"
            className="inline-flex items-center gap-2 bg-[#9a6e1a] hover:bg-[#b8892d] text-white font-bold text-lg px-10 py-5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg tracking-wide"
          >
            Book Your Free Call
            <span className="text-xl">→</span>
          </a>

          <p className="text-[#a39589] text-xs mt-5">
            Pick a time that works for you — free &amp; no commitment
          </p>
        </motion.div>
      </div>
    </section>
  );
}
