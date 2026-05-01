"use client";

import { motion } from "framer-motion";
import { CheckCircle, CreditCard, Building2, Repeat, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactWidget from "@/components/ContactWidget";

const includes = [
  "1-on-1 live session via Google Meet or Zoom",
  "Game analysis tailored to your own positions",
  "Personalized opening preparation and repertoire work",
  "Structured homework and study directions",
  "Follow-up support on assigned material",
  "Progress review across sessions",
];

const paymentMethods = [
  { icon: Globe,     label: "PayPal",               desc: "Accepted worldwide" },
  { icon: CreditCard, label: "Credit / Debit Card", desc: "Visa, Mastercard & more" },
  { icon: Repeat,    label: "Wise",                 desc: "Low-fee international transfers" },
  { icon: Building2, label: "Bank Transfer",        desc: "Direct transfer available" },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#faf8f5] text-[#1c1917]">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-white border-b border-[#e8e0d5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* Left: pitch */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-[#9a6e1a] text-xs tracking-[0.2em] uppercase mb-3">Pricing</p>
              <h1 className="text-4xl md:text-5xl font-bold text-[#1c1917] mb-5 leading-tight">
                Straightforward Coaching,{" "}
                <span className="text-gold-gradient">One Clear Rate</span>
              </h1>
              <p className="text-[#6b5c50] text-lg leading-relaxed mb-8">
                Every session is built around your games and your goals. No packages
                to choose, no upsells — just focused, personalised coaching at a
                single hourly rate.
              </p>

              <ul className="space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle
                      size={16}
                      className="text-[#9a6e1a] flex-shrink-0 mt-0.5"
                      strokeWidth={2}
                    />
                    <span className="text-[#4a3f38] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Right: rate card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="bg-[#faf8f5] border border-[#e8e0d5] rounded-2xl p-8">
                {/* Rate */}
                <div className="mb-8 pb-8 border-b border-[#e8e0d5]">
                  <p className="text-[#78695f] text-xs tracking-widest uppercase mb-3">Hourly Rate</p>
                  <div className="flex items-end gap-2 mb-2">
                    <span className="text-5xl font-bold text-[#1c1917]">$60</span>
                    <span className="text-[#78695f] text-base mb-2">/ hour</span>
                  </div>
                  <p className="text-[#6b5c50] text-sm leading-relaxed">
                    Sessions are typically 60 minutes. Longer sessions can be
                    arranged and are billed proportionally.
                  </p>
                </div>

                {/* Payment methods */}
                <div className="mb-8">
                  <p className="text-[#78695f] text-xs tracking-widest uppercase mb-4">Payment Methods</p>
                  <div className="grid grid-cols-2 gap-3">
                    {paymentMethods.map(({ icon: Icon, label, desc }) => (
                      <div
                        key={label}
                        className="flex items-center gap-3 bg-white border border-[#e8e0d5] rounded-xl px-4 py-3"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#9a6e1a]/10 flex items-center justify-center flex-shrink-0">
                          <Icon size={14} className="text-[#9a6e1a]" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-[#1c1917] text-xs font-semibold leading-tight">{label}</p>
                          <p className="text-[#78695f] text-[10px] leading-tight mt-0.5">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <a
                  href="/intro-call"
                  className="block w-full bg-[#9a6e1a] hover:bg-[#b8892d] text-white font-bold text-sm px-6 py-4 rounded-xl text-center transition-all duration-200 shadow-sm hover:shadow-md tracking-wide"
                >
                  Book Free 15-Min Intro Call →
                </a>
                <p className="text-center text-[#78695f] text-xs mt-3">
                  No payment needed to book the intro call
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Not ready CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#9a6e1a] text-xs tracking-[0.2em] uppercase mb-3">Not ready yet?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] mb-4 leading-tight">
              Start with a Free{" "}
              <span className="text-gold-gradient">15-Minute Call</span>
            </h2>
            <p className="text-[#6b5c50] text-base leading-relaxed mb-8 max-w-xl mx-auto">
              Not sure if coaching is right for you right now? Book a free intro call.
              We&apos;ll talk through your level, your goals, and what a training plan
              would look like — no commitment, no payment.
            </p>
            <a
              href="/intro-call"
              className="inline-block bg-[#9a6e1a] hover:bg-[#b8892d] text-white font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg tracking-wide"
            >
              Book Free Intro Call →
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
      <ContactWidget />
    </main>
  );
}
