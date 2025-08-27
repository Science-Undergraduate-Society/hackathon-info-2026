import React from "react";

export default function GeneralInformation() {
    return (
        <div className="relative bg-[#34144A] p-30 px-40 pb-80 font-figtree text-center flex flex-col dark:text-[#FFC2DA] dark:bg-[#34144A]">
            <img
                src="/images/background-curve.png"
                alt="Background graphic"
                className="absolute top-10 right-0 z-20 w-60 pointer-events-none"
            />
            <img
                src="/images/bckground-curve-2.png"
                alt="Background graphic"
                className="absolute top-150 left-0 z-20 w-150 pointer-events-none"
            />

            {/* Content */}
            <div className="mb-50 relative z-30">
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
                <div className="z-30">
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
    )
}