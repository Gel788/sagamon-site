"use client";

import { motion } from "motion/react";
import { artist, links } from "@/lib/content";
import { Ticker } from "./ticker";

const ease = [0.16, 1, 0.3, 1] as const;

const ctaLinks = [
  { label: "BOOKING@SAGAMON.RU", href: "mailto:booking@sagamon.ru", bg: "bg-electric", text: "text-bg", shadow: "var(--fg)" },
  { label: "TELEGRAM", href: links.telegram, bg: "bg-hot", text: "text-fg", shadow: "var(--fg)" },
  { label: "SD MUSIC SHOP", href: links.shop, bg: "bg-yellow", text: "text-bg", shadow: "var(--fg)" },
];

const socialLinks = [
  { label: "Telegram", href: links.telegram },
  { label: "Instagram", href: links.instagram },
  { label: "YouTube", href: links.youtube },
  { label: "SD Music Shop", href: links.shop },
  { label: "VK", href: links.vk },
  { label: "Zildjian", href: links.zildjian },
  { label: "Sonor", href: links.sonor },
];
const socialRotate = [-3, 2, -2, 3, -1, 2];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t-2 border-fg bg-bg"
    >
      {/* huge ИГРАЕМ? across entire width */}
      <div className="relative border-b-2 border-fg py-10 md:py-16">
        <span aria-hidden className="wm-number pointer-events-none absolute -bottom-12 left-1/2 -translate-x-1/2 text-[32vw]">
          05
        </span>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ease }}
          className="px-4 text-center"
        >
          <motion.span
            initial={{ opacity: 0, rotate: 0 }}
            whileInView={{ opacity: 1, rotate: -2 }}
            viewport={{ once: true }}
            className="sticker mx-auto mb-6 inline-block bg-electric text-bg"
          >
            Связь
          </motion.span>
          <h2
            className="font-display text-[clamp(5rem,20vw,18rem)] leading-none text-fg"
            style={{ letterSpacing: "-0.02em" }}
          >
            ИГРАЕМ<span className="text-hot">?</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 lg:px-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-lg text-center text-lg text-fg/75"
        >
          Концерты, фестивали, студийные сессии и мастер-классы.<br />
          «{artist.wisdom}»
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          {ctaLinks.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target={btn.href.startsWith("mailto") ? undefined : "_blank"}
              rel={btn.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className={`w-full border-2 border-fg px-8 py-5 text-center font-display text-lg shadow-[6px_6px_0_0_var(--fg)] transition hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[3px_3px_0_0_var(--fg)] sm:w-auto ${btn.bg} ${btn.text}`}
              style={{ boxShadow: `6px 6px 0 0 ${btn.shadow}` }}
            >
              {btn.label}
            </a>
          ))}
        </motion.div>

        {/* social stickers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: socialRotate[i % socialRotate.length] }}
              viewport={{ once: true }}
              whileHover={{ rotate: 0, scale: 1.1, y: -4 }}
              className="sticker text-fg/80 transition-colors hover:border-electric hover:text-electric"
            >
              {link.label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      <div className="rotate-1">
        <Ticker tone="hot" />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t-2 border-fg bg-bg">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <p className="font-display text-3xl text-fg/30">SAGAMON</p>
            <p className="mt-1 font-cond text-xs font-semibold uppercase tracking-wider text-fg-dim">
              © {new Date().getFullYear()} Давид Сагомонянц
            </p>
          </div>

          <div className="max-w-sm text-center md:text-right">
            <p className="font-cond text-sm font-semibold uppercase tracking-wide text-fg/70">
              Сайт собрали{" "}
              <span className="text-electric">Альберт</span>
              {" "}и{" "}
              <span className="text-hot">Кирилл</span>
            </p>
            <p className="mt-2 font-cond text-sm normal-case leading-relaxed text-fg/45">
              Барабаны не трогали — только пиксели.
              <br />
              Зато били в такт с первого дубля 🥁
            </p>
          </div>
        </div>

        <p className="mt-8 border-t border-fg/10 pt-5 text-center font-cond text-[10px] font-semibold uppercase tracking-widest text-fg/25">
          Фан-трибьют · фото © TAMA / Zildjian
        </p>
      </div>
    </footer>
  );
}
