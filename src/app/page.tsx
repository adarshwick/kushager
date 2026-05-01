import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoCarousel from "@/components/VideoCarousel";
import AboutSection from "@/components/AboutSection";
import CredentialsSection from "@/components/CredentialsSection";
import StudentsSection from "@/components/StudentsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ContactWidget from "@/components/ContactWidget";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#faf8f5] text-[#1c1917]">
      <Navbar />
      <HeroSection />
      <VideoCarousel />
      <AboutSection />
      <CredentialsSection />
      <StudentsSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <ContactWidget />
    </main>
  );
}
