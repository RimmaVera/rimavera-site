"use client";

import { Award, FileCheck2 } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Container, Section } from "@/components/ui";
import { credentials } from "@/data/landing";

export function Credentials() {
  return (
    <Section id="credentials" className="overflow-hidden bg-gradient-to-b from-milk to-cream/50">
      <Container>
        <FadeIn>
          <p className="mb-3 text-center text-xs font-semibold tracking-[0.18em] text-warm-brown/75 uppercase">
            {credentials.eyebrow}
          </p>
          <SectionHeading
            title={credentials.title}
            subtitle={credentials.subtitle}
          />
        </FadeIn>

        <StaggerContainer className="grid gap-4 md:grid-cols-3 lg:gap-5">
          {credentials.items.map((item) => (
            <StaggerItem key={item.title}>
              <article className="card-surface group relative flex h-full min-h-56 flex-col justify-between overflow-hidden rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                <div
                  aria-hidden
                  className="absolute -top-12 -right-10 h-36 w-36 rounded-full bg-gold/10 blur-2xl transition-transform duration-500 group-hover:scale-125"
                />
                <div className="relative">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-powder/30 to-gold/20 text-warm-brown">
                    <Award size={22} aria-hidden />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-semibold text-chocolate">
                    {item.title}
                  </h3>
                </div>
                <div className="relative mt-8 flex items-center gap-2 border-t border-warm-brown/10 pt-4 text-sm text-warm-brown/75">
                  <FileCheck2 size={16} className="shrink-0 text-sage" aria-hidden />
                  <span>{item.caption}</span>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
