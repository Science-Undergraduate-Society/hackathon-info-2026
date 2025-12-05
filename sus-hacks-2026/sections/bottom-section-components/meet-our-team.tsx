import React, { useState } from "react";

type Props = {
  theme: "light" | "dark";
};

export default function MeetOurTeam({ theme }: Props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const gondolas = [
    {
      img: theme === "dark" ? "/images/dark-gondola-1.png" : "/images/gondola-1.png",
      name1: "Claire Zhang: Hackathon Co-Lead",
      name2: "Carmen Choo: Hackathon Co-Lea",
      name3: "Corbin Platti: Outreach Committee Lead",
      delay: "0s",
    },
    {
      img: theme === "dark" ? "/images/dark-gondola-2.png" : "/images/gondola-2.png",
      name1: "Ridhi: Logistics Committee Member",
      name2: "Alan Wu: Logistics Committee Member",
      name3: "Hilary Chow: Logistics Committee Member",
      delay: "4s",
    },
    {
      img: theme === "dark" ? "/images/dark-gondola-3.png" : "/images/gondola-3.png",
      name1: "Insha Majeed: Outreach Committee Member",
      name2: "Eric Song: Outreach Committee Member",
      name3: "Lexi Wong",
      delay: "8s",
    },
    {
      img: theme === "dark" ? "/images/dark-gondola-4.png" : "/images/gondola-4.png",
      name1: "Gianna Li: Engagement Committee Lead",
      name2: "Cindy Wu: Engagement Committee Member",
      name3: "Eric Xiao: Engagement Committee Member",
      delay: "12s",
    },
    {
      img: theme === "dark" ? "/images/dark-gondola-5.png" : "/images/gondola-5.png",
      name1: "Arnavdeep: Marketing Committee Lead",
      name2: "Ramayani: Marketing Committee Member",
      name3: "Norinne: Marketing Committee Member & UX Designer",
      delay: "16s",
    },
    {
      img: theme === "dark" ? "/images/dark-gondola-6.png" : "/images/gondola-6.png",
      name1: "David Lim: Developer Lead",
      name2: "Eojin Lee: Developer",
      name3: "Ruhani Mittal: Developer",
      delay: "20s",
    },
  ];

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Background */}
      <img
        src={theme === "dark" ? "/images/dark-team-bg.png" : "/images/team-bg.png"}
        alt="Background"
        className="w-full h-auto object-cover"
      />

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center text-center px-6 sm:px-12 md:px-20 pt-24 animate-fade-in-up">
        <h2 className="font-extrabold leading-tight text-[clamp(1.4875rem,3.825vw,2.7625rem)] z-30">
          Meet Our Team
        </h2>
        <p className="mt-3 md:mt-5 text-[clamp(0.85rem,1.53vw,1.4875rem)] opacity-95 z-30">
          Meet the brains and heart behind Hack the Coast!
          <br />
          We're a crew of science lovers, tech enthusiasts, and event planners
          excited to bring you UBC Science's very first hackathon.
        </p>
      </div>

      {/* Cable */}
      <div className="cable absolute left-0 w-[120vw] h-[clamp(2px,0.5vh,5px)] bg-[#130937] rotate-[30deg] origin-top-left z-20 top-[360px] sm:top-[330px] md:top-[340px] lg:top-[360px]" />

      {/* Gondolas */}
      <div className={`gondola-container ${hoveredIndex !== null ? "paused" : ""}`}>
        {gondolas.map((g, i) => (
          <div
            key={i}
            className="gondola absolute flex flex-col items-center transition-all duration-300 top-[400px] sm:top-[365px] md:top-[380px] lg:top-[400px]"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              left: "0",
              // DURATION = 24s to match last delay (20s) + spacing (4s)
              animation: `gondolaMove 24s linear infinite`,
              animationDelay: g.delay,
              animationPlayState: hoveredIndex !== null ? "paused" : "running",
              animationFillMode: "both", // keep transforms set between cycles
              zIndex: i + 10,
              willChange: "transform",
            }}
          >
            <img src={g.img} alt={g.name1} className="w-[70%] sm:w-[80%] md:w-[90%] lg:w-[100%]" />

            {hoveredIndex === i && (
              <p
                className={`absolute bottom-[5%] text-center text-sm md:text-base lg:text-md font-semibold ${
                  theme === "dark" ? "text-[#FFC2DA]" : "text-[#FFDEB1]"
                }`}
                style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
              >
                {g.name1}
                <br />
                {g.name2}
                <br />
                {g.name3}
              </p>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        /*
          IMPORTANT:
          - Original movement was (1200, 693) at 16s.
          - To keep the same visual speed when using 24s, scale the travel by 24/16 = 1.5.
          - 1200 * 1.5 = 1800  (horizontal)
          - 693 * 1.5  = 1039.5 ≈ 1040 (vertical)
        */

        @keyframes gondolaMove {
  0% {
    transform: translate(-400px, -200px);
  }
  100% {
    transform: translate(1800px, 1040px);
  }
}

        /* mobile movement: keep proportional */
        @keyframes gondolaMoveMobile {
          0% {
            transform: translateX(0);
          }
          99% {
            transform: translateX(600px);
          }
          100% {
            transform: translateX(0);
          }
        }

        .gondola-container.paused .gondola {
          animation-play-state: paused;
        }

        /* desktop: stagger starting left positions so loops don't land on top */
        .gondola:nth-child(1) { left: -200px; }
        .gondola:nth-child(2) { left: -420px; }
        .gondola:nth-child(3) { left: -640px; }
        .gondola:nth-child(4) { left: -860px; }
        .gondola:nth-child(5) { left: -1080px; }
        .gondola:nth-child(6) { left: -1300px; }

        /* MOBILE: keep your original mobile offsets and mobile animation */
        @media (max-width: 780px) {
          .cable {
            transform: none !important;
            rotate: 0deg;
            top: 330px !important;
            left: 0 !important;
            width: 140vw !important;
          }

          .gondola img {
            width: 100% !important;
            max-width: 190px !important;
          }

          .gondola {
            animation: gondolaMoveMobile 16s linear infinite !important;
            animation-play-state: running !important;
            top: 320px !important; /* aligns with straight cable */
            z-index: 30;
          }

          .gondola:nth-child(1) { left: -120px !important; }
          .gondola:nth-child(2) { left: -380px !important; }
          .gondola:nth-child(3) { left: -640px !important; }
          .gondola:nth-child(4) { left: -900px !important; }
          .gondola:nth-child(5) { left: -1160px !important; }
          .gondola:nth-child(6) { left: -1420px !important; }
        }

        @media (max-width: 470px) {
          .cable { transform: none !important; rotate: 0deg; top: 320px; }
          .gondola img { width: 100% !important; max-width: 140px !important; }
          .gondola { animation: gondolaMoveMobile 6s linear infinite !important; top: 300px !important; }
        }
      `}</style>
    </div>
  );
}
