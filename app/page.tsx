import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex items-center justify-center px-6">
      
      <section className="text-center max-w-3xl">

        {/* TITLE */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          Crack Placements with{" "}
          <span className="text-zinc-400">AI</span>
        </h1>

        {/* SUBTITLE */}
        <p className="mt-6 text-zinc-400 text-lg md:text-xl leading-relaxed">
          Practice aptitude, solve coding problems, analyze resumes, and
          prepare for interviews using an AI-powered system built for serious
          candidates.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          {/* FIXED: go to sign-in FIRST (clean auth flow) */}
          <Link
            href="/sign-in"
            className="bg-white text-black px-7 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Get Started
          </Link>

          <Link
            href="/sign-up"
            className="border border-zinc-700 px-7 py-3 rounded-xl hover:bg-zinc-900 transition"
          >
            Create Account
          </Link>

        </div>

        {/* NOTE */}
        <p className="mt-8 text-sm text-zinc-600">
          Built for placement preparation • Full-stack + AI
        </p>

      </section>
    </main>
  );
}