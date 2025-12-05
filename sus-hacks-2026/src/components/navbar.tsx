"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import DarkModeToggle from "./darkModeToggle";

type Theme = "light" | "dark";

type NavbarProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

export default function Navbar({ theme, setTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Who It's For", href: "#who-its-for" },
    { name: "What to Expect", href: "#what-to-expect" },
    { name: "Schedule", href: "#schedule" },
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
          ? "bg-[#003476]/95 text-[#FFC2DA]"
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
                className={`px-2 py-1 rounded-md text-sm font-medium transition-all hover:scale-105 ${
                  theme === "dark"
                    ? "hover:bg-[#E87FD9]/20"
                    : "hover:bg-[#FFDEB1]/20"
                }`}
              >
                {link.name}
              </button>
            ))}
            <DarkModeToggle theme={theme} setTheme={setTheme} />
          </div>

          {/* Mobile controls */}
          <div className="md:hidden flex items-center gap-2">
            <DarkModeToggle theme={theme} setTheme={setTheme} />
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
                className={`block w-full text-left px-2 py-1 rounded-md text-base font-medium transition-all ${
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
