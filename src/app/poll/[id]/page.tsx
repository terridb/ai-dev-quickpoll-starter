import { getPollById } from "@/lib/data";
import VoteForm from "@/components/VoteForm";
import { notFound } from "next/navigation";
export default async function PollPage(
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params;
    const poll = await getPollById(parseInt(id));
    if (!poll) {
        notFound();
    }
    return (
        <div className="w-full max-w-md mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">
                {poll.question}
            </h1>
            <VoteForm options={poll.options} />
        </div>
    );
}
