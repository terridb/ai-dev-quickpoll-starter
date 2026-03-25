import { Poll } from "@/types";

export let polls: Poll[] = [
  {
    id: "1",
    question: "Wat is de beste code editor?",
    options: ["VS Code", "Cursor", "Vim", "WebStorm"],
    votes: [12, 25, 5, 3],
  },
  {
    id: "2",
    question: "Wat is de beste programmeertaal?",
    options: ["TypeScript", "Python", "Rust", "Go"],
    votes: [18, 15, 8, 4],
  },
  {
    id: "3",
    question: "Welk framework heeft de toekomst?",
    options: ["Next.js", "Remix", "Astro", "SvelteKit"],
    votes: [22, 6, 10, 7],
  },
];

let nextId = 4;

export function getPolls(): Poll[] {
  return polls;
}

export function getPollById(id: string): Poll | undefined {
  return polls.find((poll) => poll.id === id);
}

// export function createPoll(question: string, options: string[]): Poll {
//   const newPoll: Poll = {
//     id: String(nextId++),
//     question,
//     options,
//     votes: new Array(options.length).fill(0),
//   };
//   polls.push(newPoll);
//   return newPoll;
// }

export function votePoll(id: string, optionIndex: number | string) {
  const poll = polls.find((p) => p.id === id);
  console.log('votePoll', id, optionIndex);
  return poll;
}