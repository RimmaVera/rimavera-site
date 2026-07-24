"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CircleHelp, Sparkles } from "lucide-react";
import { FadeIn } from "@/components/AnimatedSection";
import { Container } from "@/components/ui";
import { hoverInsights } from "@/data/landing";

export function HoverInsights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = hoverInsights.items[activeIndex];

  return (
    <section
      aria-labelledby="hover-insights-title"
      className="relative overflow-hidden bg-milk py-12 sm:py-16"
    >
      <div
        aria-hidden
        className="absolute top-0 right-[12%] h-48 w-48 rounded-full bg-powder/15 blur-3xl"
      />
      <Container className="relative">
        <FadeIn>
          <div className="grid gap-6 rounded-[2rem] border border-warm-brown/10 bg-white/55 p-5 shadow-[0_18px_48px_rgba(38,27,23,0.06)] backdrop-blur-md sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:p-10">
            <div>
              <p className="section-kicker">
                Бережный разговор с собой
              </p>
              <h2
                id="hover-insights-title"
                className="mt-4 max-w-2xl font-serif text-3xl leading-[1.08] font-semibold tracking-[-0.035em] text-chocolate sm:text-4xl"
              >
                {hoverInsights.title}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-warm-brown/80 sm:text-base">
                {hoverInsights.subtitle}
              </p>

              <div className="mt-7 flex flex-wrap gap-2.5">
                {hoverInsights.items.map((item, index) => {
                  const isActive = activeIndex === index;

                  return (
                    <button
                      key={item.label}
                      type="button"
                      onMouseEnter={() => setActiveIndex(index)}
                      onFocus={() => setActiveIndex(index)}
                      onClick={() => setActiveIndex(index)}
                      aria-pressed={isActive}
                      className={`rounded-full border px-4 py-2.5 text-left text-sm font-medium outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 ${
                        isActive
                          ? "border-gold/45 bg-chocolate text-milk shadow-[0_8px_18px_rgba(38,27,23,0.14)]"
                          : "border-warm-brown/12 bg-milk/70 text-warm-brown hover:border-gold/40 hover:bg-cream"
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="relative min-h-52 overflow-hidden rounded-[1.6rem] border border-gold/20 bg-gradient-to-br from-cream via-milk to-sage/15 p-6 sm:p-8">
              <div
                aria-hidden
                className="absolute -top-7 -right-7 h-28 w-28 rounded-full border border-gold/30"
              />
              <Sparkles
                aria-hidden
                className="relative text-gold"
                size={22}
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22 }}
                  className="relative"
                >
                  <h3 className="mt-8 font-serif text-3xl leading-tight font-semibold tracking-[-0.03em] text-chocolate">
                    {activeItem.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-warm-brown/85 sm:text-base">
                    {activeItem.text}
                  </p>
                </motion.div>
              </AnimatePresence>
              <div className="absolute right-5 bottom-5 inline-flex items-center gap-1.5 text-xs text-warm-brown/60">
                <CircleHelp size={14} aria-hidden />
                Нажмите или наведите
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
