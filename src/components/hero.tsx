"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { artist } from "@/lib/content";
import { images } from "@/lib/images";
import { Ticker } from "./ticker";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-bg">

      {/* ── ФОТО — правая колонка, открытая, без текста поверх ── */}
      <div
        className="absolute inset-y-0 right-0 z-0"
        style={{ width: "58%" }}
      >
        <Image
          src={images.stage}
          alt="Давид Сагомонянц"
          fill
          priority
          className="object-cover object-[35%_22%]"
          sizes="58vw"
        />
        {/* лёгкий fade слева — сливается с чёрным */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #050505 0%, rgba(5,5,5,0.5) 20%, rgba(5,5,5,0.05) 55%, rgba(5,5,5,0.25) 100%)",
          }}
        />
        {/* лёгкий низ */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent" />
        {/* тонкий оранжевый glow — атмосфера */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 65% 38%, rgba(255,78,31,0.1) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* сканлайны */}
      <div className="scanlines z-[2]" aria-hidden />

      {/* ── ЛЕВАЯ КОЛОНКА: весь текст ── */}
      <div className="relative z-10 flex min-h-screen flex-col justify-center pb-24 pt-24">
        <div className="w-full max-w-[46vw] pl-6 lg:pl-10">

          {/* eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="bpm-dot inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-electric" />
            <span className="font-cond text-[11px] font-bold uppercase tracking-[0.28em] text-electric">
              David Sagamonyants&nbsp;·&nbsp;Top&nbsp;5&nbsp;Worldwide
            </span>
          </motion.div>

          {/* ИМЯ */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.06, ease }}
            className="font-display leading-[0.9]"
            style={{ fontSize: "clamp(3.5rem, 8vw, 9rem)" }}
          >
            <span
              className="block"
              style={{ WebkitTextStroke: "2px #f7f7f5", color: "transparent" }}
            >
              ДАВИД
            </span>
            <span className="block text-electric">САГОМОНЯНЦ</span>
          </motion.h1>

          {/* разделитель */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.28, ease }}
            className="mt-6 h-[2px] w-16 origin-left bg-electric"
          />

          {/* subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-5 font-cond text-sm font-semibold uppercase tracking-[0.22em] text-fg/65 md:text-base"
          >
            {artist.tagline}
          </motion.p>

          {/* кнопки */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.44 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="border-2 border-fg bg-electric px-7 py-3.5 font-display text-sm text-bg shadow-[5px_5px_0_0_rgba(247,247,245,0.4)] transition duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_0_rgba(247,247,245,0.4)]"
            >
              СВЯЗЬ
            </a>
            <a
              href="#about"
              className="border-2 border-fg/30 bg-transparent px-7 py-3.5 font-display text-sm text-fg/75 transition duration-150 hover:border-fg hover:text-fg"
            >
              ИСТОРИЯ
            </a>
          </motion.div>

          {/* статы */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58 }}
            className="mt-10 flex gap-0 border border-fg/12 w-fit"
          >
            {[
              { val: "TOP 5", sub: "В МИРЕ" },
              { val: "40+", sub: "СТРАН" },
              { val: "LA '12", sub: "ROLAND" },
            ].map((s, i, arr) => (
              <div
                key={s.val}
                className={`px-5 py-3.5 ${i < arr.length - 1 ? "border-r border-fg/12" : ""}`}
              >
                <p className="font-display text-lg text-electric md:text-xl">{s.val}</p>
                <p className="mt-0.5 font-cond text-[9px] font-bold uppercase tracking-widest text-fg/35">
                  {s.sub}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* вертикальная метка — правый край */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        aria-hidden
        className="absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 font-cond text-[10px] font-bold uppercase tracking-[0.4em] text-fg/20 md:block"
      >
        Zildjian&nbsp;·&nbsp;TAMA&nbsp;·&nbsp;Sonor&nbsp;·&nbsp;Vic&nbsp;Firth
      </motion.p>

      {/* ТИКЕР */}
      <div className="absolute inset-x-0 bottom-0 z-20">
        <Ticker tone="electric" />
      </div>
    </section>
  );
}
