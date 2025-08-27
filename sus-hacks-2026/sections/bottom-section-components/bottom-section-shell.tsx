import React from "react";

export default function BottomSectionShell({
    children,
    className = "",
    topPadding = "clamp(40px, 12vh, 144px)",
}: React.PropsWithChildren<{ className?: string; topPadding?: string }>) {
    return (
        <section className={`relative w-full ${className}`}>
            {/* Solid base */}
            <div className="absolute inset-0 bg-[#34144A]" />

            {/* Gradient overlay as a repeating background so it never gets cut off */}
            <div
                aria-hidden
                className="absolute inset-0 select-none pointer-events-none"
                style={{
                    backgroundImage: "url('/images/gradient-background.png')",
                    backgroundRepeat: "repeat-y",
                    backgroundPosition: "top center",
                    backgroundSize: "100% auto",
                }}
            />

            <div className="relative z-10" style={{ paddingTop: topPadding }}>
                {children}
            </div>
        </section>
    );
}
