"use client";

import { useState } from "react";
import BlogPage from "./blog/BlogPage";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
export default function Home() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const handleOpenWaitlist = () => setIsWaitlistOpen(true);
  const handleCloseWaitlist = () => setIsWaitlistOpen(false);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero onOpenWaitlist={handleOpenWaitlist} />
      <BlogPage />
      <Footer />
    </main>
  );
}
