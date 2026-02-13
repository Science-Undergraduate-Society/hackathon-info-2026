"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

interface Team {
  name: string;
  description: string;
  image?: string;
}

interface Stream {
  title: string;
  color: string;
  sponsor?: string;
  sponsorLogo?: string;
  teams: Team[];
}

const streamsData: Stream[] = [
  {
    title: "Health Tech & Bio Innovation",
    color: "bg-gradient-to-br from-purple-600 to-pink-600",
    sponsor: "SAP",
    teams: [
      {
        name: "Team 1 Name",
        description: "Insert project description here",
        image: "/images/winners/health_stream_winner.JPG"
      },
      {
        name: "Team 2 Name",
        description: "Insert project description here"
      },
      {
        name: "Team 3 Name",
        description: "Insert project description here"
      }
    ]
  },
  {
    title: "Sustainability & Environment",
    color: "bg-gradient-to-br from-purple-700 to-purple-900",
    sponsor: "SAP",
    teams: [
      {
        name: "Team 2 Name",
        description: "Insert project description here",
        image: "/images/winners/sustainability_stream_winner.JPG"
      }
    ]
  },
  {
    title: "Science Tech for Social Good",
    color: "bg-gradient-to-br from-purple-700 to-purple-900",
    teams: [
      {
        name: "Team 3 Name",
        description: "Insert project description here",
        image: "/images/winners/social_good_stream_winner.JPG"
      }
    ]
  }
];

export default function WinnersPage() {
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [pinnedCard, setPinnedCard] = useState<string | null>(null);

  const handleTeamClick = (teamName: string) => {
    if (pinnedCard === teamName) {
      setPinnedCard(null);
    } else {
      setPinnedCard(teamName);
    }
  };

  const handleTeamHover = (teamName: string) => {
    if (!pinnedCard) {
      setSelectedTeam(teamName);
    }
  };

  const handleTeamLeave = () => {
    if (!pinnedCard) {
      setSelectedTeam(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 via-purple-900 to-blue-950 text-white relative overflow-hidden">
      {/* Decorative cityscape at top */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-blue-900 to-transparent opacity-50">
        <div className="flex justify-around items-end h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="bg-blue-900 opacity-70"
              style={{
                width: `${Math.random() * 30 + 10}px`,
                height: `${Math.random() * 40 + 20}px`
              }}
            />
          ))}
        </div>
      </div>

      {/* Decorative cityscape at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <div className="flex justify-around items-end h-full">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="bg-blue-900"
              style={{
                width: `${Math.random() * 40 + 15}px`,
                height: `${Math.random() * 80 + 40}px`
              }}
            />
          ))}
        </div>
      </div>

      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`
            }}
          />
        ))}
      </div>

      {/* Home button */}
      <Link
        href="/"
        className="absolute top-6 left-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-colors"
      >
        <Home className="w-6 h-6" />
      </Link>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-20 h-20 mx-auto mb-6 border-4 border-white rounded-full flex items-center justify-center">
            <div className="text-3xl">⛵</div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-2">
            <span className="bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
              HACK THE COAST
            </span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Winners
          </h2>
        </div>

        {/* Timeline and Cards Layout */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Left Timeline */}
          <div className="lg:w-48 flex lg:flex-col justify-around lg:justify-start lg:space-y-12 lg:pt-32">
            <p className="text-sm text-cyan-300 mb-4 hidden lg:block">
              hover over team name to show cards, disappears when mouse moves away
              <br /><br />
              or click to keep card open
            </p>
            {["Team 1", "Team 2", "Team 3"].map((team, index) => (
              <div
                key={team}
                className="flex items-center gap-4 cursor-pointer group"
                onMouseEnter={() => handleTeamHover(team)}
                onMouseLeave={handleTeamLeave}
                onClick={() => handleTeamClick(team)}
              >
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full transition-all ${
                      selectedTeam === team || pinnedCard === team
                        ? "bg-cyan-400 scale-150"
                        : "bg-cyan-600 group-hover:bg-cyan-400"
                    }`}
                  />
                  {index < 2 && (
                    <div className="w-0.5 h-16 bg-cyan-600 mt-2 hidden lg:block" />
                  )}
                </div>
                <span
                  className={`text-lg transition-colors ${
                    selectedTeam === team || pinnedCard === team
                      ? "text-cyan-300"
                      : "text-white/70 group-hover:text-white"
                  }`}
                >
                  {team} Name
                </span>
              </div>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="flex-1 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {streamsData.map((stream, streamIndex) => (
              <div
                key={streamIndex}
                className={`${stream.color} rounded-3xl p-6 shadow-2xl transition-all duration-300 ${
                  selectedTeam &&
                  stream.teams.some((t) => t.name.includes(selectedTeam.split(" ")[1]))
                    ? "scale-105 opacity-100"
                    : selectedTeam || pinnedCard
                    ? "opacity-50 scale-95"
                    : "opacity-100"
                }`}
              >
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-cyan-400 text-blue-900 px-4 py-1 rounded-full text-sm font-semibold">
                    {stream.title}
                  </span>
                  {stream.sponsor && (
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/80">Sponsored by</span>
                      <span className="text-white font-bold">{stream.sponsor}</span>
                    </div>
                  )}
                </div>

                {/* Image placeholder */}
                <div className="bg-gray-200 rounded-xl h-48 mb-4 overflow-hidden">
                  {stream.teams[0]?.image ? (
                    <Image
                      src={stream.teams[0].image}
                      alt={`${stream.title} winner`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      Winner Photo
                    </div>
                  )}
                </div>

                {/* Team info */}
                <div>
                  <h3 className="text-xl font-bold mb-2">{stream.teams[0]?.name}</h3>
                  <p className="text-white/80 text-sm">{stream.teams[0]?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
