"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  theme: "light" | "dark";
};

export default function Navbar({ theme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Who It's For", href: "#who-its-for" },
    { name: "What to Expect", href: "#what-to-expect" },
    { name: "FAQ", href: "#faq" },
    { name: "Team", href: "#team" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`w-full z-40 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#7A4F8B]/95 text-[#FFC2DA]"
          : "bg-[#7A4F8B]/95 text-[#FFDEB1]"
      } backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("#home")}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <img
                src={
                  theme === "dark"
                    ? "/images/dark-logo.png"
                    : "/images/logo.png"
                }
                alt="Logo"
                className="h-10 w-10 object-contain"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`px-2 py-1 rounded-md text-xs font-medium transition-all hover:scale-105 ${
                  theme === "dark"
                    ? "hover:bg-[#E87FD9]/20"
                    : "hover:bg-[#FFDEB1]/20"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className={`block w-full text-left px-2 py-1 rounded-md text-sm font-medium transition-all ${
                  theme === "dark"
                    ? "hover:bg-[#E87FD9]/20"
                    : "hover:bg-[#FFDEB1]/20"
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
