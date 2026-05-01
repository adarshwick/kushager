"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Globe, Target } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Personalized Plans",
    body: "Chess improvement is a personal journey. I craft a unique roadmap for each student — whether beginner, club player, or tournament competitor.",
  },
  {
    icon: BookOpen,
    title: "All Levels Welcome",
    body: "From a 30-year-old who simply loves chess, to an ambitious junior, to a top GM — I have the experience to meet you exactly where you are.",
  },
  {
    icon: Award,
    title: "Natural Style First",
    body: "I help students nurture their natural playing style — attacking or positional — while systematically closing gaps in their game.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    body: "Based in India, I work with students and national teams across Asia and worldwide through online coaching.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: bio ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#9a6e1a] text-xs tracking-[0.2em] uppercase mb-3">About</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] mb-6 leading-tight">
              A Coach Who Has Seen{" "}
              <span className="text-gold-gradient">Every Level</span> of the Game
            </h2>

            <div className="space-y-5 text-[#6b5c50] leading-relaxed">
              <p>
                I&apos;m Kushager Krishnater — a professional chess trainer from India with
                five years of experience helping students at every level of the game.
                I&apos;ve worked with complete beginners and with Super Grandmasters in the
                world top 20.
              </p>
              <p>
                I serve as the{" "}
                <strong className="text-[#1c1917]">Chief Openings Coach for Singapore&apos;s National Team</strong>,
                and I hold the distinction of being the{" "}
                <strong className="text-[#1c1917]">World&apos;s Youngest FIDE Trainer (FT)</strong>{" "}
                — a title awarded by the international chess federation for exceptional
                coaching credentials.
              </p>
              <p>
                My seconding and training experience includes GM Arjun Erigaisi
                (World No.&nbsp;3, Fide 2798), GM Vidit Gujarathi (World No.&nbsp;16), and
                Women&apos;s World Rapid Champion GM Koneru Humpy — giving me deep insight
                into what it takes to compete at the absolute peak of the game.
              </p>
              <p>
                Discussing chess with players of all levels has given me a rare
                understanding of how to tailor training for different stages of
                development. My goal is always the same: a plan that fits <em>you</em>.
              </p>
            </div>
          </motion.div>

          {/* ── Right: pillar cards ── */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-[#faf8f5] border border-[#e8e0d5] rounded-xl p-6 hover:border-[#9a6e1a]/40 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#9a6e1a]/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#9a6e1a]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-[#1c1917] font-semibold text-sm mb-2">{pillar.title}</h3>
                  <p className="text-[#a39589] text-sm leading-relaxed">{pillar.body}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
