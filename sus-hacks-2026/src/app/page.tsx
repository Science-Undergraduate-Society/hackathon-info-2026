"use client";

import { useState, useEffect } from "react";
import DarkModeToggle from "../components/darkModeToggle";
import Navbar from "../components/navbar";
import { ChevronUp } from "lucide-react"

// Top Sections
import WhoItsFor from "../../sections/top-section-components/who-its-for";

// Bottom Sections
import WhatToExpect from "../../sections/bottom-section-components/what-to-expect";
import Itinerary from "../../sections/bottom-section-components/itinerary";
import FAQ from "../../sections/bottom-section-components/faq";
import Footer from "../../sections/bottom-section-components/footer";
import MeetOurTeam from "../../sections/bottom-section-components/meet-our-team";
import BottomSectionShell from "../../sections/bottom-section-components/bottom-section-shell";
import GeneralInformation from "../../sections/top-section-components/general-information";

type Theme = "light" | "dark";

// Helper to get initial theme
const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem("theme") as Theme | null;
  if (saved === "dark" || saved === "light") return saved;

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
};

export default function Home() {
  const [theme, setTheme] = useState<Theme>("light"); // default for SSR
  const [mounted, setMounted] = useState(false); // check if mounted
  const [arrowVisible, setArrowVisible] = useState(false); // visibility for up arrow

  /**
   * For first render:
   *  - get initial theme from system settings
   */
  useEffect(() => {
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  /**
   * Logic for up arrow - determines its visibility
   */
  useEffect(() => {
    const toggleVisiblity = () => {
      if (window.scrollY > 300) {
        setArrowVisible(true);
      } else {
        setArrowVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisiblity);
    return () => window.removeEventListener("scroll", toggleVisiblity);
  }, []);

  /**
   * Function for onClick of up arrow
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /**
   * Render
   */
  if (!mounted) {
    return null; // <-- safe to return here AFTER all hooks
  }

  return (
    <div
      className={`font-figtree ${
        theme === "dark" ? "text-[#FFC2DA]" : "text-[#FFDEB1]"
      }`}
    >
      {/* Navbar */}
      <Navbar theme={theme} setTheme={setTheme} />
      
      {/* Up arrow for page scroll */}
      {arrowVisible && (
        <button
          onClick={scrollToTop}
          className="z-100 fixed bottom-6 left-1/2 -translate-x-1/2 
                    p-3 rounded-full bg-[#FFC2DA] text-white shadow-lg 
                    animate-bounce cursor-pointer "
        >
          <ChevronUp />
        </button>
      )}

      <div id="home" className="relative w-full bg-[#34144A]">
        <img
          src={
            theme === "dark"
              ? "/images/dark-bg-img.png"
              : "/images/background-img.png"
          }
          alt="Background"
          className="w-full object-cover"
          style={{ objectPosition: "top center" }}
        />

        {/* Content over image */}
        <div className="absolute inset-0 z-10 flex flex-col items-center pt-40 max-md:justify-center max-md:pt-0 px-4 pb-24">
          <img
            src={
              theme === "dark" ? "/images/dark-logo.png" : "/images/logo.png"
            }
            alt="Logo"
            className="object-contain h-auto mb-6 w-34 max-xl:w-17 transition-all duration-500 hover:scale-110 hover:rotate-6 cursor-pointer max-md:hidden"
          />
          <div
            className="absolute bottom-0 left-0 w-full z-1
    bg-gradient-to-b from-transparent to-[#34144A]
    h-32"
          />

          <span
            className={`z-10 uppercase font-extrabold flex gap-4 leading-none text-center text-[clamp(28.9px,4.335vw,72.25px)] max-lg:gap-1 max-md:mt-15 transition-colors duration-500
    ${theme === "dark" ? "text-[#E87FD9]" : "text-[#FFDEB1]"}`}
          >
            <span>HACK</span>
            <span className="self-start leading-[1] text-a[clamp(14.45px,2.89vw,43.35px)]">
              THE
            </span>
            <span>COAST</span>
          </span>

          <p
            className={`z-10 font-semibold text-center mt-4 text-[clamp(17.34px,3.25vw,34.68px)] transition-colors duration-500
    ${theme === "dark" ? "text-[#CCE4B4]" : "text-[#FFDEB1]"}`}
          >
            UBC Science Undergraduate Society&apos;s first-ever Hackathon
          </p>

          <p
            className={`z-10 font-semibold text-center mt-2 text-[clamp(16.62px,3.25vw,28.9px)] transition-colors duration-500
    ${theme === "dark" ? "text-[#E87FD9]" : "text-[#833872]"}`}
          >
            February 7-8, 2026
          </p>

          <p
            className={`z-10 font-medium text-center mt-3 text-[clamp(14px,2.5vw,18px)] transition-colors duration-500
    ${theme === "dark" ? "text-[#FFC2DA]" : "text-[#FFDEB1]"}`}
          >
            Applications open December 5, 2025 @ 12pm
          </p>

          <div
            className={`z-10 max-w-[619px] mt-8 rounded-[17px] p-7 flex flex-nowrap justify-center gap-3 
    bg-gradient-to-br from-[rgba(52,42,127,0.8)] to-[rgba(36,8,53,0.8)] 
    text-[clamp(0.65rem,1.3vw,1rem)] max-md:p-2 max-md:bg-none max-md:gap-2`}
          >
            {/* <button
              className={`leading-none border-2 w-[168px] max-md:w-[110px] rounded-[17px] p-2.5 max-md:p-2 opacity-100 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/50
              ${
                theme === "dark"
                  ? "bg-[#E87FD9] text-[#34144A] border-[#E87FD9] hover:bg-[#FF9FED]"
                  : "bg-[#CCE4B4] text-[#34144A] border-[#CCE4B4] hover:bg-[#D4F0C2]"
              }`}
            >
              <a
                href="https://hackthecoast.susubc.ca" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover"
              >
                Hacker Applications
              </a>
            </button> */}

            <button
              className={`leading-none border-2 w-[168px] max-md:w-[110px] rounded-[17px] p-2.5 max-md:p-2 opacity-100 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50
              ${
                theme === "dark"
                  ? "bg-[#7A4F8B] text-[#FFC2DA] border-[#7A4F8B] hover:bg-[#8E5FA0]"
                  : "bg-[#833872] text-[#FFDEB1] border-[#833872] hover:bg-[#9A4587]"
              }`}
            >
              <a
                href="https://docs.google.com/forms/d/1YLFxByN3PW6BRcyOJyunwSJKMYeQbX9MGGbzY1VJB3c/viewform?edit_requested=true&edit_requested=true" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover"
              >
                Mentor Applications
              </a>
            </button>

            <button
              className={`leading-none border-2 w-[168px] max-md:w-[110px] rounded-[17px] p-2.5 max-md:p-2 opacity-100 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-orange-400/50
              ${
                theme === "dark"
                  ? "bg-[#FFC2DA] text-[#34144A] border-[#FFC2DA] hover:bg-[#FFD4E8]"
                  : "bg-[#FFDEB1] text-[#34144A] border-[#FFDEB1] hover:bg-[#FFE8C8]"
              }`}
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSehHDfo4VJY3rCKPy72TPAkk8X69DnI5SKLloAPd6pcF1eTig/viewform" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover"
              >
                Interested in sponsoring us?
              </a>
            </button>
            {/* <button
              className={`leading-none border-2 w-[198px] rounded-[20px] p-3 opacity-100
              ${
                theme === "dark"
                  ? "bg-[#34144A] text-[#FFC2DA]"
                  : "bg-[#34144A] text-[#FFDEB1]"
              }`}
                    >
              Learn More
            </button> */}
          </div>
        </div>
      </div>

      {/* Top Sections */}

      <div id="about" className="transition-all duration-500">
        <GeneralInformation theme={theme} />
      </div>
      <div id="who-its-for" className="transition-all duration-500">
        <WhoItsFor theme={theme} />
      </div>

      {/* Bottom Sections */}

      <BottomSectionShell theme={theme}>
        <div id="what-to-expect" className="transition-all duration-500">
          <WhatToExpect />
        </div>
        <div id="schedule" className="transition-all duration-500">
          <Itinerary />
        </div>
        <div id="faq" className="transition-all duration-500">
          <FAQ />
        </div>
        <div id="team" className="transition-all duration-500">
          <MeetOurTeam theme={theme} />
        </div>
        <Footer />
      </BottomSectionShell>
    </div>
  );
}
