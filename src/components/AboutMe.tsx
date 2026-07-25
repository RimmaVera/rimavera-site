import { Container, Eyebrow, Section } from "@/components/Section";
import { about } from "@/lib/constants";

export function AboutMe() {
  return (
    <Section id="about" className="about-section">
      <Container>
        <div className="about-intro">
          <div>
            <Eyebrow>Обо мне</Eyebrow>
            <h2 className="mt-5 max-w-2xl font-display text-5xl leading-[0.92] font-medium tracking-[-0.055em] text-[var(--text)] sm:text-6xl">
              Профессиональная база
              <br />и реальный опыт
            </h2>
          </div>
          <p className="max-w-xl text-[1rem] leading-7 text-[var(--muted)] sm:text-[1.08rem] sm:leading-8">
            {about.description}
          </p>
        </div>

        <div className="about-grid">
          <article className="about-profile">
            <span className="about-profile__monogram" aria-hidden>
              RV
            </span>
            <Eyebrow className="text-[var(--accent)]">Rimma Vera</Eyebrow>
            <h3 className="mt-7 max-w-md font-display text-[2.55rem] leading-[0.9] font-medium tracking-[-0.055em] text-[var(--text)] sm:text-5xl">
              {about.role}
            </h3>
            <div className="about-specialties">
              {about.specialties.map((specialty) => (
                <span key={specialty}>{specialty}</span>
              ))}
            </div>
          </article>

          <div className="about-details">
            <p className="max-w-2xl text-[1rem] leading-7 text-[var(--muted)] sm:text-[1.05rem] sm:leading-8">
              {about.story}
            </p>

            <div className="about-experience">
              {about.experience.map((item) => (
                <article key={item.label} className="about-experience__item">
                  <span className="about-experience__number">{item.number}</span>
                  <div>
                    <h3>{item.label}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="about-education">
              <p className="about-education__label">Образование и подготовка</p>
              {about.education.map((item) => (
                <article key={item.title} className="about-education__item">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
