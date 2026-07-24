"use client";

import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Container, Section } from "@/components/ui";
import { program } from "@/data/landing";

export function Program() {
  return (
    <Section id="program" className="bg-cream/55">
      <Container>
        <FadeIn>
          <SectionHeading title={program.title} />
        </FadeIn>

        <div className="relative mx-auto max-w-5xl">
          <div
            aria-hidden
            className="absolute top-10 bottom-10 left-8 hidden w-px bg-gradient-to-b from-powder via-gold/70 to-sage lg:block"
          />

          <StaggerContainer className="space-y-4 lg:space-y-5">
            {program.steps.map((step) => (
              <StaggerItem key={step.step}>
                <article className="card-surface relative rounded-[2rem] p-6 transition-transform duration-500 hover:translate-x-1 sm:p-8 lg:pl-22">
                  <div className="absolute top-9 left-7 hidden h-4 w-4 rounded-full border-4 border-cream bg-gold shadow-[0_0_0_1px_rgba(203,162,115,0.7)] lg:block" />

                  <div className="flex flex-wrap items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-chocolate to-warm-brown text-base font-bold text-milk shadow-lg">
                      {step.step}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="mb-1 text-[10px] font-bold tracking-[0.18em] text-gold uppercase">Этап {step.step}</p>
                      <h3 className="font-serif text-2xl font-semibold tracking-[-0.025em] text-chocolate sm:text-3xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-warm-brown/88 sm:text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </Section>
  );
}
