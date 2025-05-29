interface Props {
  result: { name: string; image: string };
  onRestart: () => void;
}

export default function ResultCard({ result, onRestart }: Props) {
  return (
    <div className="text-center">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Você seria o {result.name}!</h2>
      <img
        src={result.image}
        alt={result.name}
        className="w-48 h-48 mx-auto mb-6 rounded-xl object-contain"
      />
      <button
        onClick={onRestart}
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
      >
        Recomeçar
      </button>
    </div>
  );
}
