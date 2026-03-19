import { NextResponse } from "next/server";
import { getPolls, createPoll } from "@/lib/data";
import type { Poll, CreatePollBody } from "@/types";

// GET /api/polls — alle polls ophalen
export async function GET(): Promise<NextResponse<Poll[]>> {
  const polls = getPolls();
  return NextResponse.json(polls);
}

// POST /api/polls — nieuwe poll aanmaken
export async function POST(request: Request): Promise<NextResponse> {
  const body: CreatePollBody = await request.json();

  if (!body.question || !body.options || body.options.length < 2) {
    return NextResponse.json(
      { error: "Vraag en minstens 2 opties zijn verplicht" },
      { status: 400 }
    );
  }

  const newPoll = createPoll(body.question, body.options);
  return NextResponse.json(newPoll, { status: 201 });
}
