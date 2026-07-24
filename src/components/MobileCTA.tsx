"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { cta, siteConfig } from "@/data/landing";

export function MobileCTA() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      aria-label="Быстрая запись на диагностику"
      className="fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden"
    >
      <div className="mx-auto flex max-w-md items-center gap-3 rounded-[1.35rem] border border-white/70 bg-milk/88 p-2 shadow-[0_18px_42px_rgba(38,27,23,0.2)] backdrop-blur-xl">
        <div className="min-w-0 flex-1 pl-2">
          <p className="text-xs font-semibold text-chocolate">Бережная диагностика</p>
          <p className="mt-0.5 truncate text-[11px] text-warm-brown/70">
            {cta.mobileNote}
          </p>
        </div>
        <a
          href={siteConfig.telegramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-chocolate via-warm-brown to-[#b98359] px-4 text-sm font-semibold text-milk shadow-lg outline-none transition hover:brightness-105 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-milk"
        >
          <MessageCircle size={16} aria-hidden />
          <span>Записаться</span>
        </a>
      </div>
    </motion.aside>
  );
}
