"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
const securitySchoolTestimonials = [
  {
    quote:
      'In 2024, the cybersecurity landscape will be more challenging than ever. Staying ahead of threats requires a proactive and adaptive approach.',
    name: 'John Smith',
    title: 'Chief Information Security Officer, CyberSafe Solutions',
  },
  {
    quote:
      "Understanding the latest cyber threats is crucial for developing effective defense strategies. Our goal is to equip you with the knowledge to protect your organization.",
    name: 'Jane Doe',
    title: 'Head of Cybersecurity Research, SecureTech',
  },
  {
    quote:
      "Advanced threat detection tools and techniques are essential in the fight against cybercrime. Join us to learn how to implement these in your security strategy.",
    name: 'Michael Lee',
    title: 'Senior Security Analyst, ProtectNet Inc.',
  },
  {
    quote:
      "Zero Trust is not just a buzzword; it's a necessary shift in how we approach network security in today's threat landscape.",
    name: 'Alice Johnson',
    title: 'Director of Security Architecture, NetGuardians',
  },
  {
    quote:
      'Implementing Zero Trust can seem daunting, but with the right strategies and tools, it becomes a powerful defense mechanism.',
    name: 'Robert Wilson',
    title: 'Principal Security Engineer, SafeNet Solutions',
  },
];

export default function TestomonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-white mb-8 z-10">Tell our Issue: Voices of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={securitySchoolTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}
