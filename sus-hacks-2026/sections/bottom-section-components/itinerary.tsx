"use client";

import React, { useState } from "react";
import { ChevronDown, Clock, MapPin } from "lucide-react";
import Image from "next/image";

type ItineraryEvent = {
  title: string;
  time: string;
  location: string;
  description?: string;
};

type DaySchedule = {
  date: string;
  events: ItineraryEvent[];
};

export default function Itinerary() {
  const [openDay, setOpenDay] = useState<number | null>(null);
  const [venueMapOpen, setVenueMapOpen] = useState(true);
  const [expoMapOpen, setExpoMapOpen] = useState(true);

  const schedule: DaySchedule[] = [
    {
      date: "Feb 7, 2026",
      events: [
        {
          title: "Check In + Networking",
          time: "9:00 AM → 11:00 AM",
          location: "Life Science Institute (LSI)",
        },
        {
          title: "Team Building Activity",
          time: "10:00 AM → 11:00 AM",
          location: "LSI Atrium E",
        },
        {
          title: "Opening Ceremony",
          time: "11:00 AM → 11:30 AM",
          location: "LSC 1003",
        },
        {
          title: "Hacking Begins!",
          time: "12:00 PM",
          location: "LSI Atrium E",
        },
        {
          title: "Lunch",
          time: "1:00 PM",
          location: "LSI Central Hallway",
        },
        {
          title: "Workshop: SmartCohort Sponsored",
          time: "2:00 PM",
          location: "LSI 1510",
        },
        {
          title: "Workshop: MLH Sponsored",
          time: "3:00 PM",
          location: "LSI 1510",
        },
        {
          title: "Workshop: SAP Sponsored",
          time: "4:00 PM",
          location: "LSI 1510",
        },
        {
          title: "Workshop: Meet Muay Thai (ft. UBC Muay Thai Club)",
          time: "5:00 PM",
          location: "LSI 1510",
        },
        {
          title: "Workshop: Hello Hardware (ft. Surprise Host)",
          time: "6:00 PM",
          location: "LSI 1510",
        },
        {
          title: "Dinner",
          time: "7:00 PM",
          location: "LSI Central Hallway",
        },
        {
            title: "Activity: Speed Typing Competition",
            time: "10:00 PM",
            location: "LSI 1510",
        },
        {
          title: "Midnight Ramen Bar",
          time: "11:45 PM",
          location: "Life Science Institute",
        },
        {
          title: "Laptop Sticker Decor Contest",
          time: "All-Day",
          location: "Life Science Institute",
        },
        {
          title: "DuckHunt Scavenger Hunt",
          time: "All-Day",
          location: "Life Science Institute",
        },
      ],
    },
    {
      date: "Feb 8, 2026",
      events: [
        {
          title: "Workshop: Pour-Over Coffee (ft. AMS Barista Club)",
          time: "8:00 AM",
          location: "LSI 1510",
        },
        {
          title: "Breakfast",
          time: "9:00 AM",
          location: "LSI Central Hallway",
        },
        {
          title: "Submissions Hard Deadline!",
          time: "12:00 PM",
          location: "Devpost",
        },
        {
          title: "Lunch",
          time: "12:00 PM",
          location: "LSI Central Hallway",
        },
        {
          title: "Photobooth: Photoism",
          time: "12:00 PM",
          location: "LSI",
        },
        {
          title: "Project Expo + Judging",
          time: "1:00 PM",
          location: "LSI Atrium E",
        },
        {
          title: "Closing Ceremony",
          time: "3:00 PM",
          location: "LSI 1003",
        },
      ],
    },
  ];

  return (
    <div className="pt-[clamp(40px,9vh,120px)]">
      <div className="max-w-screen-xl mx-auto px-6 animate-fade-in-up">
        <h2 className="text-center font-extrabold leading-tight text-[clamp(1.4875rem,3.825vw,2.7625rem)]">
          Event Schedule
        </h2>
        <p className="mt-3 md:mt-5 text-center text-[clamp(0.85rem,1.53vw,1.4875rem)] opacity-95">
          Your complete guide to 24 hours of hacking, workshops, and fun activities!
        </p>
      </div>

      <div className="max-w-screen-lg mx-auto px-6 mt-8 md:mt-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="space-y-4">
          {schedule.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#7A4F8B]/90 to-[#34144A]/90 backdrop-blur-sm border-2 border-[#E87FD9]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30"
            >
              {/* Day Header */}
              <button
                onClick={() => setOpenDay(openDay === dayIndex ? null : dayIndex)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <span className="text-[clamp(1.2rem,2vw,1.5rem)] font-bold">
                      {day.date}
                    </span>
                    <span className="text-[clamp(0.8rem,1.2vw,1rem)] opacity-75">
                      {day.events.length} events
                    </span>
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openDay === dayIndex ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Events List */}
              <div
                className={`grid transition-all duration-300 ease-out ${
                  openDay === dayIndex
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 space-y-3">
                    {day.events.map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className="bg-[#34144A]/50 rounded-xl p-4 border border-[#E87FD9]/20 hover:border-[#E87FD9]/50 transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
                      >
                        <h3 className="font-bold text-[clamp(0.95rem,1.5vw,1.2rem)] mb-2">
                          {event.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-[clamp(0.75rem,1.2vw,0.95rem)] opacity-90">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{event.location}</span>
                          </div>
                        </div>
                        {event.description && (
                          <p className="mt-2 text-[clamp(0.75rem,1.1vw,0.9rem)] opacity-80">
                            {event.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Venue LSI Map Section */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#7A4F8B]/90 to-[#34144A]/90 backdrop-blur-sm border-2 border-[#E87FD9]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30">
            <button
              onClick={() => setVenueMapOpen(!venueMapOpen)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <h3 className="font-bold text-[clamp(1.2rem,2vw,1.5rem)]">
                  Venue Map
                </h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 transition-transform duration-300 ${
                  venueMapOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    venueMapOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col md:flex-row gap-4 p-6">
                  {/* Main LSI Map */}
                  <div className="md:w-1/2 rounded-2xl overflow-hidden bg-gradient-to-br from-[#7A4F8B]/90 to-[#34144A]/90 backdrop-blur-sm border-2 border-[#E87FD9]/30 p-4">
                    <div className="bg-[#34144A]/50 rounded-xl overflow-hidden">
                      <Image
                        src="/images/maps/lsi_map.png"
                        alt="LSI Venue Map"
                        width={800}
                        height={450}
                        className="w-full h-auto max-h-[400px] object-contain"
                      />
                    </div>
                  </div>

                  {/* Zoomed LSI Map */}
                  <div className="md:w-1/2 rounded-2xl overflow-hidden bg-gradient-to-br from-[#7A4F8B]/90 to-[#34144A]/90 backdrop-blur-sm border-2 border-[#E87FD9]/30 p-4">
                    <div className="bg-[#34144A]/50 rounded-xl overflow-hidden">
                      <Image
                        src="/images/maps/hacking_space.png"
                        alt="Detailed Hacking Space Map"
                        width={800}
                        height={450}
                        className="w-full h-auto max-h-[400px] object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Booth Assignments - Horizontal Layout */}
                <div className="rounded-2xl overflow-hidden p-6 mt-6">
                  <h4 className="font-bold text-[clamp(1rem,1.8vw,1.3rem)] mb-4 text-center">
                    Booth Assignments
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Clubs & Organizations */}
                    <div className="bg-[#34144A]/50 rounded-xl p-4 border border-[#E87FD9]/20s">
                      <h5 className="font-bold text-[clamp(0.95rem,1.5vw,1.1rem)] mb-3 text-[#E87FD9]">
                        Clubs & Organizations
                      </h5>
                      <ul className="space-y-2 text-[clamp(0.8rem,1.2vw,0.95rem)]">
                        <li><span className="font-semibold">A.</span> UBC Biotechnology</li>
                        <li><span className="font-semibold">B.</span> Notion @ UBC</li>
                        <li><span className="font-semibold">C.</span> Women in CS</li>
                        <li><span className="font-semibold">D.</span> Figma @ UBC</li>
                        <li><span className="font-semibold">E.</span> AI Safety</li>
                        <li><span className="font-semibold">F.</span> Women in Science</li>
                        <li><span className="font-semibold">G.</span> Women in Data Science</li>
                        <li><span className="font-semibold">H.</span> BEST</li>
                        <li><span className="font-semibold">I.</span> Thunderbots</li>
                        <li><span className="font-semibold">J.</span> Thunderbots</li>
                        <li><span className="font-semibold">O.</span> SUS Sustainability</li>
                        <li><span className="font-semibold">P.</span> SUS Academic</li>
                      </ul>
                    </div>

                    {/* Sponsors */}
                    <div className="bg-[#34144A]/50 rounded-xl p-4 border border-[#E87FD9]/20s">
                      <h5 className="font-bold text-[clamp(0.95rem,1.5vw,1.1rem)] mb-3 text-[#E87FD9]">
                        Sponsors
                      </h5>
                      <ul className="space-y-2 text-[clamp(0.8rem,1.2vw,0.95rem)]">
                        <li><span className="font-semibold">K.</span> MLH</li>
                        <li><span className="font-semibold">L.</span> SAP</li>
                        <li><span className="font-semibold">M.</span> SmartCohort</li>
                        <li><span className="font-semibold">N.</span> Deloitte</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Expo Map Section */}
          <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#7A4F8B]/90 to-[#34144A]/90 backdrop-blur-sm border-2 border-[#E87FD9]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30">
            <button
              onClick={() => setExpoMapOpen(!expoMapOpen)}
              className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <h3 className="font-bold text-[clamp(1.2rem,2vw,1.5rem)]">
                  Project Expo Map
                </h3>
              </div>
              <ChevronDown
                className={`w-6 h-6 transition-transform duration-300 ${
                  expoMapOpen ? "rotate-180" : ""
                }`}
              />
            </button>
        
            <div
              className={`grid transition-all duration-300 ease-out ${
                expoMapOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-6">
                  <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Main Expo Map */}
              <div className="md:w-1/2 rounded-2xl overflow-hidden bg-gradient-to-br from-[#7A4F8B]/90 to-[#34144A]/90 backdrop-blur-sm border-2 border-[#E87FD9]/30 p-4">
                <div className="bg-[#34144A]/50 rounded-xl overflow-hidden">
                  <Image
                    src="/images/maps/lsi_map_expo.png"
                    alt="Project Expo Map"
                    width={800}
                    height={450}
                    className="w-full h-auto max-h-[400px] object-contain"
                  />
                </div>
              </div>

              {/* Detailed Expo Seating Map */}
              <div className="md:w-1/2 rounded-2xl overflow-hidden bg-gradient-to-br from-[#7A4F8B]/90 to-[#34144A]/90 backdrop-blur-sm border-2 border-[#E87FD9]/30 p-4">
                <div className="bg-[#34144A]/50 rounded-xl overflow-hidden">
                  <Image
                    src="/images/maps/expo_seating.png"
                    alt="Detailed Expo Seating Map"
                    width={800}
                    height={450}
                    className="w-full h-auto max-h-[400px] object-contain"
                  />
                </div>
              </div>
            </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
