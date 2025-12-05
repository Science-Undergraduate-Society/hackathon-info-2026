import React from "react";

export default function WhatToExpect() {
    return (
        <div className=" pt-[clamp(40px,9vh,120px)]">
            <div className="max-w-screen-xl mx-auto px-6">
                <h2 className="text-center font-extrabold leading-tight text-[clamp(1.75rem,4.5vw,3.25rem)]">
                    What to Expect
                </h2>
                <p className="mt-3 md:mt-5 text-center text-[clamp(1rem,1.8vw,1.75rem)] opacity-95">
                    A weekend at Hack the Coast comes with a lot more than just building projects.
                </p>
            </div>

            <div className="max-w-screen-lg mx-auto px-6 mt-8 md:mt-12">
                <img
                    src="/images/expectation-roadmap.png"
                    alt="Hackathon experience roadmap"
                    className="w-full h-auto object-contain"
                />
            </div>
        </div>
    );
}
