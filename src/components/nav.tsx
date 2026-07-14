"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { navItems } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "border-b-2 border-fg bg-bg" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3.5 sm:px-6 sm:py-4 lg:px-10">
        <a href="#" className="font-display text-xl text-fg sm:text-2xl">
          SAGAMON
        </a>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Основная">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-cond text-sm font-semibold uppercase tracking-wider text-fg transition-colors hover:text-electric"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#contact"
            className="border-2 border-fg bg-electric px-3 py-1.5 font-display text-xs text-bg sm:px-4 sm:py-2 sm:text-sm lg:hidden"
          >
            СВЯЗЬ
          </a>

          <a
            href="#contact"
            className="hidden border-2 border-fg bg-electric px-5 py-2 font-display text-sm text-bg transition hover:bg-fg lg:inline-flex"
          >
            СВЯЗЬ
          </a>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
          <span
            className={`h-0.5 w-6 bg-fg transition ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-6 bg-fg transition ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-6 bg-fg transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t-2 border-fg bg-bg lg:hidden"
          >
            <nav className="flex flex-col gap-3 px-5 py-5 sm:gap-4 sm:px-6 sm:py-6" aria-label="Мобильная">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-cond text-base font-semibold uppercase tracking-wider text-fg sm:text-lg"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 border-2 border-fg bg-electric px-5 py-3 text-center font-display text-bg"
                onClick={() => setOpen(false)}
              >
                СВЯЗЬ
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
