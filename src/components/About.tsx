"use client";

import { FadeIn } from "@/components/AnimatedSection";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Container,
  ExpertPhotoPlaceholder,
  Section,
} from "@/components/ui";
import { about, siteConfig } from "@/data/landing";

export function About() {
  return (
    <Section id="about" className="bg-cream/50">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <ExpertPhotoPlaceholder
              caption={about.photoCaption}
              subtitle={about.photoSubtitle}
              className="mx-auto w-full max-w-md lg:max-w-none"
            />
          </FadeIn>

          <div>
            <FadeIn>
              <SectionHeading title={about.title} align="left" className="mb-6" />
            </FadeIn>

            <FadeIn delay={0.05}>
              <p className="text-base leading-relaxed text-warm-brown/90 sm:text-lg">
                {about.text}
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {about.highlights.map((item) => (
                  <li
                    key={item}
                    className="card-surface rounded-2xl px-4 py-3 text-sm font-medium text-chocolate"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.15}>
              <p className="mt-8 text-xs leading-relaxed text-warm-brown/70">
                {siteConfig.medicalDisclaimer}
              </p>
            </FadeIn>
          </div>
        </div>
      </Container>
    </Section>
  );
}
