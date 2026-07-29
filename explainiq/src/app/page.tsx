import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-16 md:py-24 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <span className="inline-block bg-blue-50 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
              Active Learning
            </span>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-4 leading-tight"
              style={{ fontFamily: "var(--font-baloo)" }}
            >
              Explain it.
              <br />
              Understand it.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 mb-8">
              Learn faster by teaching what you know.
            </p>
            <Link href="/explain">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200">
                Teach a Concept
              </button>
            </Link>
          </div>

          <div className="relative flex justify-center mt-8 md:mt-0">
            <div className="bg-white border border-gray-100 rounded-3xl shadow-2xl p-6 w-full max-w-xs sm:w-80 rotate-0 sm:rotate-3 hover:rotate-0 transition-transform duration-300">
              <p className="text-xs text-gray-400 font-medium mb-2">
                YOUR EXPLANATION
              </p>
              <p className="text-gray-700 text-sm mb-4">
                "Photosynthesis is when plants use sunlight to make food..."
              </p>
              <div className="flex items-center gap-2 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-white font-bold text-sm">
                  85
                </div>
                <span className="text-sm text-gray-500">
                  Understanding Score
                </span>
              </div>
            </div>

            <div className="absolute -top-3 -right-3 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full rotate-6 shadow-md">
              +10 XP
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-8 text-center">How it works</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-blue-600 font-bold text-xl mb-2">
              1. Explain
            </div>
            <p className="text-gray-500">
              Write a concept in your own words.
            </p>
          </div>
          <div>
            <div className="text-blue-600 font-bold text-xl mb-2">
              2. Analyze
            </div>
            <p className="text-gray-500">
              AI evaluates what you understood and missed.
            </p>
          </div>
          <div>
            <div className="text-blue-600 font-bold text-xl mb-2">
              3. Improve
            </div>
            <p className="text-gray-500">
              Get feedback, then explain again better.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-blue-50 px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-bold mb-2">Understanding Score</h3>
              <p className="text-gray-500">
                See exactly how well you grasp a concept, out of 100.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-bold mb-2">Targeted Feedback</h3>
              <p className="text-gray-500">
                Know precisely what you got right and what's missing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">About</h2>
        <p className="text-gray-500">
          ExplainIQ is built on a simple idea: if you can explain something
          clearly, you truly understand it. Instead of giving answers, we
          help you prove and improve what you know.
        </p>
      </section>
    </main>
  );
}