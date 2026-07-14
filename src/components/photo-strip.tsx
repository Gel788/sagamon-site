"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { images } from "@/lib/images";

const ease = [0.16, 1, 0.3, 1] as const;

const photos = [
  {
    src: images.studio,
    label: "TAMA · Studio Session",
    tag: "Studio",
    shadow: "var(--yellow)",
    sticker: "bg-yellow text-bg",
    rotate: -1.5,
  },
  {
    src: images.action,
    label: "SD Drum Show · Live",
    tag: "Live",
    shadow: "var(--electric)",
    sticker: "bg-electric text-bg",
    rotate: 1.2,
  },
  {
    src: images.stage,
    label: "Zildjian Stage · 2023",
    tag: "Stage",
    shadow: "var(--hot)",
    sticker: "bg-hot text-fg",
    rotate: -0.8,
  },
] as const;

export function PhotoStrip() {
  const [active, setActive] = useState(0);

  return (
    <section aria-label="Фотогалерея" className="relative overflow-hidden border-y-2 border-fg bg-bg">
      <span aria-hidden className="wm-number pointer-events-none absolute -right-2 top-6 text-[22vw]">
        03
      </span>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 md:py-24 lg:px-10">
        <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -16, rotate: 0 }}
              whileInView={{ opacity: 1, x: 0, rotate: -2 }}
              viewport={{ once: true }}
              className="sticker bg-fg text-bg"
            >
              Фотогалерея
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06, ease }}
              className="font-display mt-4 text-[clamp(2rem,8vw,6rem)] leading-none text-fg sm:mt-5"
            >
              НА СЦЕНЕ
              <br />
              <span className="mark rotate-1 bg-electric text-bg">И В СТУДИИ</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-sm font-cond text-sm font-semibold uppercase tracking-wider text-fg/50"
          >
            Наведи на кадр — он вылетает вперёд
          </motion.p>
        </div>

        {/* desktop mosaic */}
        <div className="hidden gap-4 md:grid md:grid-cols-12 md:grid-rows-2 md:h-[min(72vh,680px)]">
          {photos.map((p, i) => {
            const isHero = i === 0;
            const isActive = active === i;

            return (
              <motion.button
                key={p.src}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                initial={{ opacity: 0, y: 28, rotate: p.rotate * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: isActive ? 0 : p.rotate }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6, ease }}
                whileHover={{ y: -6, rotate: 0 }}
                className={`group relative overflow-hidden border-2 border-fg bg-bg text-left transition-shadow duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric ${
                  isHero ? "col-span-7 row-span-2" : "col-span-5"
                } ${isActive ? "z-10" : "z-0"}`}
                style={{
                  boxShadow: isActive
                    ? `10px 10px 0 0 ${p.shadow}`
                    : `6px 6px 0 0 var(--fg)`,
                }}
              >
                <Image
                  src={p.src}
                  alt={p.label}
                  fill
                  className={`object-cover transition duration-700 ease-out ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                  sizes={isHero ? "58vw" : "42vw"}
                />

                <div
                  className={`absolute inset-0 transition duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-bg via-bg/15 to-transparent"
                      : "bg-bg/35"
                  }`}
                />

                <span
                  aria-hidden
                  className={`absolute right-4 top-4 font-display text-5xl transition md:text-6xl ${
                    isActive ? "text-fg/25" : "text-fg/10"
                  }`}
                >
                  0{i + 1}
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
                  <span
                    className={`sticker mb-3 ${p.sticker} ${isActive ? "rotate-0" : "-rotate-2"}`}
                  >
                    {p.tag}
                  </span>
                  <p
                    className={`font-display text-lg transition md:text-2xl ${
                      isActive ? "text-fg" : "text-fg/55"
                    }`}
                  >
                    {p.label}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* mobile — horizontal snap scroll */}
        <div className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {photos.map((p, i) => (
            <motion.figure
              key={p.src}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, ease }}
              className="relative aspect-[4/5] w-[82vw] max-w-[340px] shrink-0 snap-center overflow-hidden border-2 border-fg bg-bg"
              style={{ boxShadow: `6px 6px 0 0 ${p.shadow}` }}
            >
              <Image src={p.src} alt={p.label} fill className="object-cover" sizes="85vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <span className={`sticker mb-2 text-[10px] ${p.sticker}`}>{p.tag}</span>
                <p className="font-display text-base leading-tight text-fg">{p.label}</p>
              </figcaption>
              <span aria-hidden className="absolute right-3 top-3 font-display text-3xl text-fg/20">
                0{i + 1}
              </span>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
