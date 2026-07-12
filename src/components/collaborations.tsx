"use client";

import { motion } from "motion/react";
import { collaborators } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

const genres = [
  {
    genre: "HIP-HOP",
    stat: "300K+",
    statLabel: "зрителей",
    desc: "Барабанщик Скриптонита — сотни тысяч на концертах по всей России и СНГ.",
    tone: "bg-hot",
    textColor: "text-fg",
    rotate: -1.5,
  },
  {
    genre: "JAZZ & FUSION",
    stat: "40+",
    statLabel: "стран",
    desc: "Оркестр Игоря Бутмана, Zoltan Lantos — мировые гастроли, джазовые фестивали.",
    tone: "bg-electric",
    textColor: "text-bg",
    rotate: 1.2,
  },
  {
    genre: "ROCK & WORLD",
    stat: "20+",
    statLabel: "лет опыта",
    desc: "Joe Lynn Turner, Steve Turre, Karl Frierson — рок-сцена и world music.",
    tone: "bg-yellow",
    textColor: "text-bg",
    rotate: -1,
  },
];

const chipRotate = [-3, 2, -1, 3, -2, 1.5, -2.5, 2, -1.5, 3];

export function Collaborations() {
  return (
    <section
      id="collabs"
      className="relative overflow-hidden border-t-2 border-fg bg-bg py-24 md:py-32"
    >
      <span aria-hidden className="wm-number pointer-events-none absolute top-0 -right-6 text-[26vw]">
        03
      </span>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <motion.span
          initial={{ opacity: 0, y: 14, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: -3 }}
          viewport={{ once: true }}
          className="sticker w-fit bg-yellow text-bg"
        >
          Коллаборации
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, ease }}
          className="font-display mt-5 text-[clamp(3rem,9vw,7rem)] text-fg"
        >
          СЦЕНЫ <span className="mark rotate-1 bg-hot text-fg">МИРА</span>
        </motion.h2>

        {/* artist chips */}
        <div className="mt-12 flex flex-wrap gap-3">
          {collaborators.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 12, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: chipRotate[i % chipRotate.length] }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -5, rotate: 0, scale: 1.08 }}
              className="border-2 border-fg bg-bg-elevated px-5 py-2.5 font-cond text-sm font-semibold uppercase tracking-wide text-fg cursor-default"
            >
              {name}
            </motion.span>
          ))}
        </div>

        {/* genre cards — each with a stat number */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {genres.map((card, i) => (
            <motion.article
              key={card.genre}
              initial={{ opacity: 0, y: 30, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: card.rotate }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease }}
              whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
              className="relative overflow-hidden border-2 border-fg bg-bg-elevated shadow-[8px_8px_0_0_var(--fg)]"
            >
              {/* colored header band */}
              <div className={`flex items-center justify-between px-6 py-4 ${card.tone}`}>
                <span className={`font-display text-sm ${card.textColor}`}>0{i + 1}</span>
                <span className={`font-display text-2xl ${card.textColor}`}>{card.stat}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-fg md:text-3xl">{card.genre}</h3>
                <p className={`font-cond text-xs font-semibold uppercase tracking-wider ${card.tone === "bg-hot" ? "text-hot" : card.tone === "bg-electric" ? "text-electric" : "text-yellow"}`}>
                  {card.statLabel}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-fg/70">{card.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
