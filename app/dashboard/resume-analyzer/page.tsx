"use client";

import { useState } from "react";
import axios from "axios";

export default function ResumeAnalyzer() {
  const [resume, setResume] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const analyzeResume = async () => {
    try {
      setLoading(true);

      const res = await axios.post("/api/resume", {
        resume,
      });

      setResult(res.data.response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        AI Resume Analyzer
      </h1>

      <textarea
        value={resume}
        onChange={(e) => setResume(e.target.value)}
        className="w-full h-64 bg-zinc-900 border border-zinc-700 rounded-2xl p-4"
        placeholder="Paste your resume..."
      />

      <button
        onClick={analyzeResume}
        className="mt-4 bg-white text-black px-6 py-3 rounded-xl"
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>

      {result && (
        <div className="mt-8 bg-zinc-900 p-6 rounded-2xl whitespace-pre-wrap">
          {result}
        </div>
      )}
    </div>
  );
}