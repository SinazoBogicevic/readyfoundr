"use client";

import { useState } from "react";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import RocketAnimation from "./components/RocketAnimation";
import { ServiceOverview } from "./components/ServiceOverview";
import WaitlistPopup from "./components/WaitlistPopup";

export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleOpenWaitlist = () => setIsWaitlistOpen(true);
  const handleCloseWaitlist = () => setIsWaitlistOpen(false);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero onOpenWaitlist={handleOpenWaitlist} />
      <RocketAnimation />
      <ServiceOverview />
      <HowItWorks />
      <FAQ />
      <Footer />
      <WaitlistPopup isOpen={isWaitlistOpen} onClose={handleCloseWaitlist} />
    </main>
  );
}
