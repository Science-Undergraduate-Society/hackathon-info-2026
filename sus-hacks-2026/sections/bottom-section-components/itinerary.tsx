"use client";

import React, { useState } from "react";
import { ChevronDown, Clock, MapPin } from "lucide-react";

type ItineraryEvent = {
  title: string;
  time: string;
  location: string;
  description?: string;
};

type DaySchedule = {
  date: string;
  dayNumber: string;
  events: ItineraryEvent[];
};

export default function Itinerary() {
  const [openDay, setOpenDay] = useState<number | null>(null);

  const schedule: DaySchedule[] = [
    {
      date: "Feb 7, 2026",
      dayNumber: "12",
      events: [
        {
          title: "Check In + Networking",
          time: "8:00 AM → 12:00 PM",
          location: "Life Science Institute",
        },
        {
          title: "Team Building Activity",
          time: "10:00 AM → 11:00 AM",
          location: "Life Science Institute",
        },
        {
          title: "Opening Ceremony",
          time: "11:00 AM → 11:30 AM",
          location: "LSC 1",
        },
        {
          title: "Hacking Begins!",
          time: "12:00 PM",
          location: "LSI Atrium E",
        },
        {
          title: "Lunch",
          time: "1:00 PM",
          location: "Life Science Institute",
        },
        {
          title: "Workshop: Hardware",
          time: "2:00 PM",
          location: "Life Science Institute",
        },
        {
          title: "Workshop: Led by Sponsor TBD",
          time: "4:00 PM",
          location: "Life Science Institute",
        },
        {
          title: "Workshop: UBC Muaythai Club",
          time: "5:00 PM",
          location: "Life Science Institute",
        },
        {
          title: "Workshop: Led by Sponsor TBD",
          time: "6:00 PM",
          location: "Life Science Institute",
        },
        {
          title: "Dinner",
          time: "7:00 PM",
          location: "Life Science Institute",
        },
        {
            title: "Minigame: Speed Typing Competition",
            time: "10:00 PM",
            location: "Life Science Institute",
        },
        {
          title: "Midnight Snack",
          time: "11:45 PM",
          location: "Life Science Institute",
        },
      ],
    },
    {
      date: "Feb 8, 2026",
      dayNumber: "14",
      events: [
        {
          title: "Mario Kart Madness + Laptop Sticker Making",
          time: "12:00 AM",
          location: "Life Science Institute",
        },
        {
          title: "Workshop: UBC Barista Club",
          time: "8:00 AM",
          location: "Life Science Institute",
        },
        {
          title: "Breakfast",
          time: "9:00 AM",
          location: "Life Science Institute",
        },
        {
          title: "Submissions Soft Deadline!",
          time: "11:00 AM",
          location: "Life Science Institute",
        },
        {
          title: "Submissions Hard Deadline!",
          time: "12:00 PM",
          location: "Life Science Institute",
        },
        {
          title: "Project Expo + Judging",
          time: "1:00 PM",
          location: "Life Science Institute",
        },
        {
          title: "Closing Ceremony",
          time: "3:00 PM",
          location: "LSC 1",
        },
        {
          title: "Finalist Demos",
          time: "3:05 PM",
          location: "Life Science Institute",
        },
        {
          title: "Event Recap",
          time: "3:55 PM",
          location: "Life Science Institute",
        },
        {
          title: "Awards Ceremony",
          time: "4:20 PM",
          location: "Life Science Institute",
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
        </div>
      </div>
    </div>
  );
}
