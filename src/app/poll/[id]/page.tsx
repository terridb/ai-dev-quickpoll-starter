'use client'

import {notFound, useParams} from "next/navigation";
import {useState} from "react";
import {getPollById, votePoll} from "@/lib/data";
import VoteForm from "@/components/VoteForm";
import {Poll} from "@/types";
import PollItem from "@/components/PollItem";

export default function PollPage() {
    const params = useParams();

    if (!params.id) {
        notFound();
    }

    const id = params.id as string;
    const initialPoll: Poll | undefined = getPollById(id);
    if (!initialPoll) {
        notFound();
    }

    // Keep poll in React state so vote updates trigger a re-render.
    const [poll, setPoll] = useState<Poll>(initialPoll);

    const onPollItemClick = (option: string, index: number) => {
        const updated = votePoll(id, index);
        if (!updated) return;

        // `votePoll` mutates the in-memory object; clone to ensure a new reference.
        setPoll({
            ...updated,
            votes: [...updated.votes],
        });
    };

    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Poll</h1>
            <section>
                {poll ? <PollItem poll={poll} onOptionClick={onPollItemClick}/> : <p>No poll found!</p>}
            </section>
            <VoteForm poll={poll}/>
        </div>
    );
}
