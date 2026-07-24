"use client";

import { TrendingUp } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Container, Section } from "@/components/ui";
import { results } from "@/data/landing";

export function Results() {
  return (
    <Section id="results" className="bg-gradient-to-b from-cream/40 to-milk">
      <Container>
        <FadeIn>
          <SectionHeading
            title={results.title}
            subtitle={results.subtitle}
          />
        </FadeIn>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {results.items.map((item) => (
            <StaggerItem key={item}>
              <article className="card-surface flex h-full gap-4 rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-sage/25 text-warm-brown">
                  <TrendingUp size={18} aria-hidden />
                </div>
                <p className="text-base leading-relaxed text-chocolate/90">
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
