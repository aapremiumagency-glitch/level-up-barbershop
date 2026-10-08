import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StatsRibbon from "./components/StatsRibbon";
import SignatureLookbook from "./components/SignatureLookbook";
import PricingMenu from "./components/PricingMenu";
import ReviewsSection from "./components/ReviewsSection";
import ExperienceSection from "./components/ExperienceSection";
import LocationSection from "./components/LocationSection";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import MobileQuickBar from "./components/MobileQuickBar";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0B0E] text-[#E2E8F0] selection:bg-[#D4AF37]/20 selection:text-[#F3E5AB]">
      {/* Fixed Luxury Navigation */}
      <Navbar />

      <main>
        {/* Bold, Clean Hero */}
        <Hero />

        {/* Prestige Stats Ribbon (4.9 ★ Rating, 12 Services, etc.) */}
        <StatsRibbon />

        {/* Most Popular Styles Lookbook with Direct Call Action */}
        <SignatureLookbook />

        {/* Official 12-Service Price Menu */}
        <PricingMenu />

        {/* Google Reviews & London Client Testimonials */}
        <ReviewsSection />

        {/* Visual Studio & Craft Showcase */}
        <ExperienceSection />

        {/* Studio Location, Operating Hours & Directions */}
        <LocationSection />

        {/* Final Conversion Banner */}
        <CtaBanner />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Mobile Sticky Quick-Call Bar */}
      <MobileQuickBar />
    </div>
  );
}
