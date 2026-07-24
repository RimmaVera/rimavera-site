import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Rimma Vera — Психология. Тело. Истина.",
    template: "%s | Rimma Vera",
  },
  description:
    "Rimma Vera помогает переводить язык тревоги, переедания и внутреннего напряжения в ясные сигналы о состоянии здесь и сейчас.",
  keywords: [
    "Rimma Vera",
    "Психолог",
    "Тревожное переедание",
    "Отношения с телом",
    "Телесные сигналы",
    "Психология",
  ],
  authors: [{ name: "Rimma Vera" }],
  applicationName: "Rimma Vera",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "Rimma Vera",
    title: "Rimma Vera — Психология. Тело. Истина.",
    description:
      "Психология, тело и честный контакт с собой — без стыда и давления.",
  },
  twitter: {
    card: "summary",
    title: "Rimma Vera — Психология. Тело. Истина.",
    description:
      "Психология, тело и честный контакт с собой — без стыда и давления.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
