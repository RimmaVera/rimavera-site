"use client";

import { BackgroundBlurs, FadeIn } from "@/components/AnimatedSection";
import { CTAButton, Container } from "@/components/ui";
import { finalCta } from "@/data/landing";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <BackgroundBlurs />
      <Container className="relative">
        <FadeIn>
          <div className="card-surface mx-auto max-w-4xl rounded-[2rem] bg-gradient-to-br from-cream via-milk to-powder/15 px-6 py-12 text-center sm:px-10 sm:py-14 lg:px-14">
            <h2 className="font-serif text-3xl leading-tight font-semibold text-chocolate sm:text-4xl lg:text-[2.6rem]">
              {finalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-warm-brown/90 sm:text-lg">
              {finalCta.subtitle}
            </p>
            <div className="mt-8">
              <CTAButton className="px-8 py-4 text-base">
                {finalCta.button}
              </CTAButton>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
