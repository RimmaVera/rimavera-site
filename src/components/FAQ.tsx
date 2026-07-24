"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Container, Section } from "@/components/ui";
import { faq } from "@/data/landing";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section id="faq" className="bg-[radial-gradient(circle_at_12%_25%,rgba(158,175,154,0.16),transparent_22rem)]">
      <Container className="max-w-4xl">
        <FadeIn>
          <SectionHeading title={faq.title} />
        </FadeIn>

        <div className="space-y-3">
          {faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <FadeIn key={item.question} delay={index * 0.04}>
                <article className={`overflow-hidden rounded-[1.6rem] border transition duration-300 ${isOpen ? "border-gold/35 bg-white/80 shadow-[0_18px_42px_rgba(38,27,23,0.08)]" : "border-warm-brown/10 bg-white/45"}`}>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-4 px-5 py-6 text-left outline-none transition hover:bg-white/40 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold sm:px-7"
                  >
                    <span className="font-serif text-xl font-semibold tracking-[-0.02em] text-chocolate sm:text-2xl">
                      {item.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={cn(
                        "shrink-0 rounded-full bg-cream p-1.5 text-warm-brown transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                      aria-hidden
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-answer-${index}`}
                        role="region"
                        aria-label={`Ответ: ${item.question}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-6 text-sm leading-relaxed text-warm-brown/88 sm:px-7 sm:text-base">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
