import {NextResponse} from "next/server";
import {votePoll} from "@/lib/data";
import {Poll} from "@/types";

interface RouteParams {
    params: Promise<{ id: string }>;
}

interface VoteBody {
    optionIndex: number;
}

// STAP 4: POST /api/polls/[id]/vote — stem uitbrengen
//
// Wat moet je doen?
// 1. Haal het id op uit params
// 2. Lees de request body (request.json()) en cast naar VoteBody
// 3. Valideer: is optionIndex een number?
// 4. Roep votePoll(id, body.optionIndex) aan
// 5. Als het resultaat undefined is: return 404
// 6. Anders: return de geüpdatete poll als JSON

export async function POST(
    request: Request,
    {params}: RouteParams
): Promise<NextResponse> {
    const {id} = await params;
    const body: VoteBody = await request.json();

    if (typeof body.optionIndex !== "number") {
        return NextResponse.json(
            {error: "optionIndex is verplicht"},
            {status: 400}
        );
    }

    const newVote: Poll | undefined = votePoll(id, body.optionIndex);

    if (!newVote) {
        return NextResponse.json(
            {error: "Vote aanmaken is niet gelukt"},
            {status: 404}
        )
    }

    return NextResponse.json(newVote);
}
