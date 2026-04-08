'use client'
import { useState } from "react";
import { votePoll } from "@/lib/data";
import { Option } from "@/types";
interface VoteFormProps {
    options: Option[];
}
export default function VoteForm({ options }: VoteFormProps) {
    const [loading, setLoading] = useState(false);
    const [voted, setVoted] = useState(false);
    const handleVote = async (optionId: number) => {
        setLoading(true);
        const success = await votePoll(optionId);
        if (success) {
            setVoted(true);
        }
        setLoading(false);
    };
    if (voted) {
        return <p className="text-green-600">
            Dank je voor je stem!</p>;
    }
    return (
        <div className="space-y-2">
            {options.map((option) => (
                <button key={option.id}
                    onClick={() => handleVote(option.id)}
                    disabled={loading}
                    className="w-full bg-blue-600 text-white
p-2 rounded hover:bg-blue-700
disabled:opacity-50">
                    {option.text}
                </button>
            ))}
        </div>
    );
}