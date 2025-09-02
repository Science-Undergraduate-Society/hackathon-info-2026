import React from "react";

import {
    faMicroscope,
    faCode,
    faPalette,
    faLightbulb,
    faBrain,
    faLeaf
} from "@fortawesome/free-solid-svg-icons";
import Card from "@/components/card";

export default function WhoItsFor() {
    return(
        <div className="pt-20 bg-[#34144A]">
        <div className="relative bg-[#34144A] p-10 font-figtree text-center flex flex-col max-xl:p-10">
            <img
                src="/images/skyline.png"
                alt="Background graphic"
                className="absolute bottom-0 right-0 w-full pointer-events-none"
            />
            <div className="relative p-30 px-20 font-figtree text-center flex flex-col max-xl:p-5 px-10">
                <div className="mb-50 relative z-10">
                    <span className="font-bold text-center text-[clamp(1.75rem,4.5vw,3.25rem)]">
                        Who is Hack the Coast For?
                    </span>
                    <p className="mt-8 text-center mx-auto text-[clamp(1rem,1.8vw,1.75rem)]">
                        This hackathon is for everyone: first-timers, veterans, and the
                        simply curious. You don’t need experience, just the excitement to
                        jump in.
                    </p>
                    <p className="mt-8 text-center mx-auto text-[clamp(1rem,1.8vw,1.75rem)]">
                        We aim to create an environment where experienced hackers can
                        challenge themselves, and first-timers feel supported through
                        mentorship and workshops. You’ll get support, mentorship, and the
                        freedom to take on a role that fits you. No gatekeeping, no
                        experience required, and no cost to participate.
                    </p>
                    <div className="grid grid-rows-2 grid-cols-3 gap-10 mt-20 max-xl:grid-cols-1">
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
        </div>
    )
}