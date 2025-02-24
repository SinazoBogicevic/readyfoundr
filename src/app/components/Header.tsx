"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems: { name: string; href: Route }[] = [
  { name: "Home", href: "/" },
  // { name: "What I Offer", href: "/#services" },
  // { name: "How It Works", href: "/#how-it-works" },
  // { name: "FAQ", href: "/#faq" },
  { name: "Blog", href: "/#blog" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="flex items-center text-2xl font-bold text-white"
            style={{ fontFamily: "Afterglow Arrow, sans-serif" }}
          >
            {" "}
            <Image
              src={"/logo.svg"}
              alt="Ready Foundr Logo"
              width={50}
              height={50}
            />
            <span className="text-white ml-2">Ready Foundr</span>
          </Link>
          <nav className="hidden md:flex space-x-4 bg-white/10 backdrop-blur-lg rounded-full p-2">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-full transition-colors ${
                  index === 0
                    ? "bg-white text-gray-900"
                    : "text-white hover:bg-white/20"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <nav className="flex flex-col space-y-4 px-4 py-6 bg-white/10 backdrop-blur-lg">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-white hover:text-gray-300 transition-colors block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
