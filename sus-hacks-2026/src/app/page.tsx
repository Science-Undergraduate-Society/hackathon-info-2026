"use client";

import { useState, useEffect } from "react";
import DarkModeToggle from "../components/darkModeToggle";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Run only on client
    setTheme(getInitialTheme());
    setMounted(true);
  }, []);

  if (!mounted) return null; // don't render anything until client mounts

  return (
    <div
      className={`font-figtree ${
        theme === "dark" ? "text-[#FFC2DA]" : "text-[#FFDEB1]"
      }`}
    >
      <div className="fixed top-4 right-4 z-50 ">
        <DarkModeToggle theme={theme} setTheme={setTheme} />
      </div>

      <div className="relative w-full max-sm:pb-[clamp(100px,calc(200px+(500px-100vw)),300px)] bg-[#34144A]">
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
            className="object-contain h-auto mb-6 w-40 max-xl:w-20"
          />
          <div
            className="absolute bottom-0 left-0 w-full z-1
    bg-gradient-to-b from-transparent to-[#34144A]
    h-32"
          />

          <span
            className={`z-10 uppercase font-extrabold flex gap-4 leading-none text-center text-[clamp(40px,6vw,100px)] max-lg:gap-1
    ${theme === "dark" ? "text-[#E87FD9]" : "text-[#FFDEB1]"}`}
          >
            <span>HACK</span>
            <span className="self-start leading-[1] text-[clamp(20px,4vw,60px)]">
              THE
            </span>
            <span>COAST</span>
          </span>

          <p
            className={`z-10 font-semibold text-center mt-4 text-[clamp(24px,4.5vw,48px)]
    ${theme === "dark" ? "text-[#CCE4B4]" : "text-[#FFDEB1]"}`}
          >
            UBC Science’s first-ever Hackathon
          </p>

          <p
            className={`z-10 font-semibold text-center mt-2 text-[clamp(23px,4.5vw,40px)]
    ${theme === "dark" ? "text-[#E87FD9]" : "text-[#833872]"}`}
          >
            February 7-8, 2026
          </p>

          <div
            className={`z-10 max-w-[728px] mt-8 rounded-[20px] p-8 flex flex-wrap justify-center gap-4 
    bg-gradient-to-br from-[rgba(52,42,127,0.8)] to-[rgba(36,8,53,0.8)] 
    text-[clamp(1rem,1.8vw,1.3rem)] max-md:p-4`}
          >
            <button
              className={`leading-none border-2 w-[198px] rounded-[20px] p-3 opacity-100
      ${
        theme === "dark"
          ? "bg-[#34144A] text-[#FFC2DA]"
          : "bg-[#34144A] text-[#FFDEB1]"
      }`}
            >
              Interested? Let us know!
            </button>
            <button
              className={`leading-none border-2 w-[198px] rounded-[20px] p-3 opacity-100
      ${
        theme === "dark"
          ? "bg-[#FFC2DA] text-[#34144A]"
          : "bg-[#FFDEB1] text-[#34144A]"
      }`}
            >
              Interested in Sponsoring us?
            </button>
            <button
              className={`leading-none border-2 w-[198px] rounded-[20px] p-3 opacity-100
      ${
        theme === "dark"
          ? "bg-[#34144A] text-[#FFC2DA]"
          : "bg-[#34144A] text-[#FFDEB1]"
      }`}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Top Sections */}

      <GeneralInformation theme={theme} />
      <WhoItsFor theme={theme} />

      {/* Bottom Sections */}

      <BottomSectionShell theme={theme}>
        <WhatToExpect />
        <FAQ />
        <MeetOurTeam theme={theme} />
        <Footer />
      </BottomSectionShell>
    </div>
  );
}
