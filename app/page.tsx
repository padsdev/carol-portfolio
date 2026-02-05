import HeroSection from "./components/HeroSection";
import ServicesGrid from "./components/ServicesGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main
      style={{
        height: '100vh',
        overflowY: 'scroll',
        scrollSnapType: 'y mandatory',
      }}
      className="scroll-snap-container overflow-x-hidden"
    >
      {/* Hero Section */}
      <section
        style={{ scrollSnapAlign: 'start', scrollSnapStop: 'always', height: '100vh' }}
        className="snap-section relative flex flex-col justify-center bg-background overflow-hidden"
      >
        <HeroSection />
      </section>

      {/* Services + Footer Section */}
      <section
        style={{ scrollSnapAlign: 'start', minHeight: '100vh' }}
        className="flex flex-col justify-between"
      >
        <div className="flex-grow">
          <ServicesGrid />
        </div>
        <Footer />
      </section>
    </main>
  );
}
