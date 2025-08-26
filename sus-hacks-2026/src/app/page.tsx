"use client";

import React from "react";
import WhatToExpect from "../../sections/what-to-expect";
import FAQ from "../../sections/faq";
import Footer from "../../sections/footer";
import SectionShell from "../../sections/section-shell";

export default function Home() {
  return (
    <div className="font-sans font-figtree text-[#FFDEB1]">
      {/* HERO */}
      <div className="relative w-full min-h-[min(100svh,1200px)] bg-[#7A4F8B]">
        <img
          src="/images/background-img.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "top center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#7A4F8B]" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-[min(100svh,1200px)] px-4 text-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="object-contain h-auto mb-6 w-[clamp(7rem,10vw,10rem)]"
          />

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
              Interested in Sponsoring us?
            </a>
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
      </div>

      <SectionShell>
        <WhatToExpect />
        <FAQ />
        <Footer />
      </SectionShell>
    </div>
  );
}
