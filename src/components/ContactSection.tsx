"use client";

import { motion } from "framer-motion";

const contacts = [
  {
    label: "Email",
    display: "Send an Email",
    value: "Kushagerkrishnater@gmail.com",
    href: "mailto:Kushagerkrishnater@gmail.com",
    hoverColor: "#9a6e1a",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    display: "+91 93246 02814",
    value: "+91 93246 02814",
    href: "https://wa.me/919324602814",
    hoverColor: "#16a34a",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Lichess",
    display: "@Kushagerchess",
    value: "@Kushagerchess",
    href: "https://lichess.org/@/Kushagerchess",
    hoverColor: "#2563eb",
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 16l-1.447.724a1 1 0 0 0-.553.894V20h12v-2.382a1 1 0 0 0-.553-.894L16 16" />
        <path d="M12 2a4 4 0 0 0-2 7.465V12l-1 1h6l-1-1V9.465A4 4 0 0 0 12 2z" />
        <line x1="8" y1="20" x2="16" y2="20" />
      </svg>
    ),
  },
];

export default function ContactSection() {
  return (
    <section id="get-in-touch" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-[#9a6e1a] text-xs tracking-[0.2em] uppercase mb-3">
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1c1917] mb-4">
            Reach Out Directly
          </h2>
          <p className="text-[#78695f] text-base max-w-md">
            Prefer to message first? Find Kushager on any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group flex flex-col gap-4 bg-[#faf8f5] border border-[#e8e0d5] rounded-xl p-5 transition-all duration-300 hover:shadow-md"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${c.hoverColor}50`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "";
              }}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${c.hoverColor}12` }}
              >
                <span style={{ color: c.hoverColor }}>{c.icon}</span>
              </div>
              <div>
                <p className="text-[#78695f] text-xs tracking-widest uppercase mb-1">
                  {c.label}
                </p>
                <p className="text-[#1c1917] text-sm font-semibold leading-snug">
                  {c.display}
                </p>
                {c.display !== c.value && (
                  <p className="text-[#78695f] text-xs mt-0.5">{c.value}</p>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
