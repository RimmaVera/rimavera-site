import { Container, Eyebrow, Section } from "@/components/Section";
import { faqItems } from "@/lib/constants";

export function FAQSection() {
  return (
    <Section id="faq" className="faq-section">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <Eyebrow>Частые вопросы</Eyebrow>
            <h2 className="mt-5 font-display text-5xl leading-[0.93] font-medium tracking-[-0.055em] text-[var(--text)] sm:text-6xl">
              Спокойно
              <br />
              о важном
            </h2>
            <p className="mt-6 max-w-md text-[0.98rem] leading-7 text-[var(--muted)]">
              О психологическом и психосоматическом подходе — без сложных
              терминов и громких обещаний.
            </p>
          </div>

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details key={item.question} className="faq-item">
                <summary>
                  <span className="faq-item__number">
                    0{index + 1}
                  </span>
                  <span className="faq-item__question">{item.question}</span>
                  <span aria-hidden className="faq-item__icon">
                    +
                  </span>
                </summary>
                <div className="faq-item__answer">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
