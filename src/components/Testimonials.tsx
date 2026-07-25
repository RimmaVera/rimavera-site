import { Container, Eyebrow, Section } from "@/components/Section";
import { reviewSlots } from "@/lib/constants";

export function Testimonials() {
  return (
    <Section id="reviews" className="testimonials-section">
      <Container>
        <div className="testimonials-intro">
          <div>
            <Eyebrow>Отзывы</Eyebrow>
            <h2 className="mt-5 font-display text-4xl leading-[0.94] font-medium tracking-[-0.05em] text-[var(--text)] sm:text-5xl">
              Истории клиентов
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[var(--muted)]">
            Отзывы публикуются анонимно и только после письменного согласия
              клиента.
          </p>
        </div>

        <div className="testimonials-grid">
          {reviewSlots.map((review) => (
            <article
              key={`${review.audience}-${review.topic}`}
              className="review-slot"
            >
              <span className="review-slot__audience">{review.audience}</span>
              <h3>{review.topic}</h3>
              <p>Отзыв будет добавлен после согласования с клиентом.</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
