export default function ExplainForm() {
  return (
    <section className="mt-16 w-full max-w-2xl rounded-2xl border p-6 shadow-sm">
      <h2 className="text-2xl font-bold">
        Explain a concept
      </h2>

      <p className="mt-2 text-gray-600">
        Teach us what you know. AI will help you improve.
      </p>

      <textarea
        className="mt-6 h-40 w-full rounded-xl border p-4 outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Example: Explain photosynthesis in your own words..."
      />

      <button className="mt-4 rounded-xl bg-blue-600 px-6 py-3 text-white">
        Get AI Feedback
      </button>
    </section>
  );
}