"use client";

import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

interface Team {
  name: string;
  description: string;
  image?: string;
  devpost?: string;
}

interface Stream {
  title: string;
  badgeColor: string;
  sponsor?: string;
  sponsorLogo?: string;
  teams: Team[];
}

const streamsData: Stream[] = [
  {
    title: "Health Tech & Bio Innovation",
    badgeColor: "bg-cyan-400",
    teams: [
      {
        name: "HappyNappy",
        description: "The Nap That Knows You so You Wake Up Refreshed",
        image: "/images/winners/health_stream_winner.JPG",
        devpost: "https://devpost.com/software/happynappy?_gl=1*iv7q4x*_gcl_au*NjI2ODE1OTQxLjE3NzA1ODQyNTk.*_ga*OTQ2NjMxNDYwLjE3NzA1ODQyNjA.*_ga_0YHJK3Y10M*czE3NzA5NDMyMzkkbzIkZzEkdDE3NzA5NDM0ODYkajYwJGwwJGgw"
      }
    ]
  },
  {
    title: "Sustainability & Environment",
    badgeColor: "bg-teal-400",
    sponsor: "SAP",
    sponsorLogo: "/images/sponsors/sap.png",
    teams: [
      {
        name: "Rasterye",
        description: "A garden planning tool for smart crop rotation. Map your garden, log what you grow, get optimized planting plans.",
        image: "/images/winners/sustainability_stream_winner.JPG",
        devpost: "https://devpost.com/software/rasterye?_gl=1*4amaa6*_gcl_au*NjI2ODE1OTQxLjE3NzA1ODQyNTk.*_ga*OTQ2NjMxNDYwLjE3NzA1ODQyNjA.*_ga_0YHJK3Y10M*czE3NzA5NDMyMzkkbzIkZzEkdDE3NzA5NDM0NDgkajYkbDAkaDA"
      }
    ]
  },
  {
    title: "Science Tech for Social Good",
    badgeColor: "bg-purple-400",
    sponsor: "Smart Cohort",
    sponsorLogo: "/images/sponsors/smartcohort.png",
    teams: [
      {
        name: "Telebuddy",
        description: "The no-shake solder bot. With tele-augmented control, we allow AR operation for soldering practice, and apply a smoothing algorithm for mirrored movements to assist those with motor disorders.",
        image: "/images/winners/social_good_stream_winner.JPG",
        devpost: "https://devpost.com/software/park-e-rmejf2?_gl=1*xryuh2*_gcl_au*NjI2ODE1OTQxLjE3NzA1ODQyNTk.*_ga*OTQ2NjMxNDYwLjE3NzA1ODQyNjA.*_ga_0YHJK3Y10M*czE3NzA5NDMyMzkkbzIkZzEkdDE3NzA5NDMyNjYkajMzJGwwJGgw"
      }
    ]
  }
];

export default function WinnersPage() {

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/images/winners_bg.png"
          alt="Winners Background"
          fill
          className="object-fill"
          priority
          quality={100}
        />
      </div>

      {/* Home button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors"
      >
        <Home className="w-6 h-6" />
      </Link>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Logo */}
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <Image
              src="/images/dark-logo.png"
              alt="Hack the Coast Logo"
              fill
              className="object-contain"
            />
          </div>
          
          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-2 uppercase">
            <span className="bg-gradient-to-r from-[#E87FD9] via-[#E87FD9] to-[#E87FD9] bg-clip-text text-transparent">
              HACK THE COAST
            </span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Winners
          </h2>
        </div>

        {/* Cards - Vertical Stack */}
        <div className="space-y-16">
          {streamsData.map((stream, streamIndex) => (
            <div
              key={streamIndex}
              className="flex flex-col md:flex-row gap-6 bg-transparent"
            >
              {/* Image on Left */}
              <div className="md:w-80 flex-shrink-0">
                <div className="bg-gray-200 rounded-xl overflow-hidden h-64 md:h-full min-h-[250px]">
                  {stream.teams[0]?.image ? (
                    <Image
                      src={stream.teams[0].image}
                      alt={`${stream.title} winner`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Winner Photo
                    </div>
                  )}
                </div>
              </div>

              {/* Content on Right */}
              <div className="flex-1 flex flex-col justify-center">
                {/* Badge and Sponsor Row */}
                <div className="flex items-center gap-3 mb-4 flex-wrap">
                  <span className={`${stream.badgeColor} text-white px-8 py-3.5 rounded-full text-sm font-semibold`} style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    {stream.title}
                  </span>
                  {stream.sponsor && (
                    <div className="flex items-center gap-2 text-ms">
                      <span className="text-white/80">Sponsored by</span>
                      {stream.sponsorLogo ? (
                        <Image
                          src={stream.sponsorLogo}
                          alt={stream.sponsor}
                          width={400}
                          height={400}
                          className="h-10 w-auto object-contain"
                        />
                      ) : (
                        <span className="text-white font-bold">{stream.sponsor}</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Team Name */}
                <h3 className="text-2xl md:text-3xl font-bold mb-3">{stream.teams[0]?.name}</h3>
                
                {/* Description */}
                <p className="text-white/80 text-base mb-4 leading-relaxed">
                  {stream.teams[0]?.description}
                </p>

                {/* Devpost Link */}
                {stream.teams[0]?.devpost && (
                  <a
                    href={stream.teams[0].devpost}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm font-medium transition-colors"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 4.084h8.81l3.474 6.31l-3.473 6.31H7.595l-3.474-6.31L7.595 5.694z"/>
                    </svg>
                    View on Devpost
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
