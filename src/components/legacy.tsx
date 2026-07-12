"use client";

import { motion } from "motion/react";
import { awards, endorsements } from "@/lib/content";
import { Ticker } from "./ticker";

const ease = [0.16, 1, 0.3, 1] as const;

const chipTones = ["bg-electric text-bg", "bg-hot text-fg", "bg-yellow text-bg"] as const;
const chipRotate = [-3, 2, -2, 3, -1];

export function Legacy() {
  return (
    <section
      id="legacy"
      className="relative overflow-hidden border-t-2 border-fg bg-bg-elevated"
    >
      <span
        aria-hidden
        className="wm-number pointer-events-none absolute -left-4 bottom-0 text-[30vw]"
      >
        02
      </span>

      {/* header */}
      <div className="relative z-10 px-6 pt-24 pb-12 lg:px-14">
        <motion.span
          initial={{ opacity: 0, y: 14, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: 3 }}
          viewport={{ once: true }}
          className="sticker w-fit bg-electric text-bg"
        >
          Достижения
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08, ease }}
          className="font-display mt-5 text-[clamp(3rem,9vw,7rem)] text-fg"
        >
          ИЗ ВЛАДИКАВКАЗА
          <br />
          <span className="mark rotate-1 bg-hot text-fg">В ТОП-5 МИРА</span>
        </motion.h2>
      </div>

      {/* awards list — full-width rows */}
      <div className="relative z-10 border-t-2 border-fg">
        {awards.map((award, i) => (
          <motion.div
            key={award}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, ease }}
            whileHover={{ x: 12 }}
            className="group relative flex items-stretch overflow-hidden border-b-2 border-fg bg-bg transition-colors hover:bg-hot"
          >
            {/* big number on the left */}
            <span className="flex w-20 shrink-0 items-center justify-center border-r-2 border-fg bg-bg-elevated font-display text-3xl text-fg/40 transition-colors group-hover:border-fg group-hover:bg-hot group-hover:text-fg md:w-28 md:text-4xl">
              {String(i + 1).padStart(2, "0")}
            </span>
            {/* award text */}
            <p className="flex items-center gap-4 px-6 py-6 font-cond text-base font-medium text-fg transition-colors group-hover:text-fg md:text-xl">
              <span className="h-3 w-3 shrink-0 rotate-45 bg-electric transition-colors group-hover:bg-fg" />
              {award}
            </p>
          </motion.div>
        ))}
      </div>

      {/* endorsement chips */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 px-6 py-16 lg:px-14">
        {endorsements.map((brand, i) => (
          <motion.span
            key={brand}
            initial={{ opacity: 0, y: 12, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: chipRotate[i % chipRotate.length] }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ rotate: 0, scale: 1.1 }}
            className={`sticker text-lg font-bold shadow-[4px_4px_0_0_#000] md:text-xl ${chipTones[i % chipTones.length]}`}
          >
            {brand}
          </motion.span>
        ))}
      </div>

      <div className="-rotate-1">
        <Ticker tone="hot" />
      </div>
    </section>
  );
}
