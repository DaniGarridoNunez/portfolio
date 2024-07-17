"use client"

import { HeroParticles } from "@/components/hero-particles";
import Hero from "@/components/introduction";
import TransitionPage from "@/components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover">
        <HeroParticles />
        <Hero />
      </div>
    </main>
  );
}
