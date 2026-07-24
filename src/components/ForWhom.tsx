"use client";

import { Sparkles } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Container, Section } from "@/components/ui";
import { forWhom } from "@/data/landing";

export function ForWhom() {
  return (
    <Section id="for-whom">
      <Container>
        <FadeIn>
          <SectionHeading title={forWhom.title} />
        </FadeIn>

        <StaggerContainer className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {forWhom.items.map((item) => (
            <StaggerItem key={item}>
              <article className="card-surface group flex h-full gap-4 rounded-3xl p-5 transition-transform duration-300 hover:-translate-y-1 sm:p-6">
                <div className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sage/25 text-warm-brown transition group-hover:bg-sage/35">
                  <Sparkles size={18} aria-hidden />
                </div>
                <p className="text-base leading-relaxed text-chocolate/90 sm:text-[1.02rem]">
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
