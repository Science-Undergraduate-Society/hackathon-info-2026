"use client"

import { useState, useEffect } from "react";
import DarkModeToggle from "../components/darkModeToggle";

// Top Sections
import WhoItsFor from "../../sections/top-section-components/who-its-for";

// Bottom Sections
import WhatToExpect from "../../sections/bottom-section-components/what-to-expect";
import FAQ from "../../sections/bottom-section-components/faq";
import Footer from "../../sections/bottom-section-components/footer";
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
    <div className="font-sans font-figtree text-[#FFDEB1]">
      <div className="fixed top-4 right-4 z-50">
        <DarkModeToggle theme={theme} setTheme={setTheme} />
      </div>

      {/* Background image */}
      <div className="relative w-full">
        <img
          src={theme === "dark" ? "/images/dark-bg-img.png" : "/images/background-img.png"}
          alt="Background"
          className="w-full object-cover"
          style={{ objectPosition: "top center" }}
        />

        {/* Content over image */}
        <div className="absolute inset-0 z-10 flex flex-col items-center pt-12 px-4">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="object-contain h-auto mb-6 w-40 dark:hidden"
          />
          <img
            src="/images/dark-logo.png"
            alt="Logo"
            className="object-contain h-auto mb-6 w-40 hidden dark:block"
          />
          <div className="absolute bottom-0 left-0 w-full h-32 z-1 bg-gradient-to-b from-transparent to-[#34144A] dark:to-[#34144A]" />

          <span className="z-10 uppercase font-extrabold flex gap-4 leading-none text-center text-[100px] dark:text-[#E87FD9] max-xl:text-[80px]">
            <span>HACK</span>
            <span className="self-start leading-[1] text-[60px] max-xl:text-[40px]">
              THE
            </span>
            <span>COAST</span>
          </span>

          <p className="z-10 font-semibold text-center mt-4 text-[48px] max-xl:text-[38px] dark:text-[#CCE4B4]">
            UBC Science’s first-ever Hackathon
          </p>
          <p className="z-10 text-[#833872] font-semibold text-center mt-2 text-[40px] max-xl:text-[30px] dark:text-[#E87FD9]">
            February 7-8, 2026
          </p>

          {/* Call to Action */}
          <div className="z-10 max-w-[728px] mt-8 rounded-[20px] text-[20px] p-8 flex flex-wrap justify-center gap-4 bg-gradient-to-br from-[rgba(52,42,127,0.8)] to-[rgba(36,8,53,0.8)] max-xl:text-[18px]">
            <button className="leading-none border-2 w-[198px] rounded-[20px] p-3 bg-[#34144A] opacity-100 dark:text-[#FFC2DA]">
              Interested? Let us know!
            </button>
            <button className="leading-none border-2 w-[198px] rounded-[20px] p-3 bg-[#FFDEB1] text-[#34144A] opacity-100 dark:bg-[#FFC2DA]">
              Interested in Sponsoring us?
            </button>
            <button className="leading-none border-2 w-[198px] rounded-[20px] p-3 bg-[#34144A] opacity-100 dark:text-[#FFC2DA]">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Top Sections */}
      
      <GeneralInformation />
      <WhoItsFor />

      {/* Bottom Sections */}
      
      <BottomSectionShell>
        <WhatToExpect />
        <FAQ />
        <Footer />
      </BottomSectionShell>
    </div>
  );
}