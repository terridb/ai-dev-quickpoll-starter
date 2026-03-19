"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// BONUS: Maak een formulier om een nieuwe poll aan te maken
//
// Benodigde state:
// - question: string
// - options: string[] (start met ["", ""])
// - isSubmitting: boolean
// - error: string | null
//
// Wat moet je bouwen?
// 1. Een input voor de vraag
// 2. Inputs voor de opties (minimaal 2, maximaal 6)
// 3. Knoppen om opties toe te voegen/verwijderen
// 4. Een submit knop die POST naar /api/polls
// 5. Na success: redirect naar / met router.push("/")

export default function CreatePollPage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        Nieuwe Poll Aanmaken
      </h1>
      <p className="text-gray-400 italic">
        Bonus: bouw hier het create formulier
      </p>
    </div>
  );
}
