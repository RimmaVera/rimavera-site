"use client";

import { Brain, Heart, Home, Leaf } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Container, Section } from "@/components/ui";
import { methodSection } from "@/data/landing";

const iconMap = {
  brain: Brain,
  leaf: Leaf,
  home: Home,
  heart: Heart,
};

export function MethodSection() {
  return (
    <Section id="method" className="bg-gradient-to-b from-milk to-cream/50">
      <Container>
        <FadeIn>
          <SectionHeading title={methodSection.title} />
        </FadeIn>

        <StaggerContainer className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {methodSection.items.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <StaggerItem key={item.title}>
                <article className="card-surface h-full rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-powder/35 to-gold/20 text-warm-brown">
                    <Icon size={22} aria-hidden />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-chocolate">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-warm-brown/88">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
