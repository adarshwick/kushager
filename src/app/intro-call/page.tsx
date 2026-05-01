"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Video } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactWidget from "@/components/ContactWidget";

const perks = [
  "Completely free — no commitment required",
  "Discuss your current level & goals",
  "Get Kushager's honest initial assessment",
  "See what a personalised training plan looks like",
];

function TidyCalEmbed() {
  useEffect(() => {
    const SCRIPT_SRC = "https://asset-tidycal.b-cdn.net/js/embed.js";
    if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return;
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <div
      className="tidycal-embed"
      data-path="kushager-krishnater/15-minute-discovery-call-with-im-kushager-krishnater"
    />
  );
}

export default function IntroCallPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1c1917]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-14 bg-white border-b border-[#e8e0d5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* Left: pitch */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#9a6e1a] text-xs tracking-[0.2em] uppercase mb-3">
                Free Introduction
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1c1917] mb-5 leading-tight">
                Book Your Free{" "}
                <span className="text-gold-gradient">15-Minute</span>{" "}
                Intro Call
              </h1>
              <p className="text-[#6b5c50] text-lg leading-relaxed mb-8">
                Pick a time that works for you. We&apos;ll talk through your chess
                background, your goals, and how a training plan would look — no
                strings attached.
              </p>

              <ul className="space-y-3 mb-8">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2.5">
                    <CheckCircle
                      size={16}
                      className="text-[#9a6e1a] flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <span className="text-[#6b5c50] text-sm">{perk}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-[#faf8f5] border border-[#e8e0d5] rounded-lg px-4 py-2.5">
                  <Clock size={14} className="text-[#9a6e1a]" />
                  <span className="text-[#6b5c50] text-sm">15 minutes</span>
                </div>
                <div className="flex items-center gap-2 bg-[#faf8f5] border border-[#e8e0d5] rounded-lg px-4 py-2.5">
                  <Video size={14} className="text-[#9a6e1a]" />
                  <span className="text-[#6b5c50] text-sm">Online · Google Meet or Zoom</span>
                </div>
              </div>
            </motion.div>

            {/* Right: who you'll meet */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#faf8f5] border border-[#e8e0d5] rounded-2xl p-8"
            >
              <p className="text-[#a39589] text-xs tracking-widest uppercase mb-5">Who you&apos;ll meet</p>
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#9a6e1a]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl text-[#9a6e1a]">♟</span>
                </div>
                <div>
                  <p className="text-[#1c1917] font-bold text-base leading-tight">IM Kushager Krishnater</p>
                  <p className="text-[#9a6e1a] text-xs mt-0.5">World&apos;s Youngest FIDE Trainer</p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-[#6b5c50]">
                <p>Coach to <strong className="text-[#1c1917]">GM Arjun Erigaisi (World No. 3)</strong> and Women&apos;s World Rapid Champion <strong className="text-[#1c1917]">GM Koneru Humpy</strong>.</p>
                <p>Chief Openings Coach for the <strong className="text-[#1c1917]">Singapore National Team</strong>.</p>
                <p>Author of <strong className="text-[#1c1917]">40+ published courses</strong> on Chessable, Modern-Chess, and TheChessWorld.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* TidyCal embed */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center"
          >
            <h2 className="text-2xl font-bold text-[#1c1917] mb-2">Choose a Time</h2>
            <p className="text-[#a39589] text-sm">All times shown in your local timezone.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl border border-[#e8e0d5] shadow-sm overflow-hidden p-4 md:p-8"
          >
            <TidyCalEmbed />
          </motion.div>
        </div>
      </section>

      <Footer />
      <ContactWidget />
    </main>
  );
}
