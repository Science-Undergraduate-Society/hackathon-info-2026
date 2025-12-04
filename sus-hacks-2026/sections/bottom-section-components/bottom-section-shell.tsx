import React from "react";

type Theme = "light" | "dark";

interface BottomSectionShellProps {
    className?: string;
    topPadding?: string;
    theme: Theme;
  }

export default function BottomSectionShell({
    children,
    className = "",
    topPadding = "clamp(40px, 12vh, 144px)",
    theme,
}: React.PropsWithChildren<BottomSectionShellProps>) {
    return (
        <section className={`relative w-full ${className}`}>
            {/* Solid base */}
            <div className="absolute inset-0 bg-[#34144A]" />

            {/* Gradient overlay as a repeating background so it never gets cut off */}
            <div
  aria-hidden
  className="absolute inset-0 select-none pointer-events-none"
  style={{
    backgroundImage:
      theme === "dark"
        ? "url('/images/dark-gradient-bg.png')" 
        : "url('/images/gradient-background.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    // backgroundSize: "100% auto",
    backgroundSize: "100%",
  }}
/>

            <div className="relative z-10" style={{ paddingTop: topPadding }}>
                {children}
            </div>
        </section>
    );
}
