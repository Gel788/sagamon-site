"use client";

import { useEffect, useRef, type ReactNode } from "react";

const MAX_TILT = 10;

export function TiltCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const card = cardRef.current;
    if (!wrap || !card) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    function reset() {
      wrap?.classList.remove("is-hover");
      card?.classList.remove("is-tilting");
      card?.style.setProperty("--tilt-rx", "0deg");
      card?.style.setProperty("--tilt-ry", "0deg");
    }

    function track(e: PointerEvent) {
      if (reduce.matches || !wrap || !card) return;
      const r = wrap.getBoundingClientRect();
      const px = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      const py = Math.min(1, Math.max(0, (e.clientY - r.top) / r.height));
      wrap.classList.add("is-hover");
      card.classList.add("is-tilting");
      card.style.setProperty("--tilt-ry", ((px - 0.5) * MAX_TILT).toFixed(2) + "deg");
      card.style.setProperty("--tilt-rx", ((0.5 - py) * MAX_TILT).toFixed(2) + "deg");
      card.style.setProperty("--tilt-gx", (px * 100).toFixed(1) + "%");
      card.style.setProperty("--tilt-gy", (py * 100).toFixed(1) + "%");
    }

    wrap.addEventListener("pointermove", track);
    wrap.addEventListener("pointerleave", reset);
    return () => {
      wrap.removeEventListener("pointermove", track);
      wrap.removeEventListener("pointerleave", reset);
    };
  }, []);

  return (
    <div ref={wrapRef} className={`t-tilt ${className}`}>
      <div ref={cardRef} className="t-tilt-card h-full w-full">
        {children}
        <div className="t-tilt-glare" />
      </div>
    </div>
  );
}
