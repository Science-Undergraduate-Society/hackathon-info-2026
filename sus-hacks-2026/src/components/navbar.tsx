"use client";

import { useState, type CSSProperties } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import DarkModeToggle from "./darkModeToggle";

type Theme = "light" | "dark";

type NavbarProps = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
};

const mlhBadgeStyle: CSSProperties = {
  display: "block",
  width: "60px",
  minWidth: "50px",
  marginTop: "32px",
};

const mlhBadgeImageStyle: CSSProperties = {
  width: "100%",
  height: "auto",
};

export default function Navbar({ theme, setTheme }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", type: "scroll" },
    { name: "About", href: "#about", type: "scroll" },
    { name: "Who It's For", href: "#who-its-for", type: "scroll" },
    { name: "What to Expect", href: "#what-to-expect", type: "scroll" },
    { name: "Schedule", href: "#schedule", type: "scroll" },
    { name: "FAQ", href: "#faq", type: "scroll" },
    { name: "Team", href: "#team", type: "scroll" },
    { name: "Sponsors", href: "#sponsors", type: "scroll" },
    { name: "Winners", href: "/winners", type: "link" }
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
      className={`fixed top-0 left-0 w-full z-40 transition-colors duration-300 ${
        theme === "dark" ? "text-[#FFC2DA]" : "text-[#FFDEB1]"
      } bg-transparent backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-5 px-5">
        <div className="flex items-center justify-between h-[4.5rem]">

          {/* Logos */}
          
          <div className="flex-shrink-0 flex gap-5 items-center">

            {/* MLH Banner */}
            <div 
              className="hidden lg:flex"
            >
              <a
                id="mlh-trust-badge"
                href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
                target="_blank"
                rel="noopener noreferrer"
                style={mlhBadgeStyle}
              >
                <img
                  src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
                  alt="Major League Hacking 2026 Hackathon Season"
                  style={mlhBadgeImageStyle}
                />
              </a>
            </div>

            {/* HackTheCoast Logo */}
            {/* <button
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
            </button> */}

            {/* SUS Logo */}
            <a
              className="hidden lg:flex items-center gap-2 hover:opacity-80 transition-opacity cursor-pointer"
              href="https://www.susubc.ca/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/sus-logo-long.png"
                alt="Logo"
                className="h-35 w-35 object-contain"
              />
            </a>

          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {navLinks.map((link) =>
              link.type === "link" ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-2 py-1 rounded-md text-[0.938rem] font-medium transition-all hover:scale-105 cursor-pointer ${
                    theme === "dark"
                      ? "hover:bg-[#E87FD9]/20"
                      : "hover:bg-[#FFDEB1]/20"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-2 py-1 rounded-md text-[0.938rem] font-medium transition-all hover:scale-105 cursor-pointer ${
                    theme === "dark"
                      ? "hover:bg-[#E87FD9]/20"
                      : "hover:bg-[#FFDEB1]/20"
                  }`}
                >
                  {link.name}
                </button>
              )
            )}
            <DarkModeToggle theme={theme} setTheme={setTheme} />
          </div>

          {/* Mobile controls */}
          <div className="lg:hidden flex items-center gap-2">
            <DarkModeToggle theme={theme} setTheme={setTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) =>
              link.type === "link" ? (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block w-full text-left px-2 py-1 rounded-md text-base font-medium transition-all cursor-pointer ${
                    theme === "dark"
                      ? "hover:bg-[#E87FD9]/20"
                      : "hover:bg-[#FFDEB1]/20"
                  }`}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full text-left px-2 py-1 rounded-md text-base font-medium transition-all cursor-pointer ${
                    theme === "dark"
                      ? "hover:bg-[#E87FD9]/20"
                      : "hover:bg-[#FFDEB1]/20"
                  }`}
                >
                  {link.name}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
