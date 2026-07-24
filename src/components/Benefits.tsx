"use client";

import { Check } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Container, Section } from "@/components/ui";
import { benefits } from "@/data/landing";

export function Benefits() {
  return (
    <Section id="benefits" className="overflow-hidden bg-[radial-gradient(circle_at_8%_88%,rgba(158,175,154,0.18),transparent_24rem)]">
      <Container>
        <FadeIn>
          <SectionHeading title={benefits.title} />
        </FadeIn>

        <StaggerContainer className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {benefits.items.map((item, index) => (
            <StaggerItem key={item}>
              <article className={`card-surface group flex h-full flex-col justify-between rounded-[1.75rem] p-6 transition-transform duration-500 hover:-translate-y-2 ${index === 0 || index === 5 ? "sm:col-span-2" : ""}`}>
                <div className="flex items-start justify-between gap-3">
                  <span className="font-serif text-3xl text-gold/60">0{index + 1}</span>
                  <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold transition group-hover:scale-110 group-hover:bg-gold/25">
                  <Check size={16} strokeWidth={2.5} aria-hidden />
                </div>
                </div>
                <p className="mt-7 text-base leading-relaxed text-chocolate/90 sm:text-[1.02rem]">
                  {item}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
