'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function CreatePollPage() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const addOption = () =>
    setOptions([...options, ""]);

  const updateOption = (
    index: number, value: string
  ) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const removeOption = (index: number) => {
    if (options.length <= 2) return;
    setOptions(
      options.filter((_, i) => i !== index)
    );
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { data: poll, error: pollError } =
      await supabase.from("polls")
        .insert({ question })
        .select().single();

    if (pollError) {
      setError(pollError.message);
      setLoading(false);
      return;
    }

    const { error: optionsError } = await supabase.from("options")
      .insert(options
        .filter((option) => option.trim().length > 0)
        .map((option) => ({ poll_id: poll.id, text: option, votes: 0 }))
      );

    if (optionsError) {
      setError(optionsError.message);
      setLoading(false);
      return;
    }

    router.push("/");
    setLoading(false);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        Nieuwe Poll
      </h1>
      {error && (
        <p className="text-red-600 mb-4">{error}</p>
      )}
      <form onSubmit={handleSubmit}
        className="space-y-4">
        <div>
          <label className="block text-sm
font-medium mb-1">Vraag</label>
          <input type="text"
            value={question}
            onChange={(e) =>
              setQuestion(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Stel je vraag..."
            required />
        </div>
        <div>
          <label className="block text-sm
font-medium mb-2">Opties</label>
          {options.map((option, index) => (
            <div key={index}
              className="flex gap-2 mb-2">
              <input type="text"
                value={option}
                onChange={(e) =>
                  updateOption(index,
                    e.target.value)}
                className="flex-1 p-2
border rounded"
                placeholder={`Optie ${index + 1}`}
                required />
              {options.length > 2 && (
                <button type="button"
                  onClick={() =>
                    removeOption(index)}
                  className="text-red-500
hover:text-red-700 px-2">
                  X
                </button>
              )}
            </div>
          ))}
          <button type="button"
            onClick={addOption}
            className="text-blue-600
hover:underline text-sm">
            + Optie toevoegen
          </button>
        </div>
        <button type="submit"
          disabled={loading}
          className="w-full bg-blue-600
text-white p-2 rounded
hover:bg-blue-700
disabled:opacity-50">
          {loading ? "Bezig..." : "Poll aanmaken"}
        </button>
      </form>
    </div>
  );
}
