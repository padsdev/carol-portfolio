import HeroSection from "./components/HeroSection";
import ServicesGrid from "./components/ServicesGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main
      className="scroll-snap-container overflow-x-hidden"
    >
      {/* Hero Section */}
      <section
        className="snap-section relative flex flex-col justify-center bg-background overflow-hidden"
      >
        <HeroSection />
      </section>

      {/* Services + Footer Section */}
      <section
        className="snap-section-auto flex flex-col justify-between"
      >
        <div className="flex-grow">
          <ServicesGrid />
        </div>
        <Footer />
      </section>
    </main>
  );
}
