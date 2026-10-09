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
import loungeImg from "./assets/images/barber_interior_lounge_1791418341427.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-[#07080B] text-[#E2E8F0] selection:bg-[#D4AF37]/20 selection:text-[#F3E5AB] relative">
      {/* Subtle fixed theme background picture across the page */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={loungeImg}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-[0.05] filter blur-[2px]"
        />
        <div className="absolute inset-0 bg-[#07080B]/90" />
      </div>

      {/* Fixed Luxury Navigation */}
      <Navbar />

      <main className="relative z-10">
        {/* Bold Hero with clearly visible barbershop studio background picture */}
        <Hero />

        {/* Prestige Stats Ribbon */}
        <StatsRibbon />

        {/* Most Popular Styles Lookbook */}
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
