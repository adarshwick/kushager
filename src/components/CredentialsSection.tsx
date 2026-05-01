"use client";

import { motion } from "framer-motion";
import { Trophy, Flag, BookOpen, Newspaper, Star } from "lucide-react";

const credentials = [
  {
    icon: Trophy,
    category: "Title",
    title: "World's Youngest FIDE Trainer",
    detail:
      "Certified by FIDE as a professional trainer at a record-breaking age, reflecting exceptional coaching credentials and chess understanding.",
  },
  {
    icon: Flag,
    category: "National Role",
    title: "Chief Openings Coach, Singapore National Team",
    detail:
      "Responsible for high-level opening preparation and training support for Singapore's national chess squad.",
  },
  {
    icon: Star,
    category: "Seconding",
    title: "Second to World-Class Grandmasters",
    detail:
      "Worked with elite players including Arjun Erigaisi, Vidit Gujrathi, Koneru Humpy, and Abhimanyu Puranik, helping with preparation, opening ideas, and competitive training.",
  },
  {
    icon: BookOpen,
    category: "Chessable",
    title: "Chessable Course Author",
    detail:
      "Published opening courses on Chessable, one of the world's leading chess learning platforms, bringing structured chess education to a global audience.",
  },
  {
    icon: BookOpen,
    category: "Modern-Chess",
    title: "Modern-Chess Author",
    detail:
      "Created advanced opening and middlegame material for ambitious players looking to improve their practical understanding.",
  },
  {
    icon: Newspaper,
    category: "Media",
    title: "Featured in Major Publications",
    detail:
      "Recognized across major chess and media platforms including Chessable, Modern-Chess, The Indian Express, and Times of India.",
  },
];

const CARD_COLORS: Record<string, string> = {
  Title: "#9a6e1a",
  "National Role": "#2563eb",
  Seconding: "#7c3aed",
  Chessable: "#16a34a",
  "Modern-Chess": "#ea580c",
  Media: "#0ea5e9",
};

export default function CredentialsSection() {
  return (
    <section id="credentials" className="py-24 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[#9a6e1a] text-xs tracking-[0.2em] uppercase mb-3">
            Credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] mb-4 max-w-2xl leading-tight">
            From National Teams to Club Players —{" "}
            <span className="text-gold-gradient">Coaching That Meets You Where You Are</span>
          </h2>
          <p className="text-[#78695f] text-base max-w-2xl leading-relaxed">
            Kushager&apos;s coaching background combines official FIDE recognition, national
            team preparation, published chess education, and direct work with world-class
            players. This gives his students access to a rare mix of opening depth,
            practical training structure, and high-level chess understanding.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {credentials.map((cred, i) => {
            const Icon = cred.icon;
            const accentColor = CARD_COLORS[cred.category] ?? "#9a6e1a";
            return (
              <motion.div
                key={cred.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="bg-white border border-[#e8e0d5] rounded-xl p-5 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${accentColor}15` }}
                  >
                    <Icon size={16} style={{ color: accentColor }} strokeWidth={1.5} />
                  </div>
                  <span
                    className="text-xs font-medium tracking-wide px-2 py-0.5 rounded"
                    style={{ color: accentColor, backgroundColor: `${accentColor}12` }}
                  >
                    {cred.category}
                  </span>
                </div>
                <h3 className="text-[#1c1917] text-sm font-semibold mb-2 leading-snug">
                  {cred.title}
                </h3>
                <p className="text-[#78695f] text-xs leading-relaxed">
                  {cred.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
