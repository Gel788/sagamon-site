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
    shadow: "var(--yellow)",
    rotate: -1.5,
  },
  {
    src: images.action,
    label: "SD Drum Show · Live",
    shadow: "var(--electric)",
    rotate: 1.2,
  },
  {
    src: images.stage,
    label: "Zildjian Stage · 2023",
    shadow: "var(--hot)",
    rotate: -0.8,
  },
] as const;

export function PhotoStrip() {
  const [active, setActive] = useState(0);

  return (
    <section aria-label="Фотогалерея" className="relative overflow-hidden border-y-2 border-fg bg-bg">
      <div className="relative z-10 mx-auto max-w-7xl px-5 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-10">
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
                className={`relative overflow-hidden border-2 border-fg bg-bg transition-shadow duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-electric ${
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
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
