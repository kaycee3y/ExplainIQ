import Link from "next/link";
import Navbar from "@/components/Navbar";
import ExplainForm from "@/components/ExplainForm";

export default function ExplainPage() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-12">
      <Navbar />
      <div className="mt-8 w-full max-w-xl">
        <Link
          href="/"
          className="text-gray-500 hover:text-blue-600 flex items-center gap-1 mb-6 text-sm"
        >
          ← Back to home
        </Link>
        <ExplainForm />
      </div>
    </main>
  );
}