export interface Poll {
  id: number;
  question: string;
  created_at: string;
  options: Option[];
  }
  
  export interface Option {
  id: number;
  poll_id: number;
  text: string;
  votes: number;
  created_at: string;
  }  