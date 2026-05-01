"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Game Diagnosis First",
    body: "We begin by looking at your recent games to identify the real reasons you are losing points. It may be calculation, opening choices, poor piece placement, time pressure, endgame technique, or unclear decision-making.",
  },
  {
    num: "02",
    title: "Personalized Roadmap",
    body: "After understanding your strengths and weaknesses, I create a training direction for you. This may include opening work, calculation training, strategic themes, endgame practice, or tournament preparation.",
  },
  {
    num: "03",
    title: "Understanding Over Memorization",
    body: "Especially in openings, the goal is not to memorize endless lines. You will learn the ideas, structures, plans, and typical mistakes behind your repertoire so you can make good decisions even when the opponent leaves theory.",
  },
  {
    num: "04",
    title: "Practical Middlegame Training",
    body: "Many players know openings but struggle once the real game begins. We work on plans, pawn structures, weak squares, piece activity, attacking chances, defensive resources, and converting better positions.",
  },
  {
    num: "05",
    title: "Calculation and Decision-Making",
    body: "You will learn how to choose candidate moves, compare options, calculate forcing lines, avoid common blind spots, and make cleaner decisions under time pressure.",
  },
  {
    num: "06",
    title: "Homework and Follow-Up",
    body: "Improvement happens between lessons too. You receive practical tasks, positions, model games, or study directions so that each session leads to visible progress.",
  },
];

export default function MethodologySection() {
  return (
    <section id="methodology" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[#9a6e1a] text-xs tracking-[0.2em] uppercase mb-3">Teaching Methodology</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] mb-4 max-w-2xl leading-tight">
            A Training Plan Built Around{" "}
            <span className="text-gold-gradient">Your Games</span>, Not Generic Lessons
          </h2>
          <p className="text-[#78695f] text-base max-w-2xl leading-relaxed">
            Most players do not improve because they lack information. They improve when
            they understand what is going wrong in their own games and train those areas
            with structure. My coaching starts with your games, your decisions, and your
            recurring patterns — then turns them into a clear improvement plan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="bg-[#faf8f5] border border-[#e8e0d5] rounded-xl p-6 hover:border-[#9a6e1a]/40 hover:shadow-sm transition-all duration-300"
            >
              <span className="text-5xl font-bold text-[#9a6e1a]/12 leading-none block mb-4 select-none tabular-nums">
                {step.num}
              </span>
              <h3 className="text-[#1c1917] font-semibold text-sm mb-3 leading-snug">{step.title}</h3>
              <p className="text-[#78695f] text-sm leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
