"use client";

import { motion } from "framer-motion";
import { Award, Target, Users, Zap } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Personalized Training Plans",
    body: "No two players improve in the same way. Your plan is built around your games, your goals, your schedule, and the recurring mistakes that are holding you back.",
  },
  {
    icon: Users,
    title: "All Levels Welcome",
    body: "From beginners and adult improvers to ambitious juniors and titled players, the coaching is adapted to your current strength and learning style.",
  },
  {
    icon: Zap,
    title: "Natural Style First",
    body: "I help you develop your natural chess identity — attacking, positional, dynamic, or technical — while systematically fixing the gaps in your game.",
  },
  {
    icon: Award,
    title: "Elite Experience, Practical Teaching",
    body: "My work with grandmasters and national teams gives me elite-level insight, but every lesson is made practical, understandable, and useful for your level.",
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
              A Coach Who Understands{" "}
              <span className="text-gold-gradient">Every Stage</span> of Chess Improvement
            </h2>

            <div className="space-y-5 text-[#6b5c50] leading-relaxed">
              <p>
                I&apos;m IM Kushager Krishnater, a professional chess trainer from India
                and the World&apos;s Youngest FIDE Trainer. Over the past five years, I
                have worked with players across the full chess spectrum — from complete
                beginners and club players to national champions, grandmasters, and some
                of the strongest players in the world.
              </p>
              <p>
                My work as{" "}
                <strong className="text-[#1c1917]">Chief Openings Coach for Singapore&apos;s National Team</strong>{" "}
                and my seconding experience with players such as{" "}
                <strong className="text-[#1c1917]">Arjun Erigaisi, Vidit Gujrathi, Koneru Humpy, and Abhimanyu Puranik</strong>{" "}
                have given me a close look at how elite chess preparation really works.
                But strong coaching is not about copying what super-GMs do. It is about
                knowing what each student needs at their current stage.
              </p>
              <p>
                That is the foundation of my coaching. I study your games, understand
                your natural style, identify the patterns behind your mistakes, and build
                a practical training plan around you. Some students need sharper
                calculation. Some need better openings. Some need structure in the
                middlegame. Some need confidence, discipline, or a clearer way to study.
              </p>
              <p>
                My goal is simple: to help you make better decisions at the board and
                become a stronger, more complete chess player.
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
                  <p className="text-[#78695f] text-sm leading-relaxed">{pillar.body}</p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
