"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { images } from "@/lib/images";
import { links } from "@/lib/content";

const ease = [0.16, 1, 0.3, 1] as const;

export function Festival() {
  return (
    <section id="festival" className="relative overflow-hidden border-t-2 border-fg py-16 sm:py-24 md:py-36">
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

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
        <div className="grid gap-10 sm:gap-14 md:grid-cols-2 md:items-center">
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
              className="font-display mt-5 origin-left text-[clamp(2.5rem,11vw,9rem)] leading-none text-fg"
            >
              SD{" "}
              <span className="mark bg-yellow text-bg">DRUM</span>
              <br />
              SCHOOL
            </motion.h2>
          </div>

          <div className="flex flex-col justify-center">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-base leading-relaxed text-fg/90 sm:text-lg"
            >
              Школа и шоу-проект, основанный Давидом. Образование, перформанс и живая энергия барабанов.
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
                "Фестивальные выступления SD Drum Show",
                "Магазин SD Music Shop — sdmusic.shop",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 border-l-4 border-electric pl-3 font-cond text-sm font-medium text-fg sm:items-center sm:pl-4 sm:text-base">
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.18 }}
              className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:flex sm:flex-wrap sm:gap-4"
            >
              <a
                href={links.sdDrumSchool}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-fg bg-yellow px-5 py-3.5 text-center font-display text-sm text-bg shadow-[5px_5px_0_0_var(--fg)] transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_var(--fg)] sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
              >
                SD DRUM SCHOOL
              </a>
              <a
                href={links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-fg bg-transparent px-5 py-3.5 text-center font-display text-sm text-fg transition hover:bg-fg hover:text-bg sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
              >
                INSTAGRAM
              </a>
              <a
                href={links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-fg bg-transparent px-5 py-3.5 text-center font-display text-sm text-fg transition hover:bg-fg hover:text-bg sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
              >
                YOUTUBE
              </a>
              <a
                href={links.shop}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-2 border-fg bg-electric px-5 py-3.5 text-center font-display text-sm text-bg shadow-[5px_5px_0_0_var(--fg)] transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_var(--fg)] sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
              >
                SD MUSIC SHOP
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
