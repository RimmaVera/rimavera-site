import { Approach } from "@/components/Approach";
import { BodySignals } from "@/components/BodySignals";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { MiniProduct } from "@/components/MiniProduct";
import { PrivateProduct } from "@/components/PrivateProduct";
import { Products } from "@/components/Products";
import { SessionBlock } from "@/components/SessionBlock";
import { SocialBlock } from "@/components/SocialBlock";

export default function Home() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <Hero />
        <BodySignals />
        <Approach />
        <MiniProduct />
        <SessionBlock />
        <Products />
        <PrivateProduct />
        <HowItWorks />
        <FAQSection />
        <SocialBlock />
      </main>
      <Footer />
    </div>
  );
}
