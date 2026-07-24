"use client";

import { Quote } from "lucide-react";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Container, Section } from "@/components/ui";
import { testimonials } from "@/data/landing";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <Container>
        <FadeIn>
          <SectionHeading
            title={testimonials.title}
            subtitle={testimonials.subtitle}
          />
        </FadeIn>

        <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:gap-6">
          {testimonials.items.map((item) => (
            <StaggerItem key={item.author}>
              <article className="card-surface relative flex h-full flex-col rounded-3xl p-6 sm:p-7">
                <Quote
                  className="mb-4 text-powder/80"
                  size={28}
                  aria-hidden
                />
                <p className="flex-1 text-base leading-relaxed text-warm-brown/90 italic">
                  «{item.text}»
                </p>
                <div className="mt-6 border-t border-warm-brown/10 pt-4">
                  <p className="font-medium text-chocolate">{item.author}</p>
                  <p className="mt-1 text-xs text-warm-brown/65">{item.note}</p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
