"use client";

import Editor from "@monaco-editor/react";

export default function CodingPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        Coding Playground
      </h1>

      <div className="rounded-2xl overflow-hidden border border-zinc-800">
        <Editor
          height="600px"
          defaultLanguage="javascript"
          defaultValue={`function solve() {\n  console.log("Hello World")\n}`}
          theme="vs-dark"
        />
      </div>
    </div>
  );
}