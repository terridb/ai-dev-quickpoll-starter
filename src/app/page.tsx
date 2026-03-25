'use client'
import {getPolls} from "@/lib/data";
import type {Poll} from "@/types";
import PollItem from "@/components/PollItem";

export const dynamic = "force-dynamic";

export default function HomePage() {
    const polls: Poll[] = getPolls();

    const onClick = () => {
        console.log('klik');
    }

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Actieve Polls</h1>
            <p className="text-gray-500 mb-8">Klik op een poll om te stemmen</p>
            <ul className="grid gap-4">
                {polls.map((poll: Poll) => (
                    <PollItem poll={poll} key={poll.id} onOptionClick={onClick}/>
                ))
                }
            </ul>
        </div>
    );
}
