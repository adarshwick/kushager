"use client";

import { motion } from "framer-motion";
import { Trophy, Flag, BookOpen, Newspaper } from "lucide-react";

const credentials = [
  {
    icon: Trophy,
    category: "Title",
    title: "World's Youngest FIDE Trainer (FT)",
    detail:
      "Certified by FIDE — the international chess federation — as a fully qualified trainer at a record-breaking age.",
  },
  {
    icon: Flag,
    category: "National Role",
    title: "Chief Openings Coach — Singapore National Team",
    detail:
      "Responsible for opening preparation at the highest national level for Singapore's chess squad.",
  },
  {
    icon: Trophy,
    category: "Seconding",
    title: "GM Arjun Erigaisi — World No. 3, Fide 2798",
    detail:
      "Worked as second and openings coach to one of the world's strongest active players.",
  },
  {
    icon: Trophy,
    category: "Seconding",
    title: "GM Vidit Gujarathi — World No. 16, Fide 2737",
    detail:
      "Preparation and seconding work for one of India's leading grandmasters.",
  },
  {
    icon: Trophy,
    category: "Seconding",
    title: "GM Koneru Humpy — Women's World Rapid Champion",
    detail:
      "Training the reigning Women's World Rapid Champion and global chess icon.",
  },
  {
    icon: Trophy,
    category: "Seconding",
    title: "GM Abhimanyu Puranik — Fide 2652",
    detail:
      "Openings and preparation work with one of India's strongest grandmasters.",
  },
  {
    icon: BookOpen,
    category: "Publication",
    title: "Chessable Course Author",
    detail:
      "Published opening courses on Chessable, the world's leading chess learning platform.",
  },
  {
    icon: Newspaper,
    category: "Media",
    title: "Featured in Major Publications",
    detail:
      "Coverage in Modern-Chess, The Indian Express, and Times of India, among others.",
  },
];

const CARD_COLORS: Record<string, string> = {
  Title: "#9a6e1a",
  "National Role": "#2563eb",
  Seconding: "#7c3aed",
  Publication: "#16a34a",
  Media: "#ea580c",
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] mb-4">
            Elite Experience at Every Level
          </h2>
          <p className="text-[#a39589] text-base max-w-xl">
            From world-class seconding to national team roles to published
            courses — a track record built at the highest levels of chess.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {credentials.map((cred, i) => {
            const Icon = cred.icon;
            const accentColor = CARD_COLORS[cred.category] ?? "#9a6e1a";
            return (
              <motion.div
                key={cred.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
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
                <p className="text-[#a39589] text-xs leading-relaxed">
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
