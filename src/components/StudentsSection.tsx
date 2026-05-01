"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ReactCountryFlag from "react-country-flag";

type Player = {
  name: string;
  countryCode: string;
  achievement: string;
  rating: string;
  image: string | null;
};

const featured: Player[] = [
  { name: "GM Arjun Erigaisi",    countryCode: "IN", achievement: "World No. 3",                    rating: "Fide 2798",      image: "/Arjun.jpg" },
  { name: "GM Vidit Gujarathi",   countryCode: "IN", achievement: "World No. 16",                   rating: "Fide 2737",      image: "/Vidit.jpg" },
  { name: "GM Koneru Humpy",      countryCode: "IN", achievement: "Women's World Rapid Champion",   rating: "Women's No. 1",  image: "/Koneru.jpg" },
  { name: "GM Abhimanyu Puranik", countryCode: "IN", achievement: "Elite Grandmaster",              rating: "Fide 2652",      image: "/Abhimanyu.jpg" },
  { name: "GM Jeffery Xiong",     countryCode: "US", achievement: "World Junior Champion 2016",     rating: "Peak Fide 2712", image: "/Jeffery.jpg" },
];

const others: Player[] = [
  { name: "GM Sankalp Gupta",       countryCode: "IN", achievement: "3 GM norms in 24 days",        rating: "2500+",      image: "/Sankalp.jpg" },
  { name: "GM Raja Rithvik",        countryCode: "IN", achievement: "3× National Age-Group Champion", rating: "Fide 2489", image: "/Raja.jpg" },
  { name: "GM Kevin Goh Wei Ming",  countryCode: "SG", achievement: "7× Singapore National Team",   rating: "Fide 2474",  image: "/Kevin.jpg" },
  { name: "IM Dushyant Sharma",     countryCode: "IN", achievement: "Punjab No. 1",                 rating: "Fide 2410",  image: "/Dushyant.jpg" },
  { name: "IM Krishna Teja",        countryCode: "IN", achievement: "Former Asian Youth Champion",  rating: "Fide 2359",  image: "/Krishna.jpg" },
];

function PlayerCard({ player, featured = false, index = 0 }: { player: Player; featured?: boolean; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className={`relative rounded-xl overflow-hidden group cursor-default transition-all duration-300
        ${featured ? "aspect-[3/4]" : "aspect-[4/5]"}
        ${featured
          ? "border border-[#c9a84c]/50 hover:border-[#9a6e1a] shadow-sm hover:shadow-md"
          : "border border-[#e8e0d5] hover:border-[#c9a84c]/60 hover:shadow-sm"
        }`}
    >
      {player.image ? (
        <Image
          src={player.image}
          alt={player.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="absolute inset-0 bg-[#f5f0e8] flex items-center justify-center">
          <span className="text-5xl text-[#e8e0d5]">♟</span>
        </div>
      )}

      <div
        className="absolute inset-0"
        style={{
          background: featured
            ? "linear-gradient(to top, rgba(20,15,10,0.95) 0%, rgba(20,15,10,0.5) 45%, transparent 75%)"
            : "linear-gradient(to top, rgba(20,15,10,0.92) 0%, rgba(20,15,10,0.4) 50%, transparent 75%)",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="flex items-center gap-1.5 mb-1">
          <ReactCountryFlag
            countryCode={player.countryCode}
            svg
            style={{ width: "14px", height: "11px", borderRadius: "2px" }}
            title={player.countryCode}
          />
          <span
            className={`text-[10px] font-semibold tracking-wide px-1.5 py-0.5 rounded ${
              featured
                ? "bg-[#c9a84c]/25 text-[#e8c96f]"
                : "bg-white/15 text-[#d4cfc8]"
            }`}
          >
            {player.rating}
          </span>
        </div>
        <p className="text-white font-bold text-sm leading-tight mb-1">{player.name}</p>
        <p className="text-[#c4bdb4] text-xs leading-snug">{player.achievement}</p>
      </div>
    </motion.div>
  );
}

export default function StudentsSection() {
  return (
    <section id="students" className="py-24 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-[#9a6e1a] text-xs tracking-[0.2em] uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] mb-4">
            Players I&apos;ve Worked With
          </h2>
          <p className="text-[#a39589] text-base max-w-xl">
            From World No. 3 to national champions — coaching and seconding
            experience across five years at every level of the game.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-4">
          {featured.map((p, i) => (
            <PlayerCard key={p.name} player={p} featured index={i} />
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {others.map((p, i) => (
            <PlayerCard key={p.name} player={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
