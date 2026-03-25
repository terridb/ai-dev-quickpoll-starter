'use client'

import {notFound, useParams} from "next/navigation";
import {getPollById, votePoll} from "@/lib/data";
import VoteForm from "@/components/VoteForm";
import {Poll} from "@/types";
import PollItem from "@/components/PollItem";

export default function PollPage() {
    const params = useParams();

    if (!params.id) {
        notFound();
    }

    const poll: Poll | undefined = getPollById(params.id as string);

    if (!poll) {
        notFound();
    }

    const onPollItemClick = async (option: string, index:number) => {
        console.log("Clicked option:", option, index);

       votePoll(params.id as string, option);
    }

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
