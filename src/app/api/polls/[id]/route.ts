import {NextResponse} from "next/server";
import {getPollById} from "@/lib/data";
import {Poll} from "@/types";

interface RouteParams {
    params: Promise<{ id: string }>;
}

// STAP 3: GET /api/polls/[id] — enkele poll ophalen
//
// Wat moet je doen?
// 1. Haal het id op uit params (let op: params is een Promise!)
// 2. Zoek de poll met getPollById(id)
// 3. Als de poll niet bestaat, return een 404 JSON response
// 4. Als de poll wel bestaat, return de poll als JSON
//
// Hint: kijk naar /api/polls/route.ts voor een voorbeeld van NextResponse.json()

export async function GET(_request: Request, {params}: RouteParams
): Promise<NextResponse> {
    const {id} = await params;
    const poll: Poll | undefined = getPollById(id);
    if (!poll) {
        return NextResponse.json(
            {error: "Poll bestaat niet!"},
            {status: 404}
        )
    } else {
        return NextResponse.json(poll);
    }
}

export async function POST(request: Request, {params}: RouteParams) {
    const p = await params;
    console.log("Postpostpost", params)
    return NextResponse.json({succes: true});
}
