"use client";

import { Check } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { CTAButton, Container, Section } from "@/components/ui";
import { pricing, siteConfig } from "@/data/landing";

export function Pricing() {
  return (
    <Section id="pricing" className="overflow-hidden bg-[radial-gradient(circle_at_80%_0%,rgba(214,163,157,0.22),transparent_28rem),linear-gradient(135deg,#f5eadf,#fffaf5)]">
      <Container>
        <FadeIn>
          <SectionHeading title={pricing.title} />
        </FadeIn>

        <StaggerContainer className="grid gap-5 lg:grid-cols-3 lg:items-stretch lg:gap-6">
          {pricing.plans.map((plan) => (
            <StaggerItem key={plan.name}>
              <article
                className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-7 transition-transform duration-500 hover:-translate-y-2 sm:p-8 ${
                  plan.popular
                    ? "border-gold/50 bg-gradient-to-b from-chocolate via-[#38261f] to-[#563c2e] text-milk shadow-[0_26px_60px_rgba(38,27,23,0.25)] lg:scale-[1.04]"
                    : "card-surface border-warm-brown/10"
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-5 right-5 rounded-full bg-gold px-3 py-1 text-[10px] font-bold tracking-[0.12em] text-chocolate uppercase">
                    {plan.popularLabel}
                  </span>
                )}

                <p className={`text-[10px] font-bold tracking-[0.18em] uppercase ${plan.popular ? "text-gold" : "text-warm-brown/65"}`}>Формат работы</p>
                <h3 className={`mt-3 font-serif text-3xl font-semibold tracking-[-0.03em] ${plan.popular ? "text-milk" : "text-chocolate"}`}>
                  {plan.name}
                </h3>
                <p className="mt-4 text-xl font-semibold text-gold">
                  {plan.price}
                </p>
                <p className={`mt-4 text-sm leading-relaxed ${plan.popular ? "text-milk/70" : "text-warm-brown/85"}`}>
                  {plan.description}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2.5 text-sm ${plan.popular ? "text-milk/85" : "text-chocolate/88"}`}
                    >
                      <Check
                        className={`mt-0.5 shrink-0 ${plan.popular ? "text-gold" : "text-sage"}`}
                        size={16}
                        aria-hidden
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <CTAButton
                    variant={plan.popular ? "secondary" : "primary"}
                    className="w-full"
                  >
                    {plan.cta}
                  </CTAButton>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-warm-brown/75">
            {siteConfig.pricingNote}
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
