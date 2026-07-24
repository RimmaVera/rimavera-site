"use client";

import {
  AlertCircle,
  Clock,
  Frown,
  Moon,
  RefreshCw,
  Search,
} from "lucide-react";
import {
  BackgroundBlurs,
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import { Container, Section } from "@/components/ui";
import { problemSection } from "@/data/landing";

const icons = [RefreshCw, Frown, AlertCircle, Moon, Clock, Search];

export function ProblemSection() {
  return (
    <Section id="problem" className="overflow-hidden bg-[radial-gradient(circle_at_90%_15%,rgba(214,163,157,0.22),transparent_20rem),linear-gradient(180deg,#f6eee6_0%,#fffaf5_100%)]">
      <BackgroundBlurs />
      <Container className="relative">
        <FadeIn>
          <SectionHeading title={problemSection.title} />
        </FadeIn>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {problemSection.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <StaggerItem key={item.title}>
                <article className="card-surface group h-full rounded-[2rem] p-6 transition-transform duration-500 hover:-translate-y-2 sm:p-7">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="font-serif text-4xl leading-none text-gold/70">0{index + 1}</span>
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-powder/25 text-warm-brown transition group-hover:rotate-6 group-hover:bg-powder/40">
                    <Icon size={20} aria-hidden />
                  </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-chocolate">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-warm-brown/85 sm:text-[0.95rem]">
                    {item.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <FadeIn delay={0.15}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-warm-brown/90 sm:text-lg">
            {problemSection.explanation}
          </p>
        </FadeIn>
      </Container>
    </Section>
  );
}
