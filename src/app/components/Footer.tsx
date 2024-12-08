// import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

// const socialLinks = [
//   { icon: Facebook, href: "#" },
//   { icon: Twitter, href: "#" },
//   { icon: Instagram, href: "#" },
//   { icon: Linkedin, href: "#" },
// ];

const navLinks: { name: string; href: Route }[] = [
  { name: "Home", href: "/" },
  { name: "What I Offer", href: "/#services" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "FAQ", href: "/#faq" },
  { name: "Blog", href: "/blog" },
  // { name: "Privacy Policy", href: "/privacy" },
  // { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center text-xl font-bold">
              <Image
                src={"/logo.svg"}
                alt="Ready Foundr Logo"
                width={50}
                height={50}
              />
              <span className="text-white ml-2">Ready Foundr</span>
            </Link>
          </div>
          <nav className="mb-6 md:mb-0">
            <ul className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-gray-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          {/* <div className="flex space-x-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-gray-300 transition-colors"
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div> */}
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Ready Foundr. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
