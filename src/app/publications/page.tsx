"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactWidget from "@/components/ContactWidget";
import { ExternalLink, BookOpen } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

type ChessableCourse = {
  title: string;
  date: string;
  url: string;
  cover: string;
};

type SimpleCourse = {
  title: string;
  date: string;
  url: string;
};

const chessableCourses: ChessableCourse[] = [
  {
    title: "The Best Move and How to Find It",
    date: "Jan 26, 2026",
    url: "https://www.chessable.com/the-best-move-and-how-to-find-it/course/367726/",
    cover: "https://www.chessable.com/img/books/3677261770637469.png",
  },
  {
    title: "Lifetime Repertoires: Kushager's & Surya's 1.e4 e5",
    date: "Sep 08, 2025",
    url: "https://www.chessable.com/lifetime-repertoires-kushagers-suryas-1e4-e5/course/324619/",
    cover: "https://www.chessable.com/img/books/3246191758544565.png",
  },
  {
    title: "Kushager's Killer Repertoire for Black Against 1.c4, 1.Nf3 and Sidelines",
    date: "Jun 23, 2025",
    url: "https://www.chessable.com/kushagers-killer-repertoire-for-black-against-1c4-1nf3-and-sidelines/course/265863/",
    cover: "https://www.chessable.com/img/books/2658631751893584.png",
  },
  {
    title: "1.d4 d5: Kushager's Killer Repertoire",
    date: "Oct 27, 2023",
    url: "https://www.chessable.com/1d4-d5-kushagers-killer-repertoire/course/177839/",
    cover: "https://www.chessable.com/img/books/1778391753182383.png",
  },
];

const theChessWorldCourses: SimpleCourse[] = [
  {
    title: "Essential Middlegames for Club Players with IM Kushager Krishnater",
    date: "Oct 2024",
    url: "https://thechessworld.com/store/product/essential-middlegames-for-club-players-with-im-kushager-krishnater/",
  },
  {
    title: "Modern French Defense: Complete Repertoire for Black with IM Kushager Krishnater",
    date: "Feb 2024",
    url: "https://thechessworld.com/store/product/modern-french-defense-complete-repertoire-for-black-with-im-kushager-krishnater/",
  },
];

const modernChessCourses: SimpleCourse[] = [
  { title: "Crushing the Sicilian - Grand Prix Attack", date: "Feb 20, 2026", url: "https://www.modern-chess.com/course/crushing-the-sicilian-grand-prix-attack/86342/" },
  { title: "Jobava London Reversed - Complete Repertoire for Black", date: "Feb 10, 2026", url: "https://www.modern-chess.com/course/jobava-london-reversed-complete-repertoire-for-black/46012/" },
  { title: "Italian Game for White - Evans Gambit", date: "Feb 4, 2026", url: "https://www.modern-chess.com/course/italian-game-for-white-evans-gambit/75814/" },
  { title: "Carlsbad Structure - Complete Repertoire for Black", date: "Feb 2, 2026", url: "https://www.modern-chess.com/course/carlsbad-structure-complete-repertoire-for-black/85748/" },
  { title: "1.d4 Nf6 2.c4 g6 3.f3 - Top-Level Repertoire for White", date: "Jan 27, 2026", url: "https://www.modern-chess.com/course/1-d4-nf6-2-c4-g6-3-f3-top-level-repertoire-for-white/25550/" },
  { title: "Play 3.Nc3 against the French Defense", date: "Jan 25, 2026", url: "https://www.modern-chess.com/course/play-3-nc3-against-the-french-defense/35484/" },
  { title: "Four Knights Sicilian - Expert Repertoire for Black", date: "Jan 11, 2026", url: "https://www.modern-chess.com/course/four-knights-sicilian-expert-repertoire-for-black/64989/" },
  { title: "Dangerous System against the Sicilian - The Concept with 3.Bc4", date: "Jan 2, 2026", url: "https://www.modern-chess.com/course/dangerous-system-against-the-sicilian-the-concept-with-3-bc4/64692/" },
  { title: "Benko Gambit for Black - Top-Level Repertoire", date: "Dec 16, 2025", url: "https://www.modern-chess.com/course/benko-gambit-for-black-top-level-repertoire/94197/" },
  { title: "Tarrasch Defense for Black - New Concept", date: "Aug 16, 2025", url: "https://www.modern-chess.com/course/tarrasch-defense-for-black-new-concept/90633/" },
  { title: "The Practical King's Indian Defense - Part 2", date: "Aug 11, 2025", url: "https://www.modern-chess.com/course/the-practical-kings-indian-defense-part-2/20501/" },
  { title: "The Practical King's Indian Defense - Part 1", date: "Aug 1, 2025", url: "https://www.modern-chess.com/course/the-practical-kings-indian-defense-part-1/60237/" },
  { title: "Sicilian Defense - Pin Variation for Black", date: "Jul 8, 2025", url: "https://www.modern-chess.com/course/sicilian-defense-pin-variaiton-for-black/19610/" },
  { title: "Ruy Lopez with ...Bc5 - Aggressive Repertoire for Black", date: "Jun 14, 2025", url: "https://www.modern-chess.com/course/ruy-lopez-with-bc5-aggressive-repertoire-for-black/19016/" },
  { title: "Spanish Four Knights for White - An Unexplored Direction", date: "Jun 9, 2025", url: "https://www.modern-chess.com/course/spanish-four-knights-for-white-an-unexplored-direction/38884/" },
  { title: "Queen's Gambit Declined - The Enterprising 5...Be6", date: "Apr 8, 2025", url: "https://www.modern-chess.com/course/queens-gambit-declined-the-enterprising-5be6/57564/" },
  { title: "Aggressive Repertoire against the Catalan, London & Jobava London", date: "Apr 4, 2025", url: "https://www.modern-chess.com/course/aggressive-repertoire-against-the-catalan-london--jobava-london/27465/" },
  { title: "The Easiest Semi-Slav Defense", date: "Apr 2, 2025", url: "https://www.modern-chess.com/course/the-easiest-semi-slav-defense/37399/" },
  { title: "The Unexplored 1.d4 Nf6 2.c4 e6 3.Bg5", date: "Mar 29, 2025", url: "https://www.modern-chess.com/course/the-unexplored-1d4-nf6-2c4-e6-3bg5/47333/" },
  { title: "The Revamped Nimzo-Indian for Black", date: "Mar 7, 2025", url: "https://www.modern-chess.com/course/the-revamped-nimzo-indian-for-black/66904/" },
  { title: "Sicilian Sidelines for 2...Nc6 Players", date: "Feb 17, 2025", url: "https://www.modern-chess.com/course/sicilian-sidelines-for-2nc6-players/56673/" },
  { title: "Play the Kalashnikov Sicilian", date: "Feb 11, 2025", url: "https://www.modern-chess.com/course/play-the-kalashnikov-sicilian/76541/" },
  { title: "Essential Middlegames for Club Players", date: "Dec 21, 2024", url: "https://www.modern-chess.com/course/essential-middlegames-for-club-players-with-im-kushager-krishnater/65716/" },
  { title: "The Practical French Defense - Top-Level Repertoire for Black", date: "Nov 11, 2024", url: "https://www.modern-chess.com/course/the-practical-french-defense-top-level-repertoire-for-black/55188/" },
  { title: "Italian Game - Top-Level Repertoire for White", date: "Sep 20, 2024", url: "https://www.modern-chess.com/course/italian-game-top-level-repertoire-for-white/94627/" },
  { title: "Top-Level Repertoire against French and Caro-Kann", date: "Jul 9, 2024", url: "https://www.modern-chess.com/course/top-level-repertoire-against-french-and-caro-kann/73868/" },
  { title: "Play the Open Sicilian - Part 3", date: "May 24, 2024", url: "https://www.modern-chess.com/course/play-the-open-sicilian-part-3/63340/" },
  { title: "Top-Level Repertoire against King's Indian and Grunfeld", date: "May 6, 2024", url: "https://www.modern-chess.com/course/top-level-repertoire-against-kings-indian-and-grunfeld/43175/" },
  { title: "Play the Open Sicilian - Part 2", date: "Mar 25, 2024", url: "https://www.modern-chess.com/course/play-the-open-sicilian-part-2/32647/" },
  { title: "Play the Open Sicilian - Part 1", date: "Mar 17, 2024", url: "https://www.modern-chess.com/course/play-the-open-sicilian-part-1/92548/" },
  { title: "1.d4 - Expert Repertoire against Queen's Indian, Bogo-Indian, Benko, Benoni, Dutch, and Sidelines", date: "Mar 10, 2024", url: "https://www.modern-chess.com/course/1-d4-expert-repertoire-against-queens-indian-bogo-indian-benko-benoni-dutch-and-sidelines/62449/" },
  { title: "Modern French Defense: Complete Repertoire for Black", date: "Mar 1, 2024", url: "https://www.modern-chess.com/course/modern-french-defense-complete-repertoire-for-black-with-im-kushager-krishnater/32350/" },
  { title: "Top-Level Repertoire against Queen's Gambit Declined - Part 2", date: "Jan 5, 2024", url: "https://www.modern-chess.com/course/top-level-repertoire-against-queens-gambit-declined-part-2/61855/" },
  { title: "Top-Level Repertoire against Queen's Gambit Declined - Part 1", date: "Jan 3, 2024", url: "https://www.modern-chess.com/course/top-level-repertoire-against-queens-gambit-declined-part-1/21822/" },
  { title: "Top-Level Repertoire against the Slav Defense", date: "Dec 3, 2023", url: "https://www.modern-chess.com/course/top-level-repertoire-against-the-slav-defense/21525/" },
  { title: "Ambitious Repertoire against the English Opening", date: "Nov 3, 2023", url: "https://www.modern-chess.com/course/ambitious-repertoire-against-the-english-opening/61261/" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({
  label,
  title,
  count,
  color,
  index,
}: {
  label: string;
  title: string;
  count: number;
  color: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="flex items-end gap-4 mb-8"
    >
      <div>
        <p className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color }}>
          {label}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1c1917]">{title}</h2>
      </div>
      <span
        className="mb-1 text-xs font-semibold px-2.5 py-1 rounded-full border"
        style={{ color, borderColor: `${color}40`, backgroundColor: `${color}12` }}
      >
        {count} courses
      </span>
    </motion.div>
  );
}

function ChessableCard({ course, index }: { course: ChessableCourse; index: number }) {
  return (
    <motion.a
      href={course.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="group flex flex-col bg-white border border-[#e8e0d5] rounded-xl overflow-hidden hover:border-[#9a6e1a]/50 hover:shadow-md transition-all duration-300"
    >
      {/* Cover image */}
      <div className="relative aspect-[3/4] bg-[#f5f0e8] overflow-hidden">
        <Image
          src={course.cover}
          alt={course.title}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#c9a84c] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <ExternalLink size={13} className="text-[#080808]" />
        </div>
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-[#9a6e1a] text-[10px] tracking-widest uppercase mb-2 font-medium">
          {course.date}
        </p>
        <h3 className="text-[#1c1917] text-sm font-semibold leading-snug flex-1 mb-3 group-hover:text-[#9a6e1a] transition-colors duration-200">
          {course.title}
        </h3>
        <span className="text-[#9a6e1a] text-xs flex items-center gap-1 font-medium">
          View on Chessable
          <ExternalLink size={11} />
        </span>
      </div>
    </motion.a>
  );
}

function ModernChessCard({ course, index }: { course: SimpleCourse; index: number }) {
  return (
    <motion.a
      href={course.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: (index % 9) * 0.04 }}
      className="group flex items-start gap-3 bg-white border border-[#e8e0d5] rounded-lg p-4 hover:border-blue-400/60 hover:shadow-sm transition-all duration-200"
    >
      <div className="flex-shrink-0 w-7 h-7 rounded-md bg-[#7eb5f5]/10 flex items-center justify-center mt-0.5">
        <BookOpen size={13} className="text-[#7eb5f5]" strokeWidth={1.5} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[#1c1917] text-sm font-medium leading-snug mb-1 group-hover:text-blue-600 transition-colors duration-200">
          {course.title}
        </p>
        <p className="text-[#78695f] text-[11px]">{course.date}</p>
      </div>
      <ExternalLink
        size={13}
        className="flex-shrink-0 text-[#e8e0d5] group-hover:text-blue-400 transition-colors duration-200 mt-1"
      />
    </motion.a>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1c1917]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-white border-b border-[#e8e0d5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <p className="text-[#9a6e1a] text-xs tracking-[0.2em] uppercase mb-3">
              Publications
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1c1917] mb-5 leading-tight">
              Chess Courses &{" "}
              <span className="text-gold-gradient">Publications</span>
            </h1>
            <p className="text-[#6b5c50] text-lg leading-relaxed">
              Opening theory, middlegame structures, and complete repertoires —
              published on the world&apos;s leading chess learning platforms.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-24 space-y-20 pt-16">

        {/* ── Chessable ── */}
        <section>
          <SectionHeader
            label="Platform"
            title="Chessable"
            count={chessableCourses.length}
            color="#9a6e1a"
            index={0}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {chessableCourses.map((course, i) => (
              <ChessableCard key={course.url} course={course} index={i} />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-[#e8e0d5]" />

        {/* ── Modern-Chess ── */}
        <section>
          <SectionHeader
            label="Platform"
            title="Modern-Chess"
            count={modernChessCourses.length}
            color="#2563eb"
            index={1}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {modernChessCourses.map((course, i) => (
              <ModernChessCard key={course.url} course={course} index={i} />
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="w-full h-px bg-[#e8e0d5]" />

        {/* ── TheChessWorld ── */}
        <section>
          <SectionHeader
            label="Platform"
            title="TheChessWorld"
            count={theChessWorldCourses.length}
            color="#16a34a"
            index={2}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {theChessWorldCourses.map((course, i) => (
              <motion.a
                key={course.url}
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.07 }}
                className="group flex items-start gap-3 bg-white border border-[#e8e0d5] rounded-lg p-4 hover:border-green-400/60 hover:shadow-sm transition-all duration-200"
              >
                <div className="flex-shrink-0 w-7 h-7 rounded-md bg-[#6fcf97]/10 flex items-center justify-center mt-0.5">
                  <BookOpen size={13} className="text-[#6fcf97]" strokeWidth={1.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[#1c1917] text-sm font-medium leading-snug mb-1 group-hover:text-green-700 transition-colors duration-200">
                    {course.title}
                  </p>
                  <p className="text-[#78695f] text-[11px]">{course.date}</p>
                </div>
                <ExternalLink
                  size={13}
                  className="flex-shrink-0 text-[#e8e0d5] group-hover:text-green-500 transition-colors duration-200 mt-1"
                />
              </motion.a>
            ))}
          </div>
        </section>

      </div>

      <Footer />
      <ContactWidget />
    </main>
  );
}
