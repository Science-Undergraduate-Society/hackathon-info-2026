"use client";

import React from "react";

export default function Sponsors() {
    const mainSponsors = [
        { name: "SAP", logo: "/images/sponsors/sap.png", height: "h-12 md:h-24", url: "https://www.sap.com/canada/index.html" },
        { name: "SmartCohort", logo: "/images/sponsors/smartcohort.png", height: "h-12 md:h-24", url: "https://smartcohort.org/" },
        { name: "AMS", logo: "/images/sponsors/ams.png", height: "h-12 md:h-24", url: "https://www.ams.ubc.ca/" },
        { name: "UBC Walter H. Gage Memorial Fund", height: "h-12 md:h-24", logo: "/images/sponsors/walter-gage.png", url: "https://vpstudents.ubc.ca/walter-gage/" },
        { name: "Major League Hacking", height: "h-12 md:h-24", logo: "/images/sponsors/mlh.png", url: "https://mlh.io/" },
    ];

    const bottomRowSponsors = [
        { name: "Kardium", logo: "/images/sponsors/kardium.png", height: "h-12 md:h-24", url: "https://kardium.com/" },
        { name: "Deloitte", logo: "/images/sponsors/deloitte.png", height: "h-12 md:h-24", url: "https://www.deloitte.com/ca/en.html" },
    ];

    const inKindSponsors = [
        { name: "Feather", logo: "/images/sponsors/feather.png", height: "h-12 md:h-24", url: "https://featherless.ai/" },
        { name: "Vancouver Lookout", logo: "/images/sponsors/vancouver-lookout.png", height: "h-24 md:h-44", url: "https://vancouverlookout.com/" },
        { name: "Indomie", logo: "/images/sponsors/indomie.png", height: "h-10 md:h-20", url: "https://indomieonline.ca/?srsltid=AfmBOooLX_FdpVd95w-vGZeDzzGmdKWyK4Ky1QqT4t-DwvzyUXZoaOVG" },
        { name: "Vancouver Water Adventures", logo: "/images/sponsors/water.png", height: "h-22 md:h-40", url: "https://vancouverwateradventures.com/seadoos/?utm_source=google&utm_medium=cpc&utm_campaign=21262818222&utm_content=&utm_term=&gad_source=1&gad_campaignid=21262832874&gbraid=0AAAAABVapELYAGaBxKIwbzsTVpRA5_AJl&gclid=Cj0KCQiA4eHLBhCzARIsAJ2NZoIT_T13-ruNw6Bw81w9QM561xE3s4PD6UZ9l5DrKB6E4j4mkSuo1PUaAkwEEALw_wcB" },
        { name: "Blackbird Interactive", logo: "/images/sponsors/blackbird.png", height: "h-12 md:h-24", url: "https://blackbirdinteractive.com/" },
        { name: "Steve's Poke Bar", logo: "/images/sponsors/steves-poke.png", height: "h-22 md:h-40", url: "https://www.stevespokebar.ca/" },
        { name: "Photoism", logo: "/images/sponsors/photoism.png", height: "h-8 md:h-16", url: "https://en.photoismshop.com/" },
        { name: "Rain or Shine", logo: "/images/sponsors/rain-or-shine.png", height: "h-10 md:h-20", url: "https://www.rainorshineicecream.com/" },
        { name: "Red Bull", logo: "/images/sponsors/red-bull.png", height: "h-22 md:h-40", url: "https://www.redbull.com/ca-en" },
        { name: "Firebird Prints", logo: "/images/sponsors/firebird-prints.png", height: "h-24 md:h-44", url: "https://firebirdprints.com/" }
    ];

    return (
        <div className="relative w-full bg-[#041D31]">
            {/* Background */}
            <img
                src="/images/end_background.png"
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover -mt-[600px]"
            />
            
            {/* Content */}
            <div className="relative w-full max-w-screen-2xl mx-auto px-6 md:px-16 xl:px-28 pt-16 pb-20">
                <h2 className="text-center font-extrabold leading-tight text-[clamp(1.875rem,4.5vw,3.5rem)] mb-12 text-[#FFD4B8] animate-fade-in-up">
                    Our Sponsors
                </h2>

                {/* Main Sponsors */}
                <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    {mainSponsors.map((sponsor, index) => (
                        <a 
                            key={index}
                            href={sponsor.url} target="_blank" rel="noopener noreferrer" 
                            className="block w-full bg-gradient-to-r from-[#7A4F8B]/80 to-[#9B7BB8]/80 border-2 border-[#47D5DA] rounded-xl p-8 flex items-center justify-center transition-all duration-300 hover:scale-[1.02] hover:border-[#47D5DA] hover:shadow-lg hover:shadow-[#47D5DA]/50 hover:from-[#7A4F8B]/90 hover:to-[#9B7BB8]/90"
                        >
                            <div className="flex items-center justify-center">
                                <img 
                                    src={sponsor.logo} 
                                    alt={sponsor.name}
                                    className="max-h-20 md:max-h-24 w-auto object-contain"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                            </div>
                        </a>
                    ))}
                </div>

                {/* Bottom Row - Two Sponsors */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {bottomRowSponsors.map((sponsor, index) => (
                        <a 
                            key={index}
                            href={sponsor.url} target="_blank" rel="noopener noreferrer" 
                            className="block w-full bg-gradient-to-r from-[#7A4F8B]/80 to-[#9B7BB8]/80 backdrop-blur-sm border-2 border-[#AAAAAA] rounded-xl p-8 flex items-center justify-center transition-all duration-300 hover:scale-[1.02] hover:border-[#D4C4E5] hover:shadow-lg hover:shadow-[#D4C4E5]/50 hover:from-[#7A4F8B]/90 hover:to-[#9B7BB8]/90"
                        >
                            <div className="flex items-center justify-center">
                                <img 
                                    src={sponsor.logo} 
                                    alt={sponsor.name}
                                    className={`${sponsor.height} w-auto object-contain opacity-90 hover:opacity-100 transition-opacity`}
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                            </div>
                        </a>
                    ))}
                </div>

                {/* In-Kind Sponsors */}
                <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                    <h3 className="text-center font-bold text-[clamp(1.5rem,3.5vw,2.5rem)] mb-8 text-[#FFD4B8]">
                        In-Kind Sponsors
                    </h3>
                    <div className="grid grid-cols-3 gap-6 md:gap-8">
                        {inKindSponsors.map((sponsor, index) => (
                            <div 
                                key={index}
                                className="flex items-center justify-center p-4 hover:scale-105 transition-transform duration-300"
                            >
                                {sponsor.url ? (
                                    <a href={sponsor.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                                        <img 
                                            src={sponsor.logo} 
                                            alt={sponsor.name}
                                            className={`${sponsor.height} w-auto object-contain opacity-90 hover:opacity-100 transition-opacity`}
                                            onError={(e) => {
                                                (e.target as HTMLImageElement).style.display = 'none';
                                            }}
                                        />
                                    </a>
                                ) : (
                                    <img 
                                        src={sponsor.logo} 
                                        alt={sponsor.name}
                                        className={`${sponsor.height} w-auto object-contain opacity-90 hover:opacity-100 transition-opacity`}
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).style.display = 'none';
                                        }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
