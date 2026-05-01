"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { Play, X, Quote } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

type VideoReview = {
  kind: "video";
  id: string;
  wistiaId: string;
  aspect: number;
  poster: string;
  reviewerName: string;
  reviewerTitle: string;
};

type TextReview = {
  kind: "text";
  id: string;
  reviewerName: string;
  reviewerTitle: string;
  quote: string;
  context?: string;
  source?: string;
};

const videoReviews: VideoReview[] = [
  {
    kind: "video",
    id: "v-vidit",
    wistiaId: "70gxysmmue",
    aspect: 0.5660377358490566,
    poster: "/Vidit.jpg",
    reviewerName: "GM Vidit Gujarathi",
    reviewerTitle: "World No. 16 · Fide 2737",
  },
  {
    kind: "video",
    id: "v-abhimanyu",
    wistiaId: "wmtfrmw8yi",
    aspect: 1.797752808988764,
    poster: "/Abhimanyu.jpg",
    reviewerName: "GM Abhimanyu Puranik",
    reviewerTitle: "Grandmaster · Fide 2652",
  },
];

const textReviews: TextReview[] = [
  {
    kind: "text",
    id: "t-humpy",
    reviewerName: "GM Koneru Humpy",
    reviewerTitle: "Women's World Rapid Champion",
    quote: "I was able to do well thanks to my second, IM Kushager Krishater, who has worked hard with sleepless nights.",
    context: "Stated after winning Silver at the Women's Chess World Cup",
    source: "Times of India",
  },
  {
    kind: "text",
    id: "t-sankalp",
    reviewerName: "Sankalp Gupta",
    reviewerTitle: "Grandmaster · Quickest Indian ever to score 3 Grandmaster Norms",
    quote: "Kushager is a highly sought-after Theoretician. He found many interesting ideas which helped in critical games in getting my GM norms.",
  },
  {
    kind: "text",
    id: "t-rithvik",
    reviewerName: "Raja Rithvik",
    reviewerTitle: "Grandmaster · 3× National Champion",
    quote: "I am very glad that I started working with Kushager. He has in-depth knowledge and a lot of creative ideas for all kinds of openings. His opening recommendations are practical and very thoughtful. I'm sure that studying and playing his suggestions will benefit me a lot. Working with Kushager will definitely help you grow as a chess player.",
  },
  {
    kind: "text",
    id: "t-krishna",
    reviewerName: "Krishna Teja",
    reviewerTitle: "Former Asian Youth Champion · International Master",
    quote: "Kushager brought me an arsenal of unique & challenging opening ideas which helped me win a lot of games. His explanation is spot-on & helps me understand the complex positions very quickly. I would highly recommend Kushager as a coach.",
  },
  {
    kind: "text",
    id: "t-kevin",
    reviewerName: "Kevin Goh Wei Ming",
    reviewerTitle: "Grandmaster · Vice-President, Singapore Chess National Federation",
    quote: "On behalf of the Singapore team, I would like to extend my thanks and gratitude to Kushager for his invaluable contribution to our preparation during this chess Olympiad. Kushager worked very hard to provide us with solutions against all of our opponents. Thanks to Kushager, we have a glimpse of what professional preparation is like. We wish him all the best for his academy!",
  },
  {
    kind: "text",
    id: "t-dushyant",
    reviewerName: "Dushyant Sharma",
    reviewerTitle: "Punjab No. 1 · International Master",
    quote: "I have known Kushager since a long time. He has highly valuable insights about the strategies & tactics of the game. His vision and ideas are particularly distinct & have assisted me in taking my chess to the next level.",
  },
];

// ─── Video card ───────────────────────────────────────────────────────────────

function VideoCard({ review, index, onClick }: { review: VideoReview; index: number; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onClick={onClick}
      className="flex flex-col rounded-xl border border-[#e8e0d5] bg-white overflow-hidden cursor-pointer group hover:border-[#9a6e1a]/60 hover:shadow-md transition-all duration-300"
    >
      {/* Poster */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <Image
          src={review.poster}
          alt={review.reviewerName}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ objectPosition: "center 20%" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(10,8,5,0.75) 0%, rgba(10,8,5,0.25) 55%, transparent 85%)" }}
        />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 rounded-full bg-[#9a6e1a] flex items-center justify-center shadow-xl"
          >
            <Play size={20} fill="white" className="text-white ml-0.5" />
          </motion.div>
        </div>

        {/* VIDEO badge */}
        <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm rounded px-2 py-0.5 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          <span className="text-white text-[10px] tracking-wide font-medium">VIDEO</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex-1">
          <p className="text-[#1c1917] font-bold text-sm leading-snug">{review.reviewerName}</p>
          <p className="text-[#4a3f38] text-xs mt-0.5 leading-snug">{review.reviewerTitle}</p>
        </div>
        <p className="text-[#9a6e1a] text-xs mt-4 flex items-center gap-1.5 font-medium">
          <Play size={9} fill="currentColor" className="flex-shrink-0" />
          Watch testimonial
        </p>
      </div>
    </motion.div>
  );
}

// ─── Text card ────────────────────────────────────────────────────────────────

function TextCard({ review, index }: { review: TextReview; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex flex-col rounded-xl border border-[#e8e0d5] bg-white p-6 hover:border-[#9a6e1a]/40 hover:shadow-sm transition-all duration-300"
    >
      {review.context && (
        <div className="inline-flex items-center gap-1.5 bg-[#9a6e1a]/8 border border-[#9a6e1a]/20 rounded-full px-3 py-1 mb-4 self-start">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9a6e1a] flex-shrink-0" />
          <span className="text-[#9a6e1a] text-[10px] tracking-wide font-medium">{review.context}</span>
        </div>
      )}

      <Quote size={26} className="text-[#9a6e1a]/25 mb-4 flex-shrink-0" strokeWidth={1} />

      <blockquote className="text-[#1c1917] text-sm leading-relaxed italic flex-1 mb-5">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      <div className="mt-auto">
        <div className="w-8 h-px bg-[#9a6e1a]/30 mb-3" />
        <p className="text-[#1c1917] text-sm font-semibold leading-snug">{review.reviewerName}</p>
        <p className="text-[#4a3f38] text-xs mt-0.5 leading-snug">{review.reviewerTitle}</p>
        {review.source && (
          <p className="text-[#c9a84c] text-[10px] mt-2 tracking-wide uppercase font-medium">
            — {review.source}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// ─── Wistia modal ─────────────────────────────────────────────────────────────

function WistiaModal({ review, onClose }: { review: VideoReview; onClose: () => void }) {
  const isPortrait = review.aspect < 1;

  return (
    <Dialog.Root open onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
          />
        </Dialog.Overlay>

        <Dialog.Content asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className={`fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] bg-[#0f0f0f] rounded-2xl border border-[#2a2a2a] overflow-hidden shadow-2xl ${
              isPortrait ? "max-w-xs" : "max-w-3xl"
            }`}
          >
            <div className="w-full">
              <wistia-player
                media-id={review.wistiaId}
                aspect={review.aspect.toString()}
                style={{ display: "block", width: "100%" }}
              />
            </div>

            <div className="p-4 flex items-start justify-between gap-4">
              <div>
                <p className="text-white font-semibold text-sm">{review.reviewerName}</p>
                <p className="text-[#8a8a8a] text-xs mt-0.5">{review.reviewerTitle}</p>
              </div>
              <Dialog.Close asChild>
                <button
                  className="flex-shrink-0 w-9 h-9 rounded-full border border-[#2a2a2a] hover:border-[#9a6e1a] flex items-center justify-center text-[#8a8a8a] hover:text-[#9a6e1a] transition-all"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </Dialog.Close>
            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function VideoCarousel() {
  const [selectedVideo, setSelectedVideo] = useState<VideoReview | null>(null);

  return (
    <section id="reviews" className="py-24 bg-[#faf8f5] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 80% 40% at 50% 50%, rgba(154,110,26,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#9a6e1a] text-xs tracking-[0.2em] uppercase mb-3">What GMs Say</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] mb-4">Hear It From the Players</h2>
          <p className="text-[#78695f] text-base max-w-xl">
            Grandmasters, World Champions, and national champions share their
            experience training and working with Kushager.
          </p>
        </motion.div>

        {/* Video row: always 2 columns */}
        <div className="grid grid-cols-2 gap-5 mb-5">
          {videoReviews.map((v, i) => (
            <VideoCard key={v.id} review={v} index={i} onClick={() => setSelectedVideo(v)} />
          ))}
        </div>

        {/* Text testimonials: 3-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {textReviews.map((t, i) => (
            <TextCard key={t.id} review={t} index={i} />
          ))}
        </div>
      </div>

      {/* Wistia modal */}
      <AnimatePresence>
        {selectedVideo && (
          <WistiaModal review={selectedVideo} onClose={() => setSelectedVideo(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
