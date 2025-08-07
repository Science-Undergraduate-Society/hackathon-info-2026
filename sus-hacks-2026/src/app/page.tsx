import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans font-figtree text-[#FFDEB1]">
      {/* Background image at original height */}
      <div className="relative w-full">
        <img
          src="/images/background-img.png"
          alt="Background"
          className="w-full object-cover"
          style={{ objectPosition: "top center" }}
        />

        {/* Content over image */}
        <div className="absolute inset-0 z-10 flex flex-col items-center pt-12 px-4">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="object-contain h-auto mb-6 w-40"
          />
          <div className="absolute bottom-0 left-0 w-full h-32 z-1 bg-gradient-to-b from-transparent to-[#7A4F8B]" />

          <span className="z-10 uppercase font-extrabold flex gap-4 leading-none text-center text-[100px] max-xl:text-[80px]">
            <span>HACK</span>
            <span className="self-start leading-[1] text-[60px] max-xl:text-[40px]">THE</span>
            <span>COAST</span>
          </span>

          <p className="z-10 font-semibold text-center mt-4 text-[48px] max-xl:text-[38px]">
            UBC Science’s first-ever Hackathon
          </p>
          <p className="z-10 text-[#833872] font-semibold text-center mt-2 text-[40px] max-xl:text-[30px]">
            February 7-8, 2026
          </p>

          {/* Call to Action */}
          <div className="z-10 max-w-[728px] mt-8 rounded-[20px] text-[20px] p-8 flex flex-wrap justify-center gap-4 bg-gradient-to-br from-[rgba(52,42,127,0.8)] to-[rgba(36,8,53,0.8)] max-xl:text-[18px]">
            <button className="leading-none border-2 w-[198px] rounded-[20px] p-3 bg-[#34144A] opacity-100">
              Interested? Let us know!
            </button>
            <button className="leading-none border-2 w-[198px] rounded-[20px] p-3 bg-[#FFDEB1] text-[#34144A] opacity-100">
              Interested in Sponsoring us?
            </button>
            <button className="leading-none border-2 w-[198px] rounded-[20px] p-3 bg-[#34144A] opacity-100">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Next content section */}
      <div className="bg-[#7A4F8B] p-30 px-60 font-figtree text-center">
        <span className="text-5xl font-bold text-center max-xl:text-[40px]">
          Welcome to Hack the Coast!
        </span>
        <p className="mt-8 text-center text-2xl mx-auto max-xl:text-[18px]">
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