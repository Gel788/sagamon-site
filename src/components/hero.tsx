"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { artist } from "@/lib/content";
import { images } from "@/lib/images";
import { Ticker } from "./ticker";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-bg">

      {/* фото: fullscreen на mobile, split на desktop */}
      <div className="absolute inset-0 md:inset-y-0 md:right-0 md:left-auto md:w-[58%]">
        <Image
          src={images.stage}
          alt="Давид Сагомонянц"
          fill
          priority
          className="object-cover object-[55%_18%] md:object-[35%_22%]"
          sizes="(max-width: 768px) 100vw, 58vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/75 to-bg/45 md:hidden" />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "linear-gradient(to right, #050505 0%, rgba(5,5,5,0.5) 20%, rgba(5,5,5,0.05) 55%, rgba(5,5,5,0.25) 100%)",
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-bg to-transparent" />
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 65% 38%, rgba(255,78,31,0.1) 0%, transparent 65%)",
          }}
        />
      </div>

      <div className="scanlines z-[2]" aria-hidden />

      <div className="relative z-10 flex min-h-[100svh] flex-col justify-end pb-28 pt-20 md:justify-center md:pb-24 md:pt-24">
        <div className="w-full max-w-full px-5 sm:px-6 md:max-w-[46vw] lg:pl-10">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex items-center gap-2 md:mb-5 md:gap-3"
          >
            <span className="bpm-dot inline-block h-2 w-2 shrink-0 rounded-full bg-electric md:h-2.5 md:w-2.5" />
            <span className="font-cond text-[10px] font-bold uppercase tracking-[0.18em] text-electric sm:text-[11px] sm:tracking-[0.24em] md:tracking-[0.28em]">
              <span className="sm:hidden">Top 5 Worldwide</span>
              <span className="hidden sm:inline">David Sagamonyants · Top 5 Worldwide</span>
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.06, ease }}
            className="font-display leading-[0.88] text-[clamp(2.75rem,12vw,9rem)]"
          >
            <span
              className="block"
              style={{ WebkitTextStroke: "2px #f7f7f5", color: "transparent" }}
            >
              ДАВИД
            </span>
            <span className="block text-electric">САГОМОНЯНЦ</span>
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.28, ease }}
            className="mt-5 h-[2px] w-12 origin-left bg-electric md:mt-6 md:w-16"
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-4 font-cond text-xs font-semibold uppercase tracking-[0.14em] text-fg/65 sm:text-sm sm:tracking-[0.18em] md:mt-5 md:text-base md:tracking-[0.22em]"
          >
            {artist.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.44 }}
            className="mt-6 flex flex-wrap gap-2.5 md:mt-8 md:gap-3"
          >
            <a
              href="#contact"
              className="border-2 border-fg bg-electric px-5 py-3 font-display text-sm text-bg shadow-[4px_4px_0_0_rgba(247,247,245,0.4)] transition duration-150 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_0_rgba(247,247,245,0.4)] sm:px-7 sm:py-3.5"
            >
              СВЯЗЬ
            </a>
            <a
              href="#about"
              className="border-2 border-fg/30 bg-transparent px-5 py-3 font-display text-sm text-fg/75 transition duration-150 hover:border-fg hover:text-fg sm:px-7 sm:py-3.5"
            >
              ИСТОРИЯ
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58 }}
            className="mt-8 grid w-full grid-cols-3 border border-fg/12 md:mt-10 md:flex md:w-fit"
          >
            {[
              { val: "TOP 5", sub: "В МИРЕ" },
              { val: "40+", sub: "СТРАН" },
              { val: "LA '12", sub: "ROLAND" },
            ].map((s, i, arr) => (
              <div
                key={s.val}
                className={`px-2 py-2.5 text-center sm:px-4 sm:py-3 md:px-5 md:py-3.5 md:text-left ${
                  i < arr.length - 1 ? "border-r border-fg/12" : ""
                }`}
              >
                <p className="font-display text-base text-electric sm:text-lg md:text-xl">{s.val}</p>
                <p className="mt-0.5 font-cond text-[8px] font-bold uppercase tracking-wider text-fg/35 sm:text-[9px] sm:tracking-widest">
                  {s.sub}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        aria-hidden
        className="absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 rotate-90 font-cond text-[10px] font-bold uppercase tracking-[0.4em] text-fg/20 lg:block"
      >
        Zildjian&nbsp;·&nbsp;TAMA&nbsp;·&nbsp;Sonor&nbsp;·&nbsp;Vic&nbsp;Firth
      </motion.p>

      <div className="absolute inset-x-0 bottom-0 z-20">
        <Ticker tone="electric" />
      </div>
    </section>
  );
}
