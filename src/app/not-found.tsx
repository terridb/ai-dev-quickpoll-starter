import Link from "next/link";

// STAP 7: Not found pagina
//
// Wordt getoond als een pagina niet bestaat.
// Bouw een nette 404 pagina met een link terug naar home.

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">404</h2>
      <p className="text-gray-600 mb-6">Deze pagina bestaat niet.</p>
      <Link href="/" className="text-purple-600 hover:underline">
        Terug naar home
      </Link>
    </div>
  );
}
