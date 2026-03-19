import Link from "next/link";
import {Poll} from "@/types";
import PollItemOption from "@/components/PollItemOption";

type PollItemProps = {
    poll: Poll,
    onClick?: (option: string) => void
}

function PollItem({poll, onClick}: PollItemProps) {
    const totalVotes = (poll: Poll) =>
        poll.votes.reduce((sum, v) => sum + v, 0);

    return (
        <Link href={`/poll/${poll.id}`}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-purple-300
              flex flex-col"
              key={poll.id}
        >
            <li className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold">
                    {poll.question}
                </h3>
                <p className="text-sm text-gray-500">
                    {poll.options.length} opties · {totalVotes(poll)} stemmen
                </p>
                <ul className="flex gap-4">
                    {poll.options.map((option: string) => (
                        <PollItemOption option={option} key={option} onClick={onClick}/>
                    ))}
                </ul>
            </li>
        </Link>
    );
}

export default PollItem;