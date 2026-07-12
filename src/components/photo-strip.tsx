"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { images } from "@/lib/images";

const photos = [
  { src: images.action, label: "SD Drum Show · Live", rotate: -1.5 },
  { src: images.stage,  label: "Zildjian Stage · 2023", rotate: 1.2 },
  { src: images.studio, label: "TAMA · Studio Session", rotate: -0.8 },
];

export function PhotoStrip() {
  return (
    <div className="overflow-hidden border-y-2 border-fg bg-bg-elevated py-6">
      <div className="flex gap-4 px-4 md:gap-6 md:px-8">
        {photos.map((p, i) => (
          <motion.div
            key={p.src}
            initial={{ opacity: 0, y: 40, rotate: p.rotate * 2 }}
            whileInView={{ opacity: 1, y: 0, rotate: p.rotate }}
            whileHover={{ y: -10, rotate: 0, scale: 1.03, zIndex: 10 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative shrink-0 border-2 border-fg shadow-[8px_8px_0_0_var(--electric)]"
            style={{ width: "clamp(260px,32vw,480px)", aspectRatio: "3/4" }}
          >
            <Image
              src={p.src}
              alt={p.label}
              fill
              className="object-cover"
              sizes="33vw"
            />
            {/* photo label tape */}
            <span className="absolute -bottom-4 left-4 z-10 border-2 border-fg bg-yellow px-3 py-0.5 font-cond text-xs font-bold uppercase tracking-wider text-bg">
              {p.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
