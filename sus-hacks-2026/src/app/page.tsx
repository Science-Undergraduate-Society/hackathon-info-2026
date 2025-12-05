"use client";

import { useState, useEffect } from "react";
import DarkModeToggle from "../components/darkModeToggle";
import Navbar from "../components/navbar";
import { ChevronUp } from "lucide-react"

// Top Sections
import WhoItsFor from "../../sections/top-section-components/who-its-for";

// Bottom Sections
import WhatToExpect from "../../sections/bottom-section-components/what-to-expect";
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
      <Navbar theme={theme} />
      
      {/* Toggle for theme */}
      <div className="fixed top-4 right-4 z-50 ">
        <DarkModeToggle theme={theme} setTheme={setTheme} />
      </div>
      
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

      <div id="home" className="relative w-full max-sm:pb-[clamp(100px,calc(200px+(500px-100vw)),300px)] bg-[#34144A]">
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
        <div className="absolute inset-0 z-10 flex flex-col items-center pt-12 px-4">
          <img
            src={
              theme === "dark" ? "/images/dark-logo.png" : "/images/logo.png"
            }
            alt="Logo"
            className="object-contain h-auto mb-6 w-34 max-xl:w-17"
          />
          <div
            className="absolute bottom-0 left-0 w-full z-1
    bg-gradient-to-b from-transparent to-[#34144A]
    h-32"
          />

          <span
            className={`z-10 uppercase font-extrabold flex gap-4 leading-none text-center text-[clamp(34px,5.1vw,85px)] max-lg:gap-1
    ${theme === "dark" ? "text-[#E87FD9]" : "text-[#FFDEB1]"}`}
          >
            <span>HACK</span>
            <span className="self-start leading-[1] text-[clamp(17px,3.4vw,51px)]">
              THE
            </span>
            <span>COAST</span>
          </span>

          <p
            className={`z-10 font-semibold text-center mt-4 text-[clamp(20.4px,3.825vw,40.8px)]
    ${theme === "dark" ? "text-[#CCE4B4]" : "text-[#FFDEB1]"}`}
          >
            UBC Science Undergraduate Society&apos;s first-ever Hackathon
          </p>

          <p
            className={`z-10 font-semibold text-center mt-2 text-[clamp(19.55px,3.825vw,34px)]
    ${theme === "dark" ? "text-[#E87FD9]" : "text-[#833872]"}`}
          >
            February 7-8, 2026
          </p>

          <div
            className={`z-10 max-w-[619px] mt-8 rounded-[17px] p-7 flex flex-wrap justify-center gap-3 
    bg-gradient-to-br from-[rgba(52,42,127,0.8)] to-[rgba(36,8,53,0.8)] 
    text-[clamp(0.85rem,1.53vw,1.105rem)] max-md:p-3`}
          >
            <button
              className={`leading-none border-2 w-[168px] rounded-[17px] p-2.5 opacity-100
              ${
                theme === "dark"
                  ? "bg-[#34144A] text-[#FFC2DA]"
                  : "bg-[#34144A] text-[#FFDEB1]"
              }`}
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdHaRMvV5J7BQl_-eMV1oWkQStbs-9YYsLxhMMQX3MIZku6NQ/viewform" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover"
              >
                Interested in competing?
              </a>
            </button>

            <button
              className={`leading-none border-2 w-[168px] rounded-[17px] p-2.5 opacity-100
              ${
                theme === "dark"
                  ? "bg-[#FFC2DA] text-[#34144A]"
                  : "bg-[#FFDEB1] text-[#34144A]"
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

      <div id="about">
        <GeneralInformation theme={theme} />
      </div>
      <div id="who-its-for">
        <WhoItsFor theme={theme} />
      </div>

      {/* Bottom Sections */}

      <BottomSectionShell theme={theme}>
        <div id="what-to-expect">
          <WhatToExpect />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="team">
          <MeetOurTeam theme={theme} />
        </div>
        <Footer />
      </BottomSectionShell>
    </div>
  );
}
