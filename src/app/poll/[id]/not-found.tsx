import Link from "next/link";

export default function PollNotFound() {
  return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Poll niet gevonden
      </h2>
      <p className="text-gray-600 mb-6">
        Deze poll bestaat niet of is verwijderd.
      </p>
      <Link href="/" className="text-purple-600 hover:underline">
        Bekijk alle polls
      </Link>
    </div>
  );
}
