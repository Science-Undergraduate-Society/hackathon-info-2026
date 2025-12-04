"use client";

import React, { useState } from "react";

type FAQItemType = { q: string; a: React.ReactNode };

const FAQ_DATA: FAQItemType[] = [
    {
        q: "1. Do I need any experience to participate?",
        a: "Nope! Hack the Coast is beginner-friendly — we’ll have resources, mentors, and workshops to help you get started.",
    },
    {
        q: "2. Can I sign up without a team?",
        a: "Yes. You can register solo and form a team during our team-forming activities, or stay solo if you prefer.",
    },
    {
        q: "3. Does it cost anything to attend?",
        a: "Attendance is free for accepted participants.",
    },
    {
        q: "4. What should I bring?",
        a: "A laptop, charger, and any personal items you need. If you have hardware you want to use, feel free to bring it.",
    },
    {
        q: "5. What if I don’t know how to code?",
        a: (
            <>
                That’s totally okay! Hackathons aren’t just for programmers. You can
                contribute through design, ideation, presentation, product thinking, and
                more — plus you’ll learn a ton along the way.
            </>
        ),
    },
    {
        q: "6. Will there be mentors or support?",
        a: "Yes — mentors from academia and industry will be available throughout the event for guidance and feedback.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    const rowWidthClass = "mx-auto w-full max-w-[clamp(52rem,72vw,72rem)]";

    return (
        <div className="">
            <div className="w-full max-w-screen-2xl mx-auto px-6 md:px-16 xl:px-28 pt-[clamp(64px,18vh,240px)]">
                <h2 className="text-center font-extrabold leading-tight text-[clamp(1.9rem,5vw,3.5rem)]">
                    FAQ
                </h2>

                <div className="mt-8 md:mt-12">
                    {FAQ_DATA.map((item, idx) => {
                        const isOpen = open === idx;
                        return (
                            <div key={idx} className={rowWidthClass}>
                                <div className="h-[2px] bg-[#FFDEB1]/60" />

                                <button
                                    onClick={() => setOpen(isOpen ? null : idx)}
                                    className="w-full flex items-center justify-between gap-6 text-left py-[clamp(22px,3.8vw,40px)]"
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-panel-${idx}`}
                                >
                                    <span className="flex-1 text-[clamp(1.1rem,2.2vw,1.75rem)] leading-tight">
                                        {item.q}
                                    </span>

                                    <span className="relative flex-none w-7 h-7 self-center" aria-hidden>
                                        <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[3px] bg-[#FFDEB1]" />
                                        <span
                                            className={`absolute left-1/2 top-0 -translate-x-1/2 w-[3px] h-full bg-[#FFDEB1] transition-opacity duration-200 ${isOpen ? "opacity-0" : "opacity-100"
                                                }`}
                                        />
                                    </span>
                                </button>

                                <div
                                    id={`faq-panel-${idx}`}
                                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="text-[clamp(1rem,1.8vw,1.375rem)] leading-relaxed opacity-90 pb-6">
                                            {item.a}
                                        </p>
                                    </div>
                                </div>

                                <div className="h-[2px] bg-[#FFDEB1]/60" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
