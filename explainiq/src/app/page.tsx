import ExplainForm from "@/components/ExplainForm";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-600">
          Active Learning
        </span>

        <h1 className="mt-6 text-5xl font-bold">
          ExplainIQ
        </h1>

        <p className="mt-4 max-w-2xl text-xl">
          Learn faster by teaching what you know
        </p>

        <button className="mt-10 rounded-xl bg-blue-600 px-8 py-4 text-white">
          Teach a Concept
        </button>
        <ExplainForm />
      </section>
    </main>
  );
}