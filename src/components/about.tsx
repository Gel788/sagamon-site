"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { artist, bio, stats } from "@/lib/content";
import { images } from "@/lib/images";
import { TiltCard } from "./tilt-card";

const ease = [0.16, 1, 0.3, 1] as const;
const cardRotate = [-2, 1.5, -1.5, 2];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t-2 border-fg bg-bg">
      <span aria-hidden className="wm-number pointer-events-none absolute -right-6 top-0 text-[30vw] opacity-100">
        01
      </span>

      {/* ─── Split layout ─────────────────────────────── */}
      <div className="relative z-10 grid lg:grid-cols-2">
        {/* left — text */}
        <div className="flex flex-col justify-center px-5 py-16 sm:px-6 sm:py-20 lg:px-14 lg:py-32">
          <motion.span
            initial={{ opacity: 0, x: -20, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, rotate: -3 }}
            viewport={{ once: true }}
            className="sticker w-fit bg-hot text-fg"
          >
            О музыканте
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, ease }}
            className="font-display mt-6 text-[clamp(2.25rem,9vw,5.5rem)] leading-none text-fg"
          >
            ОТ СКРИПКИ
            <br />
            <span className="mark -rotate-1 bg-electric text-bg">К УДАРНЫМ</span>
          </motion.h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-fg/80 sm:mt-8 sm:space-y-5 sm:text-lg">
            {bio.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                {p}
              </motion.p>
            ))}
          </div>

          <motion.blockquote
            initial={{ opacity: 0, y: 12, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1.5 }}
            viewport={{ once: true }}
            className="mt-8 max-w-lg border-2 border-fg bg-bg-elevated p-5 font-cond text-lg font-semibold text-fg shadow-[6px_6px_0_0_var(--hot)] sm:mt-10 sm:p-6 sm:text-xl"
          >
            «{artist.quote}»
          </motion.blockquote>

          {/* mobile photo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative mt-8 aspect-[4/5] overflow-hidden border-2 border-fg shadow-[6px_6px_0_0_var(--electric)] lg:hidden"
          >
            <Image
              src={images.studio}
              alt="Давид Сагомонянц"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <span className="sticker absolute bottom-4 left-4 bg-yellow text-bg">
              Vladikavkaz, 1987 · © TAMA
            </span>
          </motion.div>
        </div>

        {/* right — photo, edge-to-edge */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="relative hidden min-h-[600px] lg:block"
        >
          <div className="absolute inset-0 border-l-2 border-fg">
            <TiltCard className="h-full w-full">
              <Image
                src={images.studio}
                alt="Давид Сагомонянц"
                fill
                className="object-cover object-center"
                sizes="50vw"
              />
              {/* diagonal overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric/20 via-transparent to-hot/30 mix-blend-multiply" />
            </TiltCard>
          </div>
          <motion.p
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: -4 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="sticker absolute -bottom-4 left-6 z-20 bg-yellow text-bg shadow-[4px_4px_0_0_#000]"
          >
            Vladikavkaz, 1987 · © TAMA
          </motion.p>
        </motion.div>
      </div>

      {/* ─── Stats — mega rows ────────────────────────── */}
      <div className="relative z-10 border-t-2 border-fg">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07, ease }}
            whileHover={{ backgroundColor: "var(--electric)", color: "var(--bg)" }}
            className="group flex cursor-default flex-col gap-2 border-b-2 border-fg bg-bg px-5 py-6 transition-colors sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-8 lg:px-14"
            style={{ color: "var(--fg)" }}
          >
            <span className="font-display text-[clamp(2.5rem,14vw,7rem)] leading-none text-electric transition-colors group-hover:text-bg sm:min-w-[clamp(5rem,18vw,16rem)]">
              {stat.value}
            </span>
            <div className="min-w-0 flex-1">
              <p className="font-display text-xl text-fg transition-colors group-hover:text-bg sm:text-2xl md:text-3xl">
                {stat.label}
              </p>
              <p className="mt-1 font-cond text-xs uppercase tracking-wider opacity-60 transition-colors group-hover:opacity-80 sm:text-sm">
                {stat.sub}
              </p>
            </div>
            <span
              aria-hidden
              className="hidden font-display text-4xl text-fg/5 transition-colors group-hover:text-bg/10 sm:ml-auto sm:block md:text-[5vw]"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
