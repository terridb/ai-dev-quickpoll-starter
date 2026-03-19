export interface Poll {
  id: string;
  question: string;
  options: string[];
  votes: number[];
}

export interface CreatePollBody {
  question: string;
  options: string[];
}
