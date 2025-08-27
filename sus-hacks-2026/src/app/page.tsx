"use client";

import { useState, useEffect } from "react";
import React from "react";
import WhatToExpect from "../../sections/what-to-expect";
import FAQ from "../../sections/faq";
import Footer from "../../sections/footer";
import SectionShell from "../../sections/section-shell";
import DarkModeToggle from "../components/darkModeToggle";
import {
  faMicroscope,
  faCode,
  faPalette,
  faLightbulb,
  faBrain,
  faLeaf
} from "@fortawesome/free-solid-svg-icons";
import Card from "../components/card";

// Type for colour theme
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
      {/* HERO */}
      <div className="relative w-full min-h-[min(100svh,1200px)] bg-[#7A4F8B]">
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#7A4F8B]" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[min(100svh,1200px)] px-4 text-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="object-contain h-auto mb-6 w-[clamp(7rem,10vw,10rem)]"

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

          <span className="uppercase font-extrabold flex flex-wrap justify-center gap-2 sm:gap-3 leading-none text-[clamp(2.25rem,8vw,6rem)]">
            <span>HACK</span>
            <span className="self-start leading-[1] text-[clamp(1.5rem,5.5vw,3.75rem)]">THE</span>
            <span>COAST</span>
          </span>

          <p className="font-semibold mt-5 text-[clamp(1.125rem,3.2vw,3rem)]">
            UBC Science Undergraduate Society’s <br /> first-ever hackathon!
          </p>
          <p className="text-[#833872] text-shadow-lg font-semibold mt-1 text-[clamp(1rem,2.8vw,2.5rem)]">
            February 7-8, 2026
          </p>

          {/* CTA Buttons */}
          <div className="max-w-[min(90vw,46rem)] mt-8 rounded-[20px] text-[clamp(0.95rem,1vw,1.25rem)] p-4 sm:p-6 md:p-7 flex flex-col sm:flex-row gap-4 bg-gradient-to-br from-[rgba(52,42,127,0.8)] to-[rgba(36,8,53,0.8)]">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdHaRMvV5J7BQl_-eMV1oWkQStbs-9YYsLxhMMQX3MIZku6NQ/viewform"
              className="leading-none border-2 w-full sm:w-auto rounded-[20px] px-4 py-3 bg-[#34144A] opacity-100 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Interested? Let us know!
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSehHDfo4VJY3rCKPy72TPAkk8X69DnI5SKLloAPd6pcF1eTig/viewform?usp=sharing&ouid=111247673375906645986"
              className="leading-none border-2 w-full sm:w-auto rounded-[20px] px-4 py-3 bg-[#FFDEB1] text-[#34144A] opacity-100 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
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

      {/* WELCOME TEXT */}
      <div className="bg-[#7A4F8B] py-14 md:py-16 px-6 md:px-[clamp(2rem,12vw,15rem)] text-center">
        <span className="block text-[clamp(1.25rem,4.2vw,2.75rem)] font-bold">
          Welcome to Hack the Coast!
        </span>
        <p className="mt-5 md:mt-6 text-[clamp(0.95rem,2.2vw,1.5rem)] mx-auto max-w-3xl">
          Join us for an incredible weekend of innovation, creativity and
          collaboration. You don’t need to be a coding expert to join.
          Hackathons are about learning, collaborating, and bringing ideas to
          life — with roles like design, strategy, development, or anything else
          you want to explore.
        </p>
      {/* Next content section */}
      <div className="relative bg-[#34144A] p-30 px-40 pb-80 font-figtree text-center flex flex-col dark:text-[#FFC2DA] dark:bg-[#34144A]">
        <img
          src="/images/background-curve.png"
          alt="Background graphic"
          className="absolute top-10 right-0 w-60 pointer-events-none"
        />
        <img
          src="/images/bckground-curve-2.png"
          alt="Background graphic"
          className="absolute top-150 left-0 w-150 pointer-events-none"
        />

        {/* Content */}
        <div className="mb-50 relative z-10">
          <span className="text-[48px] font-bold text-center max-xl:text-[40px]">
            Dive into Hack the Coast
          </span>
          <p className="mt-8 text-center text-[28px] mx-auto">
            Join us in-person February 7-8, 2026, for an incredible weekend of
            ideas, creativity, and collaboration. Maybe you’ll code your first
            app, sketch a new design, solve a big challenge, or just try
            something completely new.
          </p>
          <p className="mt-8 text-center text-[28px] mx-auto">
            Hackathons aren’t about being the “best coder in the room.” They’re
            about learning, experimenting, and creating together. Bring your
            curiosity and we’ll provide the rest.
          </p>
        </div>
        <div>
          <span className="text-[48px] font-bold text-center max-xl:text-[40px]">
            So... what is Hack the Coast?
          </span>
          <p className="mt-8 text-center text-[28px] mx-auto max-xl:text-[18px]">
            Hack the Coast is UBC Science’s first-ever hackathon, built to
            connect disciplines, spark ideas, and give everyone a chance to
            explore what’s possible.
          </p>
          <p className="mt-8 text-center text-[28px] mx-auto max-xl:text-[18px]">
            Think of it as a 24 hour playground for ideas. You’ll form a team,
            dream up a project, and bring it to life: whether it’s an app, a
            game, a website, or something no one’s seen before. Along the way,
            you’ll learn from mentors, attend workshops, meet incredible people,
            and get a LOT of free swag.
          </p>
          <p className="mt-8 text-center text-[28px] mx-auto max-xl:text-[18px]">
            Hosted by the Science Undergraduate Society, Hack the Coast is a
            free, inclusive, and community-driven experience that welcomes you
            as you are.
          </p>
        </div>
      </div>
      <div className="relative bg-[#34144A] p-20 pb-80 font-figtree text-center flex flex-col">
        <img
          src="/images/skyline.png"
          alt="Background graphic"
          className="absolute bottom-100 right-0 w-full pointer-events-none"
        />
        <div className="relative p-30 px-20 font-figtree text-center flex flex-col dark:text-[#FFC2DA]">
          <div className="mb-50 relative z-10">
            <span className="text-[48px] font-bold text-center">
              Who is Hack the Coast For?
            </span>
            <p className="mt-8 text-center text-[28px] mx-auto max-xl:text-[18px]">
              This hackathon is for everyone: first-timers, veterans, and the
              simply curious. You don’t need experience, just the excitement to
              jump in.
            </p>
            <p className="mt-8 text-center text-[28px] mx-auto max-xl:text-[18px]">
              We aim to create an environment where experienced hackers can
              challenge themselves, and first-timers feel supported through
              mentorship and workshops. You’ll get support, mentorship, and the
              freedom to take on a role that fits you. No gatekeeping, no
              experience required, and no cost to participate.
            </p>
            <div className="grid grid-rows-2 grid-cols-3 gap-10 mt-20">
              <Card
                icon={faLeaf}
                title="First-Time Hacker"
                description="Try something brand new with plenty of hands-on support and learning"
              />
              <Card
                icon={faMicroscope}
                title="Science Student"
                description="Discover how tech connects to physics, biology, chemistry, and beyond"
              />
              <Card
                icon={faCode}
                title="Developer"
                description="Challenge your skills with complex problems and collaborate with diverse teams"
              />
              <Card
                icon={faPalette}
                title="Designer and Artist"
                description="Bring your creative visions to life, help teams create beautiful, user-friendly experiences that make a difference"
              />
              <Card
                icon={faLightbulb}
                title="Problem Solver"
                description="Love working in teams and tackling challenges? Bring you big ideas to contribute to innovative solutions"
              />
              <Card
                icon={faBrain}
                title="Curious Mind"
                description="Explore new tools, learn from experts, and see where creativity takes you"
              />
            </div>
          </div>
        </div>
      </div>

      <SectionShell>
        <WhatToExpect />
        <FAQ />
        <Footer />
      </SectionShell>
    </div>
  );
}