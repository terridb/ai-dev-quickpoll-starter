import Link from "next/link";
import { Option, Poll } from "@/types";
import PollItemOption from "@/components/PollItemOption";

interface PollItemProps {
    poll: {
        id: number;
        question: string;
        options: Option[];
    };
}
export default function PollItem({ poll }: PollItemProps) {
    const totalVotes = poll.options.reduce(
        (sum, opt) => sum + opt.votes, 0
    );
    return (
        <div className="border rounded p-4">
            <h2 className="text-xl font-semibold mb-4">
                {poll.question}
            </h2>
            <div className="space-y-2 flex flex-col gap-2">
                {poll.options.map((option) => {
                    const pct = totalVotes > 0
                        ? (option.votes / totalVotes) * 100 : 0;
                    return (
                        <Link key={option.id}
                            href={`/poll/${poll.id}`}>
                            <div className="flex items-center
    gap-2 cursor-pointer
    hover:opacity-80">
                                <div className="flex-1 bg-gray-200
    rounded h-8 overflow-hidden">
                                    <div className="bg-blue-600
    h-full transition-all"
                                        style={{ width: `${pct}%` }}
                                    />
                                </div>
                                <span className="text-sm font-medium w-20">
                                    {option.text} ({option.votes})
                                </span>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}