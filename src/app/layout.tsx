import type { Metadata } from "next";
import { Russo_One, Oswald, Roboto_Condensed } from "next/font/google";
import "./globals.css";

const russoOne = Russo_One({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-display",
});

const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["500", "600", "700"],
  variable: "--font-cond",
});

const robotoCond = Roboto_Condensed({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "SAGAMON — Давид Сагомонянц · Барабанщик мирового уровня",
  description:
    "Давид Сагомонянц — топ-5 барабанщиков мира по версии Roland V-Drums. Артист Zildjian, TAMA, Vic Firth. Барабанщик Скриптонита, основатель SD Drum Show.",
  openGraph: {
    title: "SAGAMON — David Sagamonyants",
    description: "Drummer · Composer · Educator · Top 5 Worldwide",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${russoOne.variable} ${oswald.variable} ${robotoCond.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
