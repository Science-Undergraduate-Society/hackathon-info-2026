import React from "react";

export default function Footer() {
    const icons = [
        { src: "/images/email.png", alt: "Email", href: "#" },
        { src: "/images/facebook.png", alt: "Facebook", href: "#" },
        { src: "/images/instagram.png", alt: "Instagram", href: "#" },
        { src: "/images/linkedin.png", alt: "LinkedIn", href: "#" },
        { src: "/images/spotify.png", alt: "Spotify", href: "#" },
        { src: "/images/tiktok.png", alt: "TikTok", href: "#" },
        { src: "/images/youtube.png", alt: "YouTube", href: "#" },
    ];

    return (
        <div className="text-[#FFDEB1]">
            <div className="w-full max-w-screen-xl mx-auto px-8 pt-[clamp(120px,22vh,360px)] pb-20 md:pb-28">
                <div className="flex flex-col items-center gap-8 md:gap-10">
                    <img
                        src="/images/white-logo.png"
                        alt="UBC SUS — Hack the Coast"
                        className="h-auto object-contain w-[clamp(7.5rem,12vw,12rem)] pb-[clamp(12px,3vh,40px)]"
                    />

                    <div className="flex items-center justify-center flex-wrap gap-[clamp(1.75rem,5.5vw,6rem)]">
                        {icons.map((it) => (
                            <a key={it.alt} href={it.href} aria-label={it.alt}>
                                <img
                                    src={it.src}
                                    alt={it.alt}
                                    className="h-auto object-contain w-[clamp(2.25rem,4vw,3.75rem)]"
                                />
                            </a>
                        ))}
                    </div>

                    <p className="text-center mt-3 text-white text-[clamp(0.8rem,1vw,1rem)]">
                        Copyright © 2025 UBC Science Undergraduate Society
                    </p>
                </div>
            </div>
        </div>
    );
}
