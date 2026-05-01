"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Users, Calendar } from "lucide-react";

const pressBadges = [
  { label: "Chessable" },
  { label: "Modern-Chess" },
  { label: "The Indian Express" },
  { label: "Times of India" },
];

const stats = [
  { icon: Star,     value: "5+",       label: "Years Coaching" },
  { icon: Users,    value: "100+",     label: "Students Trained" },
  { icon: Calendar, value: "World #3", label: "Highest-Rated Student" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background: camp image */}
      <div className="absolute inset-0">
        <Image
          src="/KushagerCamp.jpg"
          alt=""
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "78% center" }}
        />
        {/* Warm cream gradient — dense on left, fades to transparent right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(250,248,245,0.97) 0%, rgba(250,248,245,0.95) 28%, rgba(250,248,245,0.80) 44%, rgba(250,248,245,0.35) 60%, rgba(250,248,245,0.08) 76%, transparent 100%)",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#faf8f5] to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20">
        <div className="max-w-xl">

          {/* Press badges */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-2 mb-7"
          >
            <span className="text-[#a39589] text-xs tracking-widest uppercase">As seen on</span>
            {pressBadges.map((b) => (
              <span
                key={b.label}
                className="text-xs text-[#6b5c50] border border-[#e8e0d5] rounded px-3 py-1 bg-white/70 tracking-wide backdrop-blur-sm"
              >
                {b.label}
              </span>
            ))}
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.1] mb-5 text-[#1c1917]"
          >
            Train With the Coach Behind{" "}
            <span className="text-gold-gradient">World-Class</span>{" "}
            Grandmasters
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#6b5c50] text-lg leading-relaxed mb-2"
          >
            World&apos;s Youngest FIDE Trainer. Chief Openings Coach for Singapore&apos;s
            National Team. Coach to Arjun Erigaisi (World No.&nbsp;3) and Women&apos;s
            World Rapid Champion Koneru Humpy.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-[#a39589] text-sm mb-9"
          >
            Beginner, club player, or ambitious junior — I build a plan around <em>you</em>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="flex flex-col sm:flex-row items-start gap-3 mb-10"
          >
            <a
              href="/intro-call"
              className="group bg-[#9a6e1a] hover:bg-[#b8892d] text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg tracking-wide"
            >
              Book Free 15-Min Intro Call
              <span className="ml-2 inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="#about"
              className="text-[#9a6e1a] hover:text-[#b8892d] border border-[#9a6e1a]/40 hover:border-[#9a6e1a] text-base px-8 py-4 rounded-xl transition-all duration-200 tracking-wide bg-white/60 backdrop-blur-sm"
            >
              Learn More
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-8"
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <Icon size={15} className="text-[#9a6e1a]" strokeWidth={1.5} />
                <span className="text-xl font-bold text-[#1c1917]">{value}</span>
                <span className="text-[#a39589] text-[11px] tracking-widest uppercase">{label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
          className="w-px h-7 bg-gradient-to-b from-[#9a6e1a]/50 to-transparent mx-auto"
        />
      </motion.div>
    </section>
  );
}
