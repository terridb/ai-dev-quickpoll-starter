"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import type {Poll} from "@/types";

interface VoteFormProps {
    poll: Poll;
}

// STAP 6: VoteForm — de stem interface
//
// Dit is een CLIENT component ("use client" staat bovenaan).
// Hier mag je wel useState en onClick gebruiken!
//
// Benodigde state:
// - selectedOption: number | null (welke optie is geselecteerd)
// - hasVoted: boolean (heeft de gebruiker al gestemd)
// - isSubmitting: boolean (wordt het formulier verstuurd)
// - currentPoll: Poll (de huidige poll data, update na stemmen)
//
// Wat moet je bouwen?
// 1. Toon alle opties als klikbare knoppen
// 2. Highlight de geselecteerde optie
// 3. Een "Stem!" knop die een POST doet naar /api/polls/{id}/vote
// 4. Na het stemmen: toon de resultaten met percentages
//
// De fetch call voor stemmen:
//   const response = await fetch(`/api/polls/${currentPoll.id}/vote`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ optionIndex: selectedOption }),
//   });
//   if (response.ok) {
//     const updatedPoll: Poll = await response.json();
//     setCurrentPoll(updatedPoll);
//     setHasVoted(true);
//   }

export default function VoteForm({poll}: VoteFormProps) {
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [hasVoted, setHasVoted] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [currentPoll, setCurrentPoll] = useState<Poll>(poll);
    const router = useRouter();

    const totalVotes: number = currentPoll.votes.reduce(
        (sum, v) => sum + v,
        0
    );

    function getPercentage(votes: number): number {
        if (totalVotes === 0) return 0;
        return Math.round((votes / totalVotes) * 100);
    }

    async function handleVote(): Promise<void> {
        if (selectedOption === null || isSubmitting) return;
        setIsSubmitting(true);

        // STAP 6: Doe hier de fetch call naar de vote API
        // Zie de beschrijving hierboven voor de code

        const response = await fetch(`/api/polls/${currentPoll.id}/vote`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({optionIndex: selectedOption}),
        });
        if (response.ok) {
            const updatedPoll: Poll = await response.json();
            setCurrentPoll(updatedPoll);
            setHasVoted(true);
        }

        setIsSubmitting(false);
    }

    return (
        <div className="space-y-3">
            {/*
        STAP 6: Bouw hier de voting interface

        ALS de gebruiker nog NIET gestemd heeft:
        - Toon elke optie als een klikbare button
        - Highlight de geselecteerde optie (purple border)
        - Toon een radio-achtige indicator (gevuld/leeg rondje)
        - Toon een "Stem!" knop onderaan

        ALS de gebruiker WEL gestemd heeft:
        - Toon elke optie met een percentage balk
        - Toon het percentage en aantal stemmen
        - Toon "Bedankt voor je stem!"
        - Toon een "Terug" link naar /
      */}
        </div>
    );
}
