import React from "react";

type GeneralInformationProps = {
    theme: "light" | "dark";
  };

export default function GeneralInformation({ theme }: GeneralInformationProps) {
    return (
        <div className="relative bg-[#34144A] p-30 px-40 font-figtree text-center flex flex-col max-xl:p-10">
            <img
                src={
                    theme === "dark"
                      ? "/images/dark-bg-curve.png"
                      : "/images/background-curve.png"
                  }
                alt="Background graphic"
                className="absolute top-10 right-0 z-20 w-[16%] pointer-events-none"
            />
            <img
            src={
                theme === "dark"
                  ? "/images/dark-bg-curve-2.png"
                  : "/images/bckground-curve-2.png"
              }
                alt="Background graphic"
                className="absolute top-150 left-0 z-20 w-[40%] pointer-events-none"
            />

            {/* Content */}
            <div className="mb-50 relative z-30">
                <span className="font-bold text-center text-[clamp(1.75rem,4.5vw,3.25rem)]">
                    Dive into Hack the Coast
                </span>
                <p className="mt-8 text-center text-[28px] mx-auto max-xl:text-[18px]">
                    Join us in-person February 7-8, 2026, for an incredible weekend of
                    ideas, creativity, and collaboration. Maybe you’ll code your first
                    app, sketch a new design, solve a big challenge, or just try
                    something completely new.
                </p>
                <p className="mt-8 text-center text-[28px] mx-auto max-xl:text-[18px]">
                    Hackathons aren’t about being the “best coder in the room.” They’re
                    about learning, experimenting, and creating together. Bring your
                    curiosity and we’ll provide the rest.
                </p>
                </div>
                <div className="z-30">
                <span className="font-bold text-center text-[clamp(1.75rem,4.5vw,3.25rem)]">
                    So... what is Hack the Coast?
                </span>
                <p className="mt-8 text-center mx-auto text-[clamp(1rem,1.8vw,1.75rem)]">
                    Hack the Coast is UBC Science’s first-ever hackathon, built to
                    connect disciplines, spark ideas, and give everyone a chance to
                    explore what’s possible.
                </p>
                <p className="mt-8 text-center text-[clamp(1rem,1.8vw,1.75rem)] mx-auto">
                    Think of it as a 24 hour playground for ideas. You’ll form a team,
                    dream up a project, and bring it to life: whether it’s an app, a
                    game, a website, or something no one’s seen before. Along the way,
                    you’ll learn from mentors, attend workshops, meet incredible people,
                    and get a LOT of free swag.
                </p>
                <p className="mt-8 text-center mx-auto text-[clamp(1rem,1.8vw,1.75rem)]">
                    Hosted by the Science Undergraduate Society, Hack the Coast is a
                    free, inclusive, and community-driven experience that welcomes you
                    as you are.
                </p>
            </div>
        </div>
    )
}