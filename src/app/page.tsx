import { getPolls } from "@/lib/data";
import type { Poll } from "@/types";
import PollItem from "@/components/PollItem";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function HomePage() {
    const polls = await getPolls();
    return (
        <div className="w-full max-w-2xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Huidige Polls</h1>
            <Link href="/create"
                className="text-blue-600 hover:underline mb-6 block">
                + Nieuwe Poll
            </Link>
            <div className="space-y-4">
                {polls.map((poll) => (
                    <PollItem key={poll.id} poll={poll} />
                ))}
            </div>
        </div>
    );

}
