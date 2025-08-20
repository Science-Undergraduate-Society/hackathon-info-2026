import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans font-figtree text-[#FFDEB1]">

      {/* Hero Section */}
      <div className="relative w-full min-h-screen bg-[#7A4F8B]">
        <img
          src="/images/background-img.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "top center" }}
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#7A4F8B]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="object-contain h-auto mb-6 w-28 sm:w-32 md:w-40"
          />

          <span className="uppercase font-extrabold flex flex-wrap justify-center gap-2 sm:gap-4 leading-none text-4xl sm:text-6xl md:text-[96px]">
            <span>HACK</span>
            <span className="self-start leading-[1] text-2xl sm:text-4xl md:text-[60px]">
              THE
            </span>
            <span>COAST</span>
          </span>

          <p className="font-semibold mt-6 text-xl sm:text-2xl md:text-[48px]">
            UBC Science Undergraduate Society’s <br /> first-ever hackathon!
          </p>
          <p className="text-[#833872] text-shadow-lg font-semibold mt-2 text-lg sm:text-xl md:text-[40px]">
            February 7-8, 2026
          </p>

          {/* CTA Buttons */}
          <div className="max-w-[728px] mt-8 rounded-[20px] text-base sm:text-lg md:text-[20px] p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row gap-4 bg-gradient-to-br from-[rgba(52,42,127,0.8)] to-[rgba(36,8,53,0.8)]">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdHaRMvV5J7BQl_-eMV1oWkQStbs-9YYsLxhMMQX3MIZku6NQ/viewform"
              className="leading-none border-2 w-full sm:w-[198px] rounded-[20px] p-3 bg-[#34144A] opacity-100 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Interested? Let us know!
            </a>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSehHDfo4VJY3rCKPy72TPAkk8X69DnI5SKLloAPd6pcF1eTig/viewform?usp=sharing&ouid=111247673375906645986"
              className="leading-none border-2 w-full sm:w-[198px] rounded-[20px] p-3 bg-[#FFDEB1] text-[#34144A] opacity-100 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Interested in Sponsoring us?
            </a>
          </div>
        </div>
      </div>

      {/* Next Section */}
      <div className="bg-[#7A4F8B] py-16 px-6 md:px-60 text-center">
        <span className="text-2xl sm:text-4xl md:text-5xl font-bold">
          Welcome to Hack the Coast!
        </span>
        <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-2xl mx-auto max-w-3xl">
          Join us for an incredible weekend of innovation, creativity and
          collaboration. You don’t need to be a coding expert to join.
          Hackathons are about learning, collaborating, and bringing ideas to
          life — with roles like design, strategy, development, or anything else
          you want to explore.
        </p>
      </div>
    </div>
  );
}
