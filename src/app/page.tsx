import { AboutMe } from "@/components/AboutMe";
import { BodySignals } from "@/components/BodySignals";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ScrollToTop } from "@/components/ScrollToTop";
import { SocialBlock } from "@/components/SocialBlock";
import { Testimonials } from "@/components/Testimonials";
import { WorkFormats } from "@/components/WorkFormats";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <BodySignals />
        <WorkFormats />
        <FAQSection />
        <SocialBlock />
        <Testimonials />
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
}
