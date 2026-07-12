"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { images } from "@/lib/images";
import { links } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

export function Festival() {
  return (
    <section id="festival" className="relative overflow-hidden border-t-2 border-fg py-28 md:py-36">
      {/* background */}
      <div className="duotone absolute inset-0">
        <Image src={images.action} alt="" fill className="object-cover object-center" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-bg/80" />
      <div className="scanlines z-[3]" aria-hidden />

      {/* watermark */}
      <span aria-hidden className="wm-number pointer-events-none absolute -bottom-8 -right-6 text-[30vw]">
        04
      </span>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 14, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true }}
              className="sticker w-fit bg-fg text-bg"
            >
              Собственный проект
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20, rotate: 0 }}
              whileInView={{ opacity: 1, y: 0, rotate: -1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08, ease }}
              className="font-display mt-5 origin-left text-[clamp(4rem,12vw,9rem)] leading-none text-fg"
            >
              SD{" "}
              <span className="mark bg-yellow text-bg">DRUM</span>
              <br />
              SHOW
            </motion.h2>
          </div>

          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-fg/90"
            >
              Фестиваль и шоу-проект, основанный Давидом. Образование, перформанс и живая энергия драм.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 space-y-3"
            >
              {[
                "Мастер-классы и онлайн-обучение",
                "Фестивальные выступления",
                "Барабанный спортзал SAGAMON на Boosty",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 border-l-4 border-electric pl-4 font-cond text-base font-medium text-fg">
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a
                href={links.boosty}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-fg bg-yellow px-8 py-4 font-display text-lg text-bg shadow-[6px_6px_0_0_var(--fg)] transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_var(--fg)]"
              >
                УРОКИ НА BOOSTY
              </a>
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-fg bg-transparent px-8 py-4 font-display text-lg text-fg transition hover:bg-fg hover:text-bg"
              >
                INSTAGRAM
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
