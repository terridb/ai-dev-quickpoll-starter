import { Poll } from "@/types";
import { supabase } from "./supabase";

export async function getPolls(): Promise<Poll[]> {
    const { data, error } = await supabase.from("polls").select("*, options(*)");

    if (error) {
        console.error('Error fetching polls:', error);
        return [];
    }

    console.log('data', data);
    return data;
}

export async function getPollById(id: number): Promise<Poll | null> {
    const { data, error } = await supabase.from("polls").select("*, options(*)")
        .eq("id", id)
        .single();

    if (error) {
        console.error('Error fetching poll:', error);
        return null;
    }

    console.log('data', data);

    return data;
}

export async function votePoll(optionId: number) {
    const { data, error } = await supabase.rpc("vote_option", { option_id: optionId });

    if (error) {
        console.error('Error voting poll:', error);
        return false;
    }

    console.log('vote data', data);

    return true;
}