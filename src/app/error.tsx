"use client";

// STAP 7: Error boundary
//
// Dit bestand vangt fouten op in de route.
// MOET een client component zijn ("use client" staat al bovenaan).
//
// Props die je krijgt:
// - error: Error — het error object met .message
// - reset: () => void — functie om de pagina opnieuw te proberen
//
// Bouw een nette error pagina met:
// - Een titel "Er ging iets mis!"
// - De error message
// - Een "Probeer opnieuw" knop die reset() aanroept

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="text-center py-16">
      <p>Er ging iets mis: {error.message}</p>
      <button onClick={() => reset()}>Probeer opnieuw</button>
    </div>
  );
}
